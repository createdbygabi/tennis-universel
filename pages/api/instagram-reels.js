// API route to fetch Instagram reels from @tennisuniversel
// Reads from static JSON file (no scraping)

import fs from "fs";
import path from "path";

export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET");

  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { all } = req.query;

    // Try multiple possible paths for the JSON file
    const possiblePaths = [
      path.join(process.cwd(), "data", "instagram-reels.json"),
      path.join(process.cwd(), "..", "data", "instagram-reels.json"),
      path.join(__dirname, "..", "..", "data", "instagram-reels.json"),
    ];

    let filePath = null;
    let cachedData = null;

    // Try to find the file
    for (const possiblePath of possiblePaths) {
      try {
        if (fs.existsSync(possiblePath)) {
          filePath = possiblePath;
          const fileContent = fs.readFileSync(possiblePath, "utf8");
          cachedData = JSON.parse(fileContent);
          if (cachedData && cachedData.reels) {
            break;
          }
        }
      } catch (err) {
        console.error(
          `[API] Error reading file at ${possiblePath}:`,
          err.message
        );
        continue;
      }
    }

    // If file not found, return empty array (don't fail)
    if (!cachedData || !cachedData.reels || !Array.isArray(cachedData.reels)) {
      console.log(
        `[API] No reels file found or invalid data. Tried paths:`,
        possiblePaths
      );
      console.log(`[API] Current working directory:`, process.cwd());
      console.log(`[API] __dirname:`, __dirname);

      // Return empty array - page will still render
      return res.status(200).json({
        data: [],
        message: "No reels found - file not accessible",
      });
    }

    // Return all reels if ?all=true, otherwise return last 3
    const reels =
      all === "true" ? cachedData.reels : cachedData.reels.slice(0, 3);

    console.log(
      `[API] Returning ${reels.length} reels from static data (all=${
        all === "true"
      }, last updated: ${cachedData.timestamp})`
    );

    return res.status(200).json({
      data: reels,
      cached: true,
      timestamp: cachedData.timestamp,
    });
  } catch (error) {
    console.error("[API] Error reading reels:", error);

    // Always return 200 with empty array to prevent page crashes
    return res.status(200).json({
      data: [],
      error: error.message || "Failed to read reels",
    });
  }
}
