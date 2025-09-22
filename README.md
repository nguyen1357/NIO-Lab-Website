# NIO Lab — Cloudflare Pages + Decap (GitHub OAuth via Functions) — v8

## Deploy (Connect to Git)
- Build command: `npm ci && npm run build`
- Output directory: `dist`

## GitHub OAuth App
- Homepage: `https://<project>.pages.dev`
- Authorization callback: `https://<project>.pages.dev/api/callback`

## Cloudflare Pages → Settings → Variables and Secrets
- `GITHUB_CLIENT_ID = <Client ID>`
- `GITHUB_CLIENT_SECRET = <Client Secret>`

## CMS
- Visit `/admin` → Login with GitHub.
- Posts live under `content/posts/*.md`.

