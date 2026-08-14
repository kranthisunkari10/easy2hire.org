# Easy2Hire

Marketing site for [easy2hire.org](https://easy2hire.org) — ATS resumes, managed IT applications, interview coaching, and certification guidance.

Stack: Vite, React, TypeScript, Tailwind CSS, Framer Motion. Published with GitHub Pages.

## Local

```bash
npm install
npm run dev
```

## Custom domain

In your DNS for `easy2hire.org`:

1. Apex `A` records to GitHub Pages:
   - `185.199.108.153`
   - `185.199.109.153`
   - `185.199.110.153`
   - `185.199.111.153`
2. `www` `CNAME` to `kranthisunkari10.github.io`
3. In the repo: Settings → Pages → Custom domain `easy2hire.org` → enable HTTPS
