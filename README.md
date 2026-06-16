# KRISHNA CHAKRI — Cinematic Interactive Experience

This repository contains a production-ready scaffold for a cinematic, interactive personal experience built with Next.js, TypeScript, Tailwind CSS, Framer Motion, GSAP, Three.js, React Three Fiber, Lenis Smooth Scroll, and Shadcn UI.

Getting started:

1. Install dependencies

```bash
npm install
```

2. Run dev server

```bash
npm run dev
```

3. Build for production

```bash
npm run build
npm run start
```

Notes:
- This scaffold provides the cinematic landing boot sequence and a starter Three.js scene. Continue building the immersive sections (Story, Project Universe, Skills Matrix, Achievement Vault, Roadmap, Live Dashboard, Contact terminal) as components under `src/components` and pages under `src/app`.
- Ensure performance budget and Lighthouse score by optimizing assets, using GPU-accelerated shaders, and deferring heavy work.

Running Lighthouse locally (Windows PowerShell helper):

```powershell
.\scripts\run-lighthouse.ps1
```

This script will run `npm install`, `npm run build`, start the production server, run Lighthouse headless, and save `lh-report.json` in the repo root.

For CI, see `lhci.config.js` for example Lighthouse CI configuration and thresholds.

Deployment (Vercel):

- Ensure `vercel.json` is present (this repo includes one).
- Connect the repository in Vercel and use the default Next.js builder. Vercel will run `npm run build` and serve the app.
- Recommended environment: Node 20+, `NODE_ENV=production`.

Quick manual deploy steps:

```bash
# build locally
npm run build

# verify locally
npm start

# push to Git and deploy via Vercel UI / CLI
git add . && git commit -m "Prepare for deploy" && git push
vercel --prod
```

If you want, I can add a GitHub Actions workflow to build and run Lighthouse CI on each push.
