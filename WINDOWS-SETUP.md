# Gold Project - Windows Setup Instructions

## Quick Start

1. Open the Portable OpenCode Workspace
2. Navigate to `projects\gold`
3. Open a terminal (Start-Workspace.bat)
4. Run the following commands:

```batch
cd projects\gold
npm install
npm run dev
```

## Prerequisites

- Node.js 18+ (included in workspace)
- npm (included in workspace)
- Git (included in workspace)

## Development

```batch
npm run dev
```

Open http://localhost:3000 in your browser.

## Build

```batch
npm run build
npm start
```

## Environment Variables

Copy `.env.example` to `.env` and fill in the required values:

```batch
copy .env.example .env
```

## Git Commands

```batch
git status
git add .
git commit -m "Your message"
git push origin main
```

## Vercel Deployment

```batch
vercel login
vercel
vercel --prod
```

## Troubleshooting

### "node is not recognized"
- Run `Start-Workspace.bat` first to set up the PATH

### "npm install" fails
- Check internet connection
- Try `npm cache clean --force`

### Port 3000 in use
- Kill the process using the port
- Or use a different port: `npm run dev -- -p 3001`

## Project Structure

- `src/` - Source code
- `public/` - Static assets
- `src/app/` - Next.js app router pages
- `src/components/` - React components
- `src/lib/` - Utility functions and data
