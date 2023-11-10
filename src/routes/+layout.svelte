<script lang="ts">
	import { AppShell } from '@skeletonlabs/skeleton';
	import '../app.postcss';
	import Navigation from '$lib/components/Navigation.svelte';
</script>

<AppShell slotSidebarLeft="bg-surface-500/5 w-56 p-4">
	<svelte:fragment slot="sidebarLeft"><Navigation /></svelte:fragment>
	<slot />
</AppShell>
