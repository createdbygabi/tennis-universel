// API route to fetch Instagram reels from @tennisuniversel
// Reads from static JSON file (no scraping)

import fs from "fs";
import path from "path";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const filePath = path.join(process.cwd(), "data", "instagram-reels.json");
    const { all } = req.query;

    // Check if file exists
    if (!fs.existsSync(filePath)) {
      console.log("No reels file found, returning empty array");
      return res.status(200).json({
        data: [],
        message: "No reels found",
      });
    }

    // Read from JSON file
    const fileContent = fs.readFileSync(filePath, "utf8");
    const cachedData = JSON.parse(fileContent);

    // Return all reels if ?all=true, otherwise return last 3
    const reels =
      all === "true" ? cachedData.reels : cachedData.reels.slice(0, 3);

    console.log(
      `Returning ${reels.length} reels from static data (all=${
        all === "true"
      }, last updated: ${cachedData.timestamp})`
    );

    return res.status(200).json({
      data: reels,
      cached: true,
      timestamp: cachedData.timestamp,
    });
  } catch (error) {
    console.error("Error reading reels:", error);

    return res.status(200).json({
      data: [],
      error: error.message || "Failed to read reels",
    });
  }
}
