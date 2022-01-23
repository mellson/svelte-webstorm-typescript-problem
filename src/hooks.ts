import { supabase } from '$lib/db';
import type { RequestEvent } from '@sveltejs/kit';

export async function getSession(event: RequestEvent) {
  const cookie = event.request.headers.get('cookie');
  const sbToken = 'sb:token=';
  const hasToken = cookie ? cookie.indexOf(sbToken) : -1;
  if (hasToken > -1 && cookie) {
    const access_token = cookie.split(sbToken)[1];
    const { user } = await supabase.auth.api.getUser(access_token);
    return {
      user,
      token_type: 'Bearer',
      access_token
    };
  }
}
