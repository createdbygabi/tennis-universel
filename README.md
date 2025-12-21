# TennisUniversel

A beautiful, modern, and minimal website for TennisUniversel - an organization that hosts live interviews on Instagram with tennis professionals.

## Features

- 🎨 Modern, minimal design inspired by the best tennis websites
- 📱 Fully responsive across all devices
- ⚡ Built with Next.js and Tailwind CSS
- 🎭 Smooth animations and transitions
- 📺 Instagram integration for live interviews
- 🎬 Instagram Reels section displaying latest videos
- 🎯 Professional and clean aesthetic

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
tennisu/
├── components/              # Reusable React components
│   ├── Navigation.js       # Main navigation bar
│   ├── Footer.js           # Footer component
│   ├── InterviewCard.js    # Interview card component
│   └── InstagramReels.js   # Instagram reels display component
├── pages/                  # Next.js pages
│   ├── api/                # API routes
│   │   └── instagram.js    # Instagram API endpoint
│   ├── _app.js             # App wrapper
│   ├── index.js            # Homepage
│   ├── interviews.js       # Interviews listing page
│   ├── about.js            # About page
│   └── contact.js          # Contact page
├── styles/                 # Global styles
│   └── globals.css         # Tailwind CSS imports
└── public/                 # Static assets
```

## Customization

### Colors

The color scheme can be customized in `tailwind.config.js`. The primary colors are tennis-inspired greens, and accent colors are elegant grays.

### Content

Update interview data in:
- `pages/index.js` - Homepage interviews
- `pages/interviews.js` - All interviews page

### Instagram Links

Replace `https://instagram.com/tennisuniversel` with your actual Instagram handle throughout the codebase.

### Instagram API Setup (for Reels Section)

To enable the Instagram Reels section that fetches your latest videos:

1. **Create a Facebook App:**
   - Go to https://developers.facebook.com/
   - Create a new app
   - Add "Instagram Basic Display" product

2. **Get Your Credentials:**
   - Get your Instagram User ID (you can use tools like https://www.instagram.com/{username}/?__a=1&__d=dis)
   - Generate an access token with `instagram_graph_user_media` permission

3. **Set Environment Variables:**
   Create a `.env.local` file in the root directory:
   ```
   INSTAGRAM_ACCESS_TOKEN=your_access_token_here
   INSTAGRAM_USER_ID=your_user_id_here
   ```

4. **Note:** The API will return mock data if credentials are not set up, so the site will still work without API setup.

**Important:** Instagram's API doesn't directly provide video duration. To filter videos longer than 20 minutes, you may need to:
- Use Instagram Graph API's video insights
- Or manually curate videos and update the API response
- Or use a third-party service that provides video metadata

## Build for Production

```bash
npm run build
npm start
```

## Technologies Used

- **Next.js 14** - React framework
- **Tailwind CSS** - Utility-first CSS framework
- **React** - UI library

## License

This project is private and proprietary.

# tennis-universel
