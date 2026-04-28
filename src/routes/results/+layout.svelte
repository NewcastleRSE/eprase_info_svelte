<script lang="ts">
    import { page } from '$app/state';
    import { resolve } from '$app/paths';

    let { children } = $props();
    
    // Check which year is active based on the URL
    let activeYear = $derived(page.url.pathname.includes('2024') ? '2024' : '2025');
</script>
<div class="results-layout">
    <nav class="report-tabs">
        <a 
            href={resolve('/results/2025')} 
            class:active={activeYear === '2025'}>
            2025 Report
        </a>
        <a 
            href={resolve('/results/2024')} 
            class:active={activeYear === '2024'}>
            2024 Report
        </a>
    </nav>

    <div class="report-content">
        {@render children()}
    </div>
</div>

<style>
    .report-tabs {
        display: flex;
        justify-content: center;
        gap: 2px;
        position: sticky;
        background: #FFF;
        top: 0;
        z-index: 10;
        padding: 1rem 0 0 0;
        border-bottom: 1px solid #eee;
        margin-bottom: 1rem;
    }

    .report-tabs a {
        padding: 1rem 2rem;
        background: #f0f0f0;
        text-decoration: none;
        color: #333;
        border-radius: 8px 8px 0 0;
        transition: background 0.2s;
    }

    .report-tabs a.active {
        background: #25358c; /* NHS Blue */
        color: white;
        font-weight: bold;
    }
    
    .report-content {
        background: white;
        padding: 2rem;
    }
</style>