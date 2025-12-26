// Cron job endpoint to refresh Instagram reels
// Robust scraper using Puppeteer with advanced stealth techniques
// Can also use Browserless.io if configured via BROWSERLESS_URL env var

import puppeteer from "puppeteer";
import fs from "fs";
import path from "path";

// Helper function to create browser (Puppeteer or Browserless)
async function createBrowser() {
  const browserlessUrl = process.env.BROWSERLESS_URL;

  if (browserlessUrl) {
    console.log("[CRON] Using Browserless.io");
    return await puppeteer.connect({
      browserWSEndpoint: browserlessUrl,
    });
  } else {
    console.log("[CRON] Using local Puppeteer");
    return await puppeteer.launch({
      headless: true,
      args: [
        "--no-sandbox",
        "--disable-setuid-sandbox",
        "--disable-dev-shm-usage",
        "--disable-blink-features=AutomationControlled",
        "--disable-features=IsolateOrigins,site-per-process",
        "--disable-web-security",
        "--disable-features=VizDisplayCompositor",
        "--window-size=1920,1080",
      ],
    });
  }
}

export default async function handler(req, res) {
  const authHeader = req.headers.authorization;
  const cronSecret = process.env.CRON_SECRET;

  if (cronSecret && authHeader !== `Bearer ${cronSecret}`) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  let browser = null;

  try {
    const username = "tennisuniversel";

    console.log("[CRON] Starting Instagram reels refresh...");
    browser = await createBrowser();
    const page = await browser.newPage();

    // Advanced stealth techniques
    await page.evaluateOnNewDocument(() => {
      // Remove webdriver property
      Object.defineProperty(navigator, "webdriver", {
        get: () => false,
      });

      // Override plugins
      Object.defineProperty(navigator, "plugins", {
        get: () => [1, 2, 3, 4, 5],
      });

      // Override languages
      Object.defineProperty(navigator, "languages", {
        get: () => ["fr-FR", "fr", "en-US", "en"],
      });

      // Mock chrome
      window.chrome = {
        runtime: {},
        loadTimes: function () {},
        csi: function () {},
        app: {},
      };

      // Override permissions
      const originalQuery = window.navigator.permissions.query;
      window.navigator.permissions.query = (parameters) =>
        parameters.name === "notifications"
          ? Promise.resolve({ state: Notification.permission })
          : originalQuery(parameters);

      // Override getBattery
      if (navigator.getBattery) {
        navigator.getBattery = () =>
          Promise.resolve({
            charging: true,
            chargingTime: 0,
            dischargingTime: Infinity,
            level: 1,
          });
      }

      // Override platform
      Object.defineProperty(navigator, "platform", {
        get: () => "MacIntel",
      });

      // Override hardwareConcurrency
      Object.defineProperty(navigator, "hardwareConcurrency", {
        get: () => 8,
      });

      // Override deviceMemory
      Object.defineProperty(navigator, "deviceMemory", {
        get: () => 8,
      });
    });

    await page.setViewport({ width: 1920, height: 1080 });
    await page.setUserAgent(
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
    );

    // Set realistic headers
    await page.setExtraHTTPHeaders({
      "Accept-Language": "fr-FR,fr;q=0.9,en-US;q=0.8,en;q=0.7",
      Accept:
        "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8",
      "Accept-Encoding": "gzip, deflate, br",
      "Sec-Fetch-Dest": "document",
      "Sec-Fetch-Mode": "navigate",
      "Sec-Fetch-Site": "none",
      "Sec-Fetch-User": "?1",
      "Upgrade-Insecure-Requests": "1",
      Referer: "https://www.google.com/",
    });

    console.log(`[CRON] Navigating to https://www.instagram.com/${username}/`);

    // Navigate with retry
    let success = false;
    for (let attempt = 1; attempt <= 3; attempt++) {
      try {
        console.log(`[CRON] Attempt ${attempt}/3`);
        await page.goto(`https://www.instagram.com/${username}/`, {
          waitUntil: "domcontentloaded",
          timeout: 60000,
        });

        await new Promise((resolve) => setTimeout(resolve, 8000));

        const pageTitle = await page.title();
        const pageUrl = page.url();
        const contentLength = (await page.content()).length;

        console.log(`[CRON] Title: ${pageTitle}`);
        console.log(`[CRON] URL: ${pageUrl}`);
        console.log(`[CRON] Content length: ${contentLength}`);

        if (
          !pageTitle.includes("Page couldn't load") &&
          !pageTitle.includes("Impossible de charger") &&
          !pageUrl.includes("accounts/login") &&
          contentLength > 50000
        ) {
          success = true;
          break;
        } else {
          console.log(`[CRON] Blocked on attempt ${attempt}, retrying...`);
          await new Promise((resolve) => setTimeout(resolve, 10000));
        }
      } catch (error) {
        console.log(`[CRON] Error on attempt ${attempt}:`, error.message);
        if (attempt < 3) {
          await new Promise((resolve) => setTimeout(resolve, 10000));
        }
      }
    }

    if (!success) {
      await browser.close();
      return res.status(200).json({
        success: false,
        message: "Failed to load Instagram after 3 attempts",
      });
    }

    // Wait for content
    console.log("[CRON] Waiting for content to load...");
    await new Promise((resolve) => setTimeout(resolve, 10000));

    // Try to wait for content
    try {
      await page.waitForSelector("article, a", { timeout: 15000 });
    } catch (e) {
      console.log("[CRON] No articles found, continuing...");
    }

    // Aggressive scrolling to load all content
    console.log("[CRON] Scrolling to load content...");
    for (let i = 0; i < 10; i++) {
      await page.evaluate(() => {
        window.scrollBy(0, window.innerHeight * 2);
      });
      await new Promise((resolve) => setTimeout(resolve, 2000));

      const linkCount = await page.evaluate(() => {
        return document.querySelectorAll('a[href*="/reel/"]').length;
      });
      console.log(`[CRON] Scroll ${i + 1}/10: ${linkCount} reel links`);
    }

    // Final scroll
    await page.evaluate(() => {
      window.scrollTo(0, document.body.scrollHeight);
    });
    await new Promise((resolve) => setTimeout(resolve, 5000));

    // Extract reels
    console.log("[CRON] Extracting reels...");
    const result = await page.evaluate(() => {
      const reels = [];
      const seen = new Set();

      // Method 1: Extract from links
      const links = Array.from(document.querySelectorAll("a"));
      links.forEach((link) => {
        const href = link.getAttribute("href");
        if (href && href.includes("/reel/")) {
          const match = href.match(/\/reel\/([A-Za-z0-9_-]+)/);
          if (match && match[1] && !seen.has(match[1])) {
            seen.add(match[1]);
            reels.push({
              shortcode: match[1],
              reelUrl: `https://www.instagram.com/reel/${match[1]}/`,
            });
          }
        }
      });

      // Method 2: Extract from window._sharedData
      if (window._sharedData) {
        try {
          const userData =
            window._sharedData?.entry_data?.ProfilePage?.[0]?.graphql?.user;
          if (userData?.edge_owner_to_timeline_media?.edges) {
            userData.edge_owner_to_timeline_media.edges.forEach((edge) => {
              const node = edge.node;
              if (node.is_video && node.shortcode) {
                const shortcode = node.shortcode;
                const duration =
                  node.video_duration ||
                  node.videoDuration ||
                  node.duration ||
                  0;

                if (!seen.has(shortcode)) {
                  seen.add(shortcode);
                  reels.push({
                    shortcode: shortcode,
                    reelUrl: `https://www.instagram.com/reel/${shortcode}/`,
                    caption:
                      node.edge_media_to_caption?.edges?.[0]?.node?.text || "",
                    duration: duration,
                  });
                } else {
                  const existing = reels.find((r) => r.shortcode === shortcode);
                  if (existing) {
                    existing.caption =
                      node.edge_media_to_caption?.edges?.[0]?.node?.text ||
                      existing.caption;
                    existing.duration = duration || existing.duration;
                  }
                }
              }
            });
          }
        } catch (e) {
          console.error("Error parsing _sharedData:", e);
        }
      }

      // Method 3: Extract from JSON scripts
      const scripts = Array.from(
        document.querySelectorAll('script[type="application/json"]')
      );
      scripts.forEach((script) => {
        try {
          const scriptText = script.textContent;
          const reelMatches = scriptText.match(/\/reel\/([A-Za-z0-9_-]+)/g);
          if (reelMatches) {
            reelMatches.forEach((match) => {
              const shortcodeMatch = match.match(/\/reel\/([A-Za-z0-9_-]+)/);
              if (
                shortcodeMatch &&
                shortcodeMatch[1] &&
                !seen.has(shortcodeMatch[1])
              ) {
                seen.add(shortcodeMatch[1]);
                reels.push({
                  shortcode: shortcodeMatch[1],
                  reelUrl: `https://www.instagram.com/reel/${shortcodeMatch[1]}/`,
                });
              }
            });
          }
        } catch (e) {
          // Skip invalid JSON
        }
      });

      return reels;
    });

    // Close browser (only if we created it, not if connected to Browserless)
    if (!process.env.BROWSERLESS_URL) {
      await browser.close();
    } else {
      await page.close();
    }

    console.log(`[CRON] Found ${result.length} total reels`);

    if (result.length === 0) {
      return res.status(200).json({
        success: false,
        message: "No reels found",
      });
    }

    // Filter for 2+ minutes or unknown duration
    const filteredReels = result.filter((reel) => {
      const duration = reel.duration || 0;
      return duration >= 120 || duration === 0;
    });

    console.log(
      `[CRON] Filtered to ${filteredReels.length} reels (2+ min or unknown)`
    );

    // Get last 3
    const last3Reels = filteredReels.slice(0, 3).map((reel, index) => ({
      id: `reel-${reel.shortcode}`,
      reelUrl: reel.reelUrl,
      shortcode: reel.shortcode,
      caption: reel.caption || "",
      duration: reel.duration || 0,
      timestamp: new Date(Date.now() - index * 86400000).toISOString(),
      isVideo: true,
    }));

    // Save to JSON
    const dataDir = path.join(process.cwd(), "data");
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }

    const filePath = path.join(dataDir, "instagram-reels.json");
    const dataToSave = {
      reels: last3Reels,
      timestamp: new Date().toISOString(),
    };

    fs.writeFileSync(filePath, JSON.stringify(dataToSave, null, 2));

    console.log(`[CRON] ✅ Saved ${last3Reels.length} reels to ${filePath}`);

    return res.status(200).json({
      success: true,
      reelsCount: last3Reels.length,
      timestamp: dataToSave.timestamp,
    });
  } catch (error) {
    console.error("[CRON] ❌ Error:", error);
    if (browser) {
      if (!process.env.BROWSERLESS_URL) {
        await browser.close();
      }
    }

    return res.status(500).json({
      success: false,
      error: error.message || "Failed to refresh Instagram reels",
      stack: process.env.NODE_ENV === "development" ? error.stack : undefined,
    });
  }
}
