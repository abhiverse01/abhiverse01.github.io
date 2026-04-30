/* deployments.js — filter logic + stat counter for the Deployments page */

(function () {
    'use strict';

    // ── Trigger reveal for static cards ──────────────────────────────────
    // main.js defines initRevealObserver() globally; call it so .reveal
    // elements on this page get the IntersectionObserver attached.
    // If main.js hasn't run yet, wait for DOMContentLoaded.
    function bootstrapReveal() {
        if (typeof initRevealObserver === 'function') {
            initRevealObserver();
        } else {
            // Fallback: force-show all .reveal elements immediately
            document.querySelectorAll('.reveal').forEach(el => {
                el.classList.add('visible');
            });
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', bootstrapReveal);
    } else {
        // DOM already ready (script is deferred/at bottom)
        setTimeout(bootstrapReveal, 0);
    }

    // ── Filter ────────────────────────────────────────────────────────────

    const filterBtns = document.querySelectorAll('.deploy-filter');
    const cards      = document.querySelectorAll('.deploy-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const target = btn.dataset.filter;

            // Update active button
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // Show / hide cards with a staggered reveal
            let visibleIdx = 0;
            cards.forEach(card => {
                const cat   = card.dataset.category;
                const match = target === 'all' || cat === target;

                if (match) {
                    card.classList.remove('hidden');
                    // Re-trigger the reveal animation with a small stagger
                    card.classList.remove('visible');
                    setTimeout(() => card.classList.add('visible'), visibleIdx * 60);
                    visibleIdx++;
                } else {
                    card.classList.add('hidden');
                    card.classList.remove('visible');
                }
            });
        });
    });

    // ── Stat Counters ─────────────────────────────────────────────────────

    function animateCounter(el) {
        const target   = parseInt(el.dataset.target, 10);
        const duration = 1200;
        const start    = performance.now();

        const tick = now => {
            const progress = Math.min((now - start) / duration, 1);
            const eased    = 1 - Math.pow(1 - progress, 3); // ease-out-cubic
            el.textContent = Math.round(eased * target);
            if (progress < 1) requestAnimationFrame(tick);
            else el.textContent = target;
        };

        requestAnimationFrame(tick);
    }

    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                counterObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    document.querySelectorAll('.deploy-stat-num[data-target]').forEach(el => {
        counterObserver.observe(el);
    });

})();
