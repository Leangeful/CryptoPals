<script lang="ts">
	export let value: string;
</script>

<!-- <div class="card variant-ghost-surface text-lg p-2"><slot /></div> -->

<div class="flex space-x-4">
	<input type="text" class="card variant-ghost-surface text-lg p-2 w-full" bind:value />
	<button class="btn variant-filled-primary">Reset</button>
</div>
