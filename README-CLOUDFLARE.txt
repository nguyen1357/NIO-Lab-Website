Cloudflare Pages (deploy dist as root):

- Build command: (empty)
- Output directory: .
- Variables & Secrets (Production + Preview):
  GITHUB_CLIENT_ID = <your GitHub OAuth app client id>
  GITHUB_CLIENT_SECRET = <your GitHub OAuth app client secret>
- GitHub OAuth App callback URL:
  https://<your-pages-domain>/api/callback

Note: The compiled files from /dist are moved to the repository root for static hosting.
