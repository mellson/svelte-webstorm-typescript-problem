<script lang="ts">
  import { signout } from '$lib/db';
  import VirtualList from '@sveltejs/svelte-virtual-list';

  const things = Array.from({ length: 2000 }, (x, i) => {
    return { name: i.toString(), number: i };
  });
</script>

<h1>Welcome to Sveltekit</h1>

<div class="grid grid-cols-2 h-full">
  <div>
    <button
      class="bg-black text-white p-3 rounded hover:bg-opacity-75 hover:shadow hover:scale-105"
      on:click={signout}>Sign out</button
    >
    <!-- <div>
      <h2>{$user.role}</h2>
      <p>{$user.email}</p>
    </div> -->
  </div>
  <div class="max-h-screen">
    <VirtualList items={things} let:item>
      <!-- this will be rendered for each currently visible item -->
      <p id={item.number}>{item.number}: {item.name}</p>
    </VirtualList>
  </div>
</div>
