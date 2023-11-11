<script lang="ts">
	import { AppShell } from '@skeletonlabs/skeleton';
	import '../app.postcss';
	import Navigation from '$lib/components/Navigation.svelte';
</script>

<AppShell slotSidebarLeft="bg-surface-500/5 w-56 p-4">
	<svelte:fragment slot="sidebarLeft"><Navigation /></svelte:fragment>
	<div class="container mx-auto h-full flex flex-col items-center space-y-4 pt-4">
		<slot />
	</div>
</AppShell>
