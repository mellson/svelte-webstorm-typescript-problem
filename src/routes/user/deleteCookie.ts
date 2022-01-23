import type { RequestEvent } from '@sveltejs/kit';

// This post saves the users current access token to a cookie which is then used to authenticate the user in SSR requests in the get session hook.
export async function post({ request }: RequestEvent) {
  return {
    status: 200,
    headers: {
      'set-cookie': [
        `sb:token=deleted; Path=/; Expires=Thu, 01 Jan 1970 00:00:00 GMT; HttpOnly; Secure; SameSite=Strict`
      ]
    }
  };
}
