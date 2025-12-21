// API route to fetch Instagram reels from @tennisuniversel
// Uses Puppeteer to scrape Instagram and extract reels

import puppeteer from "puppeteer";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  let browser = null;

  try {
    const username = "tennisuniversel";

    console.log("Launching Puppeteer...");
    // Launch Puppeteer browser
    browser = await puppeteer.launch({
      headless: true,
      args: [
        "--no-sandbox",
        "--disable-setuid-sandbox",
        "--disable-dev-shm-usage",
        "--disable-accelerated-2d-canvas",
        "--no-first-run",
        "--no-zygote",
        "--disable-gpu",
      ],
    });

    const page = await browser.newPage();

    // Set viewport and user agent
    await page.setViewport({ width: 1920, height: 1080 });
    await page.setUserAgent(
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
    );

    // Navigate to Instagram profile
    console.log(`Navigating to https://www.instagram.com/${username}/`);
    await page.goto(`https://www.instagram.com/${username}/`, {
      waitUntil: "networkidle0",
      timeout: 30000,
    });

    // Wait for content to load
    await new Promise((resolve) => setTimeout(resolve, 5000));

    // Scroll down to load more content
    await page.evaluate(() => {
      window.scrollTo(0, document.body.scrollHeight);
    });
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Extract all reel URLs from the page
    console.log("Extracting reel URLs from page...");
    const reelData = await page.evaluate(() => {
      const reels = [];
      const seenShortcodes = new Set();
      const debugInfo = { videosFound: 0, reelsAdded: 0, durationFields: [] };

      // Method 1: Find all links with /reel/ in href
      // Note: Duration check will be done in Method 2 and 3 where we have access to video metadata
      const links = Array.from(document.querySelectorAll('a[href*="/reel/"]'));
      links.forEach((link) => {
        const href = link.getAttribute("href");
        const match = href.match(/\/reel\/([A-Za-z0-9_-]+)/);
        if (match && match[1] && !seenShortcodes.has(match[1])) {
          // We'll add these in Method 2/3 where we can check duration
          seenShortcodes.add(match[1]);
        }
      });

      // Method 2: Look for reel data in JSON scripts
      const scripts = Array.from(
        document.querySelectorAll('script[type="application/json"]')
      );
      for (const script of scripts) {
        try {
          const data = JSON.parse(script.textContent);

          // Recursively search for reel data
          const findReels = (obj) => {
            if (!obj || typeof obj !== "object") return;

            if (obj.shortcode && obj.is_video) {
              debugInfo.videosFound++;
              const shortcode = obj.shortcode;

              // Try multiple possible duration fields
              const videoDuration =
                obj.video_duration ||
                obj.videoDuration ||
                obj.duration ||
                obj.video_view_count?.duration ||
                0;

              // Log duration fields for debugging
              if (obj.video_duration || obj.videoDuration || obj.duration) {
                debugInfo.durationFields.push({
                  shortcode,
                  video_duration: obj.video_duration,
                  videoDuration: obj.videoDuration,
                  duration: obj.duration,
                  allKeys: Object.keys(obj).filter(
                    (k) => k.includes("duration") || k.includes("time")
                  ),
                });
              }

              // Check video duration - filter for 2+ minutes (120+ seconds)
              // If duration is 0 or not found, still include it but log it
              if (!seenShortcodes.has(shortcode)) {
                if (videoDuration >= 120 || videoDuration === 0) {
                  seenShortcodes.add(shortcode);
                  debugInfo.reelsAdded++;
                  reels.push({
                    shortcode: shortcode,
                    reelUrl: `https://www.instagram.com/reel/${shortcode}/`,
                    caption:
                      obj.edge_media_to_caption?.edges?.[0]?.node?.text ||
                      obj.caption ||
                      "",
                    duration: videoDuration,
                  });
                }
              }
            }

            for (const key in obj) {
              if (Array.isArray(obj[key])) {
                obj[key].forEach(findReels);
              } else if (typeof obj[key] === "object") {
                findReels(obj[key]);
              }
            }
          };

          findReels(data);
        } catch (e) {
          // Continue to next script
        }
      }

      // Method 3: Extract from window._sharedData if available
      if (window._sharedData) {
        try {
          const userData =
            window._sharedData?.entry_data?.ProfilePage?.[0]?.graphql?.user;
          if (userData?.edge_owner_to_timeline_media?.edges) {
            userData.edge_owner_to_timeline_media.edges.forEach((edge) => {
              const node = edge.node;
              if (
                node.is_video &&
                node.shortcode &&
                !seenShortcodes.has(node.shortcode)
              ) {
                debugInfo.videosFound++;

                // Try multiple possible duration fields
                const videoDuration =
                  node.video_duration ||
                  node.videoDuration ||
                  node.duration ||
                  node.video_view_count?.duration ||
                  0;

                // Log duration fields for debugging
                if (
                  node.video_duration ||
                  node.videoDuration ||
                  node.duration
                ) {
                  debugInfo.durationFields.push({
                    shortcode: node.shortcode,
                    video_duration: node.video_duration,
                    videoDuration: node.videoDuration,
                    duration: node.duration,
                    allKeys: Object.keys(node).filter(
                      (k) => k.includes("duration") || k.includes("time")
                    ),
                  });
                }

                // Check video duration - filter for 2+ minutes (120+ seconds)
                // If duration is 0 or not found, still include it but log it
                if (videoDuration >= 120 || videoDuration === 0) {
                  seenShortcodes.add(node.shortcode);
                  debugInfo.reelsAdded++;
                  reels.push({
                    shortcode: node.shortcode,
                    reelUrl: `https://www.instagram.com/reel/${node.shortcode}/`,
                    caption:
                      node.edge_media_to_caption?.edges?.[0]?.node?.text || "",
                    duration: videoDuration,
                  });
                }
              }
            });
          }
        } catch (e) {
          console.error("Error parsing _sharedData:", e);
        }
      }

      return { reels, debugInfo };
    });

    await browser.close();

    const { reels: allReels, debugInfo } = reelData;

    console.log("Debug info:", JSON.stringify(debugInfo, null, 2));
    console.log(`Found ${allReels.length} total reels`);

    if (allReels.length > 0) {
      console.log("Sample reel data:", JSON.stringify(allReels[0], null, 2));
    }

    // Filter reels by duration (2+ minutes = 120+ seconds)
    // If duration is 0 (not found), include it anyway for now
    const longReels = allReels.filter((reel) => {
      const duration = reel.duration || 0;
      return duration >= 120 || duration === 0; // Include if 2+ min OR duration unknown
    });

    console.log(
      `Found ${allReels.length} total reels, ${longReels.length} are 2+ minutes (or duration unknown)`
    );

    if (longReels.length === 0) {
      return res.status(200).json({
        data: [],
        message: "No reels found with duration >= 2 minutes",
        debug: {
          username,
          totalReels: allReels.length,
          debugInfo,
          timestamp: new Date().toISOString(),
        },
      });
    }

    // Get last 3 long reels (most recent interviews)
    const last3Reels = longReels.slice(0, 3).map((reel, index) => ({
      id: `reel-${reel.shortcode}`,
      reelUrl: reel.reelUrl,
      shortcode: reel.shortcode,
      caption: reel.caption || "",
      duration: reel.duration,
      timestamp: new Date(Date.now() - index * 86400000).toISOString(),
      isVideo: true,
    }));

    console.log(`Returning ${last3Reels.length} reels`);

    return res.status(200).json({ data: last3Reels });
  } catch (error) {
    console.error("Instagram API Error:", error);
    if (browser) {
      await browser.close();
    }

    return res.status(200).json({
      data: [],
      error: error.message || "Failed to fetch Instagram reels",
      stack: process.env.NODE_ENV === "development" ? error.stack : undefined,
    });
  }
}
