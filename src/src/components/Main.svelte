<svelte:options customElement="cdpr-main" />
<script lang="ts">
	import type { Snippet } from 'svelte';

	let { children }: { children: Snippet } = $props();
</script>

<main class="
  w-full
  2xl:max-w-screen-2xl
  min-h-[100vh]
  ">
	{@render children()}
</main>
