<script lang="ts">
    import { goto } from '$app/navigation';
    import { onMount } from 'svelte';
    import { resolve } from '$app/paths';

    onMount(() => {
        // Sends them to 2025 immediately
        goto(resolve(`/results/2025`), { replaceState: true });
    });

</script>

