<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	export let value: string;
	const dispatch = createEventDispatcher();
</script>

<!-- <div class="card variant-ghost-surface text-lg p-2"><slot /></div> -->
<h4><slot name="head"><!-- optional fallback --></slot></h4>
<div class="flex space-x-4">
	<input type="text" class="card text-lg p-2 w-full" bind:value />
	<button class="btn variant-filled-primary" on:click={() => dispatch('reset')}>Reset</button>
</div>
