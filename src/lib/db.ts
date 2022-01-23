import type { User } from '@supabase/supabase-js';
import { createClient } from '@supabase/supabase-js';
import { writable } from 'svelte/store';

export const supabase = createClient(
  import.meta.env.VITE_SUPABASE_APP_URL as string,
  import.meta.env.VITE_SUPABASE_PUBLIC_KEY as string
);

export const auth = supabase.auth;

export async function signIn() {
  await auth.signIn(
    {
      provider: 'azure'
    },
    {
      scopes: 'email'
    }
  );
}

export async function signout() {
  await auth.signOut();
  fetch('/user/deleteCookie', {
    method: 'POST',
    body: JSON.stringify({})
  });
}

export const user = writable<User>();
