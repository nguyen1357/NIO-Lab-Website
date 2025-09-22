export const onRequestGet: PagesFunction = async ({ request, env }) => {
  const url = new URL(request.url);
  const code = url.searchParams.get('code');
  if (!code) return new Response('Missing code', { status: 400 });

  const clientId = env.GITHUB_CLIENT_ID;
  const clientSecret = env.GITHUB_CLIENT_SECRET;
  if (!clientId || !clientSecret) {
    return new Response('Missing GitHub OAuth env vars', { status: 500 });
  }

  const redirectUri = url.origin + '/api/callback';

  const resp = await fetch('https://github.com/login/oauth/access_token', {
    method: 'POST',
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
    body: JSON.stringify({ client_id: clientId, client_secret: clientSecret, code, redirect_uri: redirectUri })
  });
  const data = await resp.json();
  if (!data.access_token) {
    return new Response('OAuth exchange failed: ' + JSON.stringify(data), { status: 500 });
  }
  const token = encodeURIComponent(data.access_token);

  const html = `<!doctype html><meta charset="utf-8"><script>
    (function(){
      try{
        if (window.opener && !window.opener.closed) {
          window.opener.postMessage({ token: '${data.access_token}' }, '*');
        }
      }catch(e){}
      // luôn điều hướng về /admin kèm token để Decap đọc được
      window.location.replace('/admin/#access_token=' + '${token}');
    })();
  </script>`;
  return new Response(html, { headers: { 'Content-Type': 'text/html; charset=utf-8' } });
};
