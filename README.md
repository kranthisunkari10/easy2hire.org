# TalentBridge

Marketing site for TalentBridge, published on GitHub Pages.

**Live:** https://kranthisunkari10.github.io/talentbridge/

Stack: Vite, React, TypeScript, Tailwind CSS, Framer Motion.

## Local

```bash
npm install
npm run dev
```

## Conventions

- Put copy in `src/content`, URLs and contact in `src/config`, shared UI in `src/components/ui`.
- Public files go through `publicAsset()` so GitHub Pages base paths stay correct.
- Do not commit `.env` files or secrets.

## Custom domain later

When you own `talentbridge.org`, add a `public/CNAME` file, set Vite `base` to `/`, and point DNS A records at GitHub Pages.
