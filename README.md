# Snow Leaf Landing Page

A beautiful, minimal landing page for Snow Leaf - a brand focused on bringing simplicity, elegance, and comfort to your home.

## Features

- **Hero Section**: Compelling headline "Turn Everyday Moments into Quiet Luxury"
- **Product Highlight**: Showcases soap dispensers with "Functional Beauty for Every Day"
- **Brand Story**: Tells the story "Born from Nature, Inspired by Home"
- **Future Vision**: Teases upcoming products "This is Just the Beginning"
- **Newsletter Signup**: Early access signup with "Be the First to Experience Snow Leaf"
- **Minimal Footer**: Clean navigation and brand tagline "Small Details, Big Comfort"

## Design Philosophy

- **Quiet Luxury**: Clean, minimal aesthetic with subtle typography
- **Natural Colors**: Soft neutrals and muted tones
- **Responsive Design**: Fully responsive across all devices
- **Modern Typography**: Clean, readable fonts with proper spacing
- **Subtle Interactions**: Smooth hover effects and transitions

## Technology Stack

- **Next.js 15**: React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first styling
- **Modern CSS**: Custom properties and smooth animations

## Getting Started

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
src/
├── app/
│   ├── globals.css    # Global styles and CSS variables
│   ├── layout.tsx     # Root layout
│   └── page.tsx       # Main landing page
```

## Customization

The landing page uses CSS custom properties for easy theming:
- `--background`: Main background color
- `--foreground`: Primary text color
- `--muted`: Secondary background color
- `--muted-foreground`: Secondary text color
- `--border`: Border colors

## Deployment

The project is ready for deployment on Vercel, Netlify, or any platform that supports Next.js.

```bash
npm run build
npm start
```