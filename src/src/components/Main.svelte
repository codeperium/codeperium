<script lang="ts">
	import type { Snippet } from 'svelte';

	let { children }: { children: Snippet } = $props();
</script>

<<<<<<< HEAD
<main class="w-full">
=======
<main class="
  w-full
  2xl:max-w-screen-2xl
  ">
>>>>>>> feature/COD-frontend-new-layout
	{@render children()}
</main>
