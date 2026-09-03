<script>
    import { resolve } from '$app/paths';
</script>
<div class="subpage">
    <p>Acute, community, and mental health NHS trusts using ePrescribing systems are invited to use ePRaSE. In the 2025-26 version of the tool (version 4), 109 NHS hospital trusts completed assessments of their ePrescribing systems for adult patients, and 39 trusts completed assessments for paediatric patients. As the map below shows, participating trusts were geographically spread throughout England.</p>

    <section class="map-container">
    <p class="section-lead">Trusts completing ePRaSE Assessments</p>

    <figure class="diagram-card">
        <img src="{resolve('/img/assessments_map.png')}" alt="Map of ePRaSE participating trusts" />
        <figcaption>Figure 1. 109 adult and 39 paediatric assessments</figcaption>
    </figure>
</section>

</div>

<style>
    /* Container styling for the section */
    .map-container {
        margin: 2.5rem 0;
        background: #f8fafc;
        border: 1px solid #e2e8f0;
        border-radius: 12px;
        padding: 1.75rem;
    }

    .section-lead {
        margin-top: -0.5rem;
        margin-bottom: 1.5rem;
        color: #4c6272;
        font-size: 1.5rem;
    }

    /* Card holding the image */
    .diagram-card {
        margin: 0;
        background: #ffffff;
        border: 1px solid #cbd5e1;
        border-radius: 8px;
        padding: 1rem;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .diagram-card img {
        max-width: 100%;
        height: auto;
        border-radius: 6px;
    }


    figcaption {
        margin-top: 0.75rem;
        font-size: 0.9rem;
        color: #5c6f84;
        font-style: italic;
        text-align: center;
    }

</style>