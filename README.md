# Hamad Ur Rehman — Portfolio

High-end scrollytelling portfolio website. Built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## Tech Stack
- **Framework**: Next.js 14 (App Router, Static Export)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion
- **Rendering**: HTML5 Canvas (image sequence scrubbing)

---

## 🚀 Running Locally

### Prerequisites
- Node.js 18+ 
- npm 11+

### Steps

```bash
# 1. Clone the repo
git clone https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
cd YOUR_REPO_NAME

# 2. Install dependencies
npm install

# 3. Ensure your sequence frames are in /public/sequence/
# Files should be named: frame_000_delay-0.041s.png ... frame_018_delay-0.041s.png

# 4. Start the dev server
npm run dev

# Open http://localhost:3000
```

---

## 📦 Building for Production

```bash
npm run build
# This generates a static export in /out/
```

---

## 🌐 Deploying to GitHub Pages

### One-time setup:
1. Push your code to a GitHub repository
2. Go to **Settings → Pages**
3. Under **Source**, select **GitHub Actions**
4. The workflow at `.github/workflows/deploy.yml` will handle the rest

### Every push to `main` will:
- Install dependencies
- Run `npm run build`
- Deploy the `/out` folder to GitHub Pages

Your site will be live at: `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`

### Important: If deploying to a subdirectory (e.g. `username.github.io/portfolio`)
Add this to `next.config.js`:
```js
const nextConfig = {
  output: 'export',
  basePath: '/YOUR_REPO_NAME',
  images: { unoptimized: true },
};
```

---

## 📁 Project Structure

```
├── app/
│   ├── globals.css       # Global styles, fonts, cursor
│   ├── layout.tsx        # Root layout + metadata
│   └── page.tsx          # Main page (composes all sections)
├── components/
│   ├── Cursor.tsx         # Custom animated cursor
│   ├── Nav.tsx            # Fixed navigation
│   ├── ScrollyCanvas.tsx  # Core: scroll-scrubbed canvas animation
│   ├── About.tsx          # About section with stats
│   ├── Projects.tsx       # Work grid (glassmorphism cards)
│   ├── Skills.tsx         # Skills + courses
│   └── Contact.tsx        # Contact + footer
├── public/
│   └── sequence/          # PNG frames (frame_000 ... frame_018)
├── .github/
│   └── workflows/
│       └── deploy.yml     # GitHub Actions deployment
├── next.config.js
├── tailwind.config.ts
└── tsconfig.json
```

---

## 🎨 Customisation

| What | Where |
|------|-------|
| Colors | `app/globals.css` CSS variables |
| Fonts | `app/globals.css` Google Fonts import |
| Projects | `components/Projects.tsx` `projects` array |
| Skills | `components/Skills.tsx` `skillGroups` array |
| Sequence frames | `public/sequence/` |
| Contact info | `components/Contact.tsx` |
