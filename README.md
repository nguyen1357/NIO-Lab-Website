# NIO Lab — Cloudflare Pages + Decap (GitHub OAuth via Functions) — v8.1

## Deploy (Connect to Git)
- Build: `npm ci && npm run build`
- Output: `dist`

## OAuth (required)
- GitHub OAuth App:
  - Homepage: `https://<project>.pages.dev`
  - Authorization callback: `https://<project>.pages.dev/api/callback`
- Cloudflare Pages → Settings → Environment (Production & Preview) → Variables and Secrets:
  - `GITHUB_CLIENT_ID`
  - `GITHUB_CLIENT_SECRET`

## Notes
- Admin `/admin` uses OAuth proxy at `/api/auth`, callback `/api/callback`.
- After login, posts commit to `content/posts/*.md`.
