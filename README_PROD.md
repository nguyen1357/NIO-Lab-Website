# NIO-Lab Website — v6 (Production-ready)

## Use on Cloudflare Pages
1) Edit `admin/config.yml` → set your repo: `repo: <owner>/<repo>` then commit & push.
2) GitHub OAuth App:
   - Homepage: `https://<project>.pages.dev`
   - Callback: `https://<project>.pages.dev/admin/callback`
3) Pages build:
   - Build command: `npm ci && npm run build`
   - Output dir: `dist`
4) Open `/admin` → login → Publish. New posts will commit to `content/posts/*.md`.

## Local authoring (optional)
- `admin/config.local.yml` contains `local_backend: true` for localhost.
- Run: `npm run dev:cms` or `npm run dev:cms:watch`.
- For production: make sure `/admin/config.yml` (without local_backend) is deployed.
