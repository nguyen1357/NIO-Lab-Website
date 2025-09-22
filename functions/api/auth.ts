export const onRequestGet: PagesFunction = async ({ request, env }) => {
  const url = new URL(request.url);
  const origin = url.origin;
  const clientId = env.GITHUB_CLIENT_ID;
  if (!clientId) return new Response('Missing GITHUB_CLIENT_ID', { status: 500 });
  const redirectUri = origin + '/api/callback';
  const scope = 'repo,user:email';
  const authorize = new URL('https://github.com/login/oauth/authorize');
  authorize.searchParams.set('client_id', clientId);
  authorize.searchParams.set('redirect_uri', redirectUri);
  authorize.searchParams.set('scope', scope);
  authorize.searchParams.set('state', crypto.randomUUID());
  return Response.redirect(authorize.toString(), 302);
};
