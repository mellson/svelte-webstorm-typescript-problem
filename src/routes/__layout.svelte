<script context='module' lang='ts'>
  import { browser } from '$app/env';
  import { signIn, user as dbUser } from '$lib/db';
  import type { User } from '@supabase/supabase-js';
  import '../app.css';
</script>

<script lang='ts'>
  export let user: User | null;
  let userIsLoggedIn = user != null;
  if (userIsLoggedIn && browser && user) {
    console.log('updating user');
    dbUser.set(user);
  }
</script>

<div class='p-4 h-screen w-screen'>
  {#if userIsLoggedIn && user}
    <slot />
    <div>
      <h2>{user.role}</h2>
      <p>{user.email}</p>
    </div>
  {:else}
    <button
      class='bg-black text-white p-3 rounded hover:bg-opacity-75 hover:shadow hover:scale-105'
      on:click={signIn}>Sign in
    </button
    >
  {/if}
</div>
