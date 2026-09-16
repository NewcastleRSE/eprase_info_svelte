<script>
    import PillContainer from '$lib/components/PillContainer.svelte';
	import { resolve } from '$app/paths';
</script>

<div class="home-banner">
	<PillContainer height="100%" verticalEnergy={0.4} horizontalEnergy={0.6} count={12} speed={1.5} spawnDelay={150}>
		<div class="banner-text">
			<p class='main-text'>Configuring ePrescribing
			systems to keep
			patients safe</p>
			<p class='sub-text'><q>Know your risk: An NHS self-assessment for safer ePrescribing.</q></p>
		</div>
	</PillContainer>
	<a href="#news" class="scroll-indicator" aria-label="Scroll to Latest Updates">
        <span class="scroll-label">Latest Updates</span>
        <span class="scroll-arrow">↓</span>
    </a>
</div>

<section id="news" class="news-section">
    <div class="container">
        <div class="section-header">
            <span class="section-tag">Updates</span>
            <h2>Latest News & Announcements</h2>
        </div>

        <div class="news-grid">
            <!-- Article 1: Feature Item (ePRaSE Is Live) -->
            <article class="news-card feature-card">
                <div class="news-meta">
                    <span class="news-date">16 September 2026</span>
                    <span class="news-badge live">ePRaSE Goes Live</span>
                </div>
                
                <h3>ePRaSE 2026 Is Now Live</h3>
                <p>The latest version of ePRaSE (Electronic Prescribing Risk and Safety Evaluation) is now available. ePRaSE helps NHS organisations assess, benchmark, and improve the safety and optimisation of their ePrescribing and EPR systems.</p>

                <!-- Clean, accessible feature list -->
                <ul class="feature-checklist">
                    <li>Instant feedback on medicines safety risks</li>
                    <li>National benchmarking and reporting</li>
                    <li>Adult and Paediatric assessments</li>
                    <li>Enhanced reporting, archive, and user experience</li>
                </ul>

                <p class="tagline"><strong>Know your risk. Improve safety. Drive optimisation.</strong></p>

                <div class="feature-footer">
                    <div class="news-action">
                        <a href="https://eprase.nuth.nhs.uk/" target="_blank" rel="noopener" class="btn-text">
                            Get Started at eprase.nuth.nhs.uk <span>→</span>
                        </a>
                    </div>
<!--
                    <div class="qr-wrapper">
                        <img class="qrCode" src={resolve("/img/eprase_qr.png")} alt="Scan to register for ePRaSE updates" />
                        <span>Scan to register</span>
                    </div>
                -->
                </div>
            </article>

            <!-- Article 2: HSSIB Recognition -->
            <article class="news-card sync-card">
                <div class="card-body-split">
                    <div class="news-content-block">
                        <div class="news-meta">
                            <span class="news-date">8 June 2026</span>
                            <span class="news-badge endorsement">HSSIB Recognition</span>
                        </div>
                        <h3>HSSIB Recognises ePRaSE as Key Tool</h3>
                        <p>The latest report from the Health Services Safety Investigations Body (HSSIB) examines the safety of electronic prescribing and medicines administration (ePMA) systems used across NHS acute hospitals and highlights the importance of robust mechanisms for identifying, assessing, and learning from digital medication safety risks.</p>
                        <p>Within the report, <strong>ePRaSE is cited as an important tool</strong> that NHS organisations can use to assess whether their ePMA systems are functioning as intended and supporting safe prescribing in practice.</p>
                        
                        <div class="news-action">
                            <a href={resolve("/pdf/hssib_news.pdf")} target="_blank" rel="noopener" class="btn-text">
                                Read the full press release <span>→</span>
                            </a>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    </div>
</section>

