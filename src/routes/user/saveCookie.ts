import type { RequestEvent } from '@sveltejs/kit';

// This post saves the users current access token to a cookie which is then used to authenticate the user in SSR requests in the get session hook.
export async function post({ request }: RequestEvent) {
  const body: { access_token: string; expires_at: number } = await request.json();

  const token = body.access_token;
  const expires = new Date(body.expires_at * 1000).toUTCString();

  return {
    status: 200,
    headers: {
      'set-cookie': [
        `sb:token=${token}; Path=/; Expires=${expires}; HttpOnly; Secure; SameSite=Strict`
      ]
    }
  };
}
