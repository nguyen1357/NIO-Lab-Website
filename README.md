# NIO Lab — Optimized Starter (v7)
**Stack:** Cloudflare Pages + React (Vite) + Decap CMS (GitHub OAuth) + Markdown posts

## Quick start (local)
```
npm install
npm run dev:cms:watch
```
- App: http://localhost:5173/#/
- CMS: http://localhost:5173/admin

## Build & preview
```
npm run build
npm run preview   # http://localhost:4173
```

## Deploy (Cloudflare Pages)
- Build command: `npm ci && npm run build`
- Output dir: `dist`
- Custom domain: add in Pages → update your GitHub OAuth callback accordingly.

## GitHub OAuth (Decap)
In `/public/admin/index.html`, set:
- `repo: 'nguyen1357/NIO-Lab-Website'`
- `app_id: 'Ov23lipXxnMnZK1gTuDg'`

Create OAuth App on GitHub:
- Homepage: `https://<project>.pages.dev`
- Callback: `https://<project>.pages.dev/admin/callback`

## Content authoring
- New post: add a `.md` in `content/posts/` (frontmatter required)
- Build generates `/content/posts.json`
- News page fetches JSON (no cache) and Post page renders HTML.

## Notes
- `_redirects` & `_headers` live in `public/` and will be copied to `dist/` by Vite.
- Admin is fully static in `public/admin` (no copy scripts needed).
