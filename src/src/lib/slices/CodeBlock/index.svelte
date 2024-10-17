<script lang="ts">
	import type { Content } from '@prismicio/client';
	import './prism-gruvbox.css';
	import { marked } from 'marked';
	import hljs from 'highlight.js';
	import { onMount } from 'svelte';

	let {slice}: {slice: Content.CodeBlockSlice} = $props();
	let code = slice.primary.body.map((el) => el.text).join("\n");
	let compiled = marked.parse(code);


	onMount(() => {
		hljs.highlightAll()
	})
</script>

<div class="blog-content prose min-w-full text-[18px]">
	{@html compiled}
</div>

<style lang="postcss">
	/* TODO: apply styles for blog content */
</style>
