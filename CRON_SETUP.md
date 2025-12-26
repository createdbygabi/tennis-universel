# Instagram Reels Cron Job Setup

## How it works

1. **Cron Job** (`/api/cron/refresh-reels`) - Fetches Instagram reels using Puppeteer (or Browserless.io) and saves them to `data/instagram-reels.json`
2. **API Endpoint** (`/api/instagram-reels`) - Reads from the cached JSON file (fast, no scraping)

## Setup

### Local Development

1. Start your dev server: `npm run dev`
2. Manually trigger the cron job:
   ```bash
   curl http://localhost:3000/api/cron/refresh-reels
   ```
   Or use the npm script:
   ```bash
   npm run refresh-reels
   ```

### Production (Vercel)

The cron job is configured in `vercel.json` to run **every 2 days** (`0 0 */2 * *`).

**Optional:** Add authentication by setting `CRON_SECRET` environment variable in Vercel:

- Go to your Vercel project settings
- Add environment variable `CRON_SECRET` with a secret value
- The cron job will require this secret in the Authorization header

### Using Browserless.io (Recommended for Production)

Browserless.io is a cloud service that provides managed Puppeteer instances, which can be more reliable than running Puppeteer directly.

1. Sign up at [browserless.io](https://www.browserless.io/)
2. Get your WebSocket URL (e.g., `wss://chrome.browserless.io?token=YOUR_TOKEN`)
3. Add it as an environment variable in Vercel:
   - Variable name: `BROWSERLESS_URL`
   - Value: Your Browserless WebSocket URL

The cron job will automatically use Browserless if this variable is set.

### Other Hosting Platforms

For other platforms, configure a cron job to call:

```
GET https://yourdomain.com/api/cron/refresh-reels
```

Schedule: Every 1-2 days (adjust `vercel.json` cron schedule as needed)

## Cron Schedule Options

- `0 0 */1 * *` - Every day at midnight
- `0 0 */2 * *` - Every 2 days at midnight (current)
- `0 0 */3 * *` - Every 3 days at midnight

## File Structure

- `data/instagram-reels.json` - Cached reels data (created automatically)
- `pages/api/cron/refresh-reels.js` - Cron job endpoint
- `pages/api/instagram-reels.js` - Public API endpoint (reads from cache)

## Troubleshooting

### Instagram Blocks Access

If Instagram consistently blocks access:

1. **Use Browserless.io** - Their IPs are less likely to be blocked
2. **Add delays** - Increase wait times between requests
3. **Use a proxy** - Configure proxy in Puppeteer launch args
4. **Reduce frequency** - Run cron job less frequently (every 3-4 days)

### No Reels Found

- Check if the Instagram profile has public reels
- Verify the username is correct (`tennisuniversel`)
- Check server logs for detailed error messages
- Ensure the page loads correctly (not blocked)

## Notes

- The cron job uses advanced stealth techniques to avoid detection
- It retries up to 3 times if blocked
- The JSON file is gitignored and won't be committed
- If the cron job fails, the API will return empty array until next successful run
