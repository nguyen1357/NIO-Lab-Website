# NIO Lab — Original Site + Decap CMS for Cloudflare Pages

This is your original site, unchanged, plus:
- `/admin` Decap CMS (manual init)
- Cloudflare Pages Functions in `/functions/api` to handle GitHub OAuth (`/api/auth` and `/api/callback`)
- `/uploads` for media, `content/posts/` for Markdown posts
- `_redirects` so `/admin/callback` serves correctly

## Cloudflare Pages (Connect to Git)
- If your site is **static**: set **Build command:** none/blank, **Output directory:** `.` (root).
- If you already have a build, keep it — these additions don’t affect your build output.

## GitHub OAuth App
- Homepage: `https://<project>.pages.dev`
- Authorization callback: `https://<project>.pages.dev/api/callback`

## Environment Variables (Production + Preview)
- `GITHUB_CLIENT_ID = <your client id>`
- `GITHUB_CLIENT_SECRET = <your client secret>`

## Use CMS
- Open `/admin` → Login with GitHub → create posts (stored in `content/posts/*.md`).