<style>
    .banner-text {
        font-family: "Raleway", sans-serif;
        font-weight: 200;
        color: var(--nhs-blue);
        font-size: clamp(2.5rem, 5vw, 4rem);
        z-index: 10;
        pointer-events: none;
        padding-left: clamp(5%, 10vw, 7%);
        text-shadow: 0 0 20px rgba(255, 255, 255, 0.5);
        animation: fadeUp 0.8s ease-out forwards;
    }

    .banner-text .main-text {
        width: 50%;
        line-height: 1.2;
    }

    .banner-text .sub-text {
        font-size: clamp(1.2rem, 3vw, 2rem);
        margin-top: 0.5em;
        color: var(--nhs-dark-blue);
        text-shadow: 0 0 10px rgba(255, 255, 255, 0.4);
    }

    .home-banner {
        view-transition-name: pill-box;
        position: relative;
        display: flex;
        align-items: center;
        width: 100%;
        padding: 0;
        margin: 0;
        border-bottom: 1px solid #e2e8f0;
        overflow: hidden;
        background-color: #eff3fb;
        /* use top nav 'clamp' height for calculation */
        height: calc(100vh - clamp(80px, 15vmin, 160px)); 
        min-height: 450px;
    }
    
    .home-banner :global(.pill-stage) {
        position: absolute; 
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        z-index: 1;
    }

    .home-banner::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        /* This sits on top of the pills */
        box-shadow: inset 0 60px 60px -60px rgba(34, 61, 152, 0.15),
                    inset 0 -60px 60px -60px rgba(34, 61, 152, 0.15); 
        pointer-events: none;
        z-index: 2; 
    }

    .news-section {
        background-color: #f8fafc; 
        padding: 5rem 2rem;
        border-top: 1px solid #e2e8f0;
    }

    .container {
        max-width: 1100px;
        margin: 0 auto;
    }

    /* Section Typography Header */
    .section-header {
        margin-bottom: 3rem;
        text-align: left;
    }

    .section-tag {
        color: #005EB8;
        text-transform: uppercase;
        font-weight: 700;
        font-size: 0.85rem;
        letter-spacing: 0.1em;
        display: block;
        margin-bottom: 0.5rem;
    }

    .section-header h2 {
        font-size: 2.25rem;
        color: #003087;
        margin: 0;
        font-weight: 700;
    }

    /** News Grid Layout */
    .news-grid {
        display: grid;
        grid-template-columns: 1fr;
        gap: 2rem;
    }

    @media (min-width: 850px) {
        .news-grid {
            grid-template-columns: 3fr 2fr; 
        }
    }

    .news-card {
        background: #ffffff;
        border: 1px solid #e2e8f0;
        border-radius: 12px;
        padding: 2.5rem;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
        display: flex;
        flex-direction: column;
    }

    .news-meta {
        display: flex;
        align-items: center;
        gap: 1rem;
        margin-bottom: 1rem;
    }

    .news-date {
        font-size: 0.9rem;
        color: #64748b;
        font-weight: 500;
    }

    .news-badge {
        font-size: 0.75rem;
        font-weight: 600;
        padding: 0.25rem 0.75rem;
        border-radius: 9999px;
    }

    .news-badge.endorsement {
        background-color: #e0f2fe;
        color: #0369a1;
    }

    .news-badge.live {
        background-color: #fef3c7;
        color: #b45309;
    }

    .news-card h3 {
        color: #003087;
        font-size: 1.5rem;
        margin: 0 0 1.25rem 0;
        font-weight: 600;
    }

    .news-card p {
        color: #475569;
        line-height: 1.6;
        font-size: 1.25rem;
        margin: 0 0 1.25rem 0;
    }

    .news-card.sync-card p {
        font-size: 1.05rem;
    }

    /* Link Interactions */
    .news-action {
        margin: auto;
        padding-top: 1rem;
    }

    .btn-text {
        color: #005EB8;
        text-decoration: none;
        font-weight: 600;
        display: inline-flex;
        align-items: center;
        gap: 0.5rem;
        transition: color 0.2s;
    }

    .btn-text:hover {
        color: #003087;
    }

    .card-body-split {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        height: 100%;
    }

    /* Custom Green Checkmark Feature List */
    .feature-checklist {
        list-style: none; /* Removes default black dots */
        padding: 0;
        margin: 1.25rem 0;
        display: flex;
        flex-direction: column;
        gap: 0.75rem; /* Neat vertical spacing between items */
    }

    .feature-checklist li {
        position: relative;
        padding-left: 2rem; /* Creates room for the custom tick icon */
        font-size: 1.25rem;
        color: #1e293b;
        line-height: 1.4;
        font-weight: 500;
    }

    /* Custom Green SVG Checkmark Icon */
    .feature-checklist li::before {
        content: '';
        position: absolute;
        left: 0;
        top: 2px;
        width: 20px;
        height: 20px;
        /* Inline vector SVG tick for instant loading and crisp rendering */
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%2310b981'%3E%3Cpath d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z'/%3E%3C/svg%3E");
        background-repeat: no-repeat;
        background-size: contain;
    }

    /* ==========================================================================
       FEATURE CARD FOOTER & PRIMARY ACTION
       ========================================================================== */
    .feature-footer {
        display: flex;
        justify-content: space-between;
        align-items: center; /* Vertically centers the button and QR block */
        gap: 1.5rem;
        margin-top: auto; /* Pushes footer neatly to the bottom of the card */
        padding-top: 1.25rem;
        border-top: 1px solid #e2e8f0;
    }

    /* Primary Button CTA for Feature Card */
    .feature-footer .btn-text {
        background-color: var(--nhs-blue, #005eb8);
        color: #ffffff;
        padding: 0.85rem 1.4rem;
        border-radius: 8px;
        font-weight: 600;
        font-size: 1.05rem;
        transition: background-color 0.2s ease, transform 0.2s ease;
    }

    .feature-footer .btn-text:hover {
        background-color: var(--nhs-dark-blue, #003087);
        color: #ffffff;
        transform: translateY(-1px);
    }

    .feature-footer .qr-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: auto;
        padding: 0.6rem 0.85rem;
        background: #f8fafc;
        border: 1px solid #e2e8f0;
        border-radius: 8px;
        gap: 0.35rem;
        flex-shrink: 0;
    }

    .feature-footer .qrCode {
        width: 75px;
        height: 75px;
        display: block;
    }

    .feature-footer .qr-wrapper span {
        font-size: 0.7rem;
        font-weight: 600;
        color: #64748b;
        text-transform: uppercase;
        letter-spacing: 0.02em;
    }

    /* ==========================================================================
       RESPONSIVE MEDIA QUERIES
       ========================================================================== */
    @media (min-width: 500px) and (max-width: 849px) {
        .sync-card .card-body-split {
            flex-direction: row;
            align-items: center;
        }
        .sync-card .qr-wrapper {
            align-self: auto;
        }
    }

    @media (max-width: 640px) {
        .feature-footer {
            flex-direction: column;
            align-items: stretch;
            gap: 1.25rem;
        }

        .feature-footer .qr-wrapper {
            align-self: flex-start;
            width: 100%;
            box-sizing: border-box;
        }
    }

    /** Scroll Indicator */
    .scroll-indicator {
        position: absolute;
        bottom: 2rem;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.15rem;
        z-index: 10;
        
        text-decoration: none; 
        padding: 0.5rem 1.25rem;
        border-radius: 2rem;
        background: rgba(255, 255, 255, 0.7); 
        backdrop-filter: blur(4px); 
        box-shadow: 0 4px 12px rgba(0, 48, 135, 0.08); 
        border: 1px solid rgba(0, 94, 184, 0.1);
        
        animation: bounceBreathe 2.5s ease-in-out infinite;
        transition: all 0.2s ease;
    }

    .scroll-indicator:hover {
        background: rgba(255, 255, 255, 0.95);
        transform: translateX(-50%) translateY(-2px);
        animation-play-state: paused; 
        box-shadow: 0 6px 16px rgba(0, 48, 135, 0.12);
    }

    .scroll-label {
        font-size: 0.85rem;
        text-transform: uppercase;
        letter-spacing: 0.1em; 
        font-weight: 600;
        color: var(--nhs-blue);
        opacity: 0.9;
    }

    .scroll-arrow {
        font-size: 1.25rem;
        font-weight: bold;
        color: var(--nhs-blue);
        opacity: 0.9;
        margin-top: -4px;
    }

    @keyframes bounceBreathe {
        0%, 100% {
            transform: translate(-50%, 0);
            opacity: 0.6;
        }
        50% {
            transform: translate(-50%, 8px); 
            opacity: 1;
        }
    }

    @media (max-height: 550px) {
        .scroll-indicator {
            display: none;
        }
    }
</style>