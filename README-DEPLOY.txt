Deploy:

- This bundle serves the compiled /assets and index.html from repository root.
- Cloudflare Pages:
  Build command: (empty)
  Output directory: .
- If you ever see a blank page, it's due to stale SW/cache. The index includes a SW/caches purge guard.
- Decap CMS: /admin (GitHub OAuth via Pages Functions). Set env vars:
    GITHUB_CLIENT_ID
    GITHUB_CLIENT_SECRET
