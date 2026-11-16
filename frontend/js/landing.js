/**
 * RxR Multilingual VLN Studio — Refined Lightweight Creative Engine
 * High-performance, zero WebGL lag, native CSS + IntersectionObserver animations.
 * 
 * Features:
 * 1. Native IntersectionObserver Scroll Reveal Pipeline
 * 2. Active Section Spy & Smooth Anchor Scrolling
 * 3. Tactile Magnetic Buttons & Hover Feedback
 * 4. Subtle Ambient Cursor Light Follower (Touch-Safe)
 * 5. Interactive 3-Way Spatial Matrix Viewport (Pano / Dollhouse / Blueprint)
 * 6. Cross-Modal Token Attention Playground
 */

(function initRefinedLandingEngine() {
    'use strict';

    if (typeof window === 'undefined' || typeof document === 'undefined') return;

    /* ==========================================================================
       1. Native IntersectionObserver Scroll Reveal Pipeline
       ========================================================================== */
    function initScrollReveals() {
        const revealElements = document.querySelectorAll('.scroll-reveal');
        if (!revealElements.length) return;

        // If reduced motion is requested, reveal immediately
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            revealElements.forEach(el => el.classList.add('is-revealed'));
            return;
        }

        const revealObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-revealed');
                    observer.unobserve(entry.target); // Unobserve to eliminate runtime overhead
                }
            });
        }, {
            threshold: 0.12,
            rootMargin: '0px 0px -40px 0px'
        });

        revealElements.forEach(el => revealObserver.observe(el));
    }

    /* ==========================================================================
       2. Active Section Spy & Smooth Navigation
       ========================================================================== */
    function initNavScrollSpy() {
        const sections = [
            document.getElementById('viewLanding'),
            document.getElementById('conceptSection'),
            document.getElementById('environmentSection'),
            document.getElementById('workflowSection'),
            document.getElementById('intelligenceSection')
        ].filter(Boolean);

        const navLinks = document.querySelectorAll('.nav-link-interactive');
        if (!navLinks.length || !sections.length) return;

        const spyObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const id = entry.target.id;
                    navLinks.forEach(link => {
                        const href = link.getAttribute('href');
                        if (href === `#${id}`) {
                            link.classList.add('active');
                        } else {
                            link.classList.remove('active');
                        }
                    });
                }
            });
        }, { threshold: 0.25 });

        sections.forEach(sec => spyObserver.observe(sec));

        // Smooth anchor scrolling
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                const targetId = this.getAttribute('href');
                if (!targetId || targetId === '#') return;
                const targetEl = document.querySelector(targetId);
                if (targetEl) {
                    e.preventDefault();
                    targetEl.scrollIntoView({ behavior: 'smooth' });
                }
            });
        });
    }

    /* ==========================================================================
       3. Magnetic Buttons & Tactile Hover Physics
       ========================================================================== */
    function initMagneticButtons() {
        if (window.matchMedia('(pointer: coarse)').matches) return;
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

        const magneticButtons = document.querySelectorAll('.magnetic-btn');

        magneticButtons.forEach(btn => {
            btn.addEventListener('mousemove', (e) => {
                const rect = btn.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                btn.style.transform = `translate3d(${x * 0.18}px, ${y * 0.18}px, 0)`;
            }, { passive: true });

            btn.addEventListener('mouseleave', () => {
                btn.style.transform = 'translate3d(0, 0, 0)';
            });
        });
    }

    /* ==========================================================================
       4. Subtle Ambient Cursor Light Follower
       ========================================================================== */
    function initCursorGlow() {
        if (window.matchMedia('(pointer: coarse)').matches) return;
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

        let glow = document.getElementById('landingCursorGlow');
        if (!glow) {
            glow = document.createElement('div');
            glow.id = 'landingCursorGlow';
            glow.setAttribute('aria-hidden', 'true');
            const landing = document.getElementById('viewLanding');
            if (landing) landing.appendChild(glow);
        }

        let mouseX = window.innerWidth / 2;
        let mouseY = window.innerHeight / 2;
        let currX = mouseX;
        let currY = mouseY;
        let isMoving = false;
        let rafId = null;

        window.addEventListener('pointermove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            if (!isMoving) {
                isMoving = true;
                glow.classList.add('active');
            }
        }, { passive: true });

        function updateCursor() {
            currX += (mouseX - currX) * 0.12;
            currY += (mouseY - currY) * 0.12;
            glow.style.transform = `translate3d(${currX}px, ${currY}px, 0)`;

            // Keep loop active only when landing page is visible
            const landingView = document.getElementById('viewLanding');
            if (landingView && landingView.classList.contains('view-active')) {
                rafId = requestAnimationFrame(updateCursor);
            }
        }
        rafId = requestAnimationFrame(updateCursor);
    }

    /* ==========================================================================
       5. Interactive Spatial Matrix Viewport (Section 03)
       ========================================================================== */
    function initSpatialMatrix() {
        const tabs = document.querySelectorAll('.matrix-tab-btn');
        const panels = {
            'pano': document.getElementById('matrixPanelPano'),
            'dollhouse': document.getElementById('matrixPanelDollhouse'),
            'blueprint': document.getElementById('matrixPanelBlueprint')
        };
        const telemetryFov = document.getElementById('matrixTelemetryFov');
        const telemetryMode = document.getElementById('matrixTelemetryMode');
        const telemetryPortals = document.getElementById('matrixTelemetryPortals');

        if (!tabs.length) return;

        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                const targetMode = tab.dataset.mode;
                tabs.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');

                // Switch panels
                Object.keys(panels).forEach(key => {
                    if (panels[key]) {
                        if (key === targetMode) {
                            panels[key].classList.remove('hidden');
                        } else {
                            panels[key].classList.add('hidden');
                        }
                    }
                });

                // Update Telemetry Specs
                if (targetMode === 'pano') {
                    if (telemetryFov) telemetryFov.textContent = '75.0° DUAL-SPHERE';
                    if (telemetryMode) telemetryMode.textContent = 'FIRST-PERSON 360° EQUIRECTANGULAR';
                    if (telemetryPortals) telemetryPortals.textContent = '2 ACTIVE DOORWAYS';
                } else if (targetMode === 'dollhouse') {
                    if (telemetryFov) telemetryFov.textContent = '50.0° ORTHO-PERSPECTIVE';
                    if (telemetryMode) telemetryMode.textContent = '3D ORBITAL WIREFRAME & SOLID';
                    if (telemetryPortals) telemetryPortals.textContent = 'FULL FLOORPLAN ENVELOPE';
                } else if (targetMode === 'blueprint') {
                    if (telemetryFov) telemetryFov.textContent = 'ORTHOGONAL 2D CAD';
                    if (telemetryMode) telemetryMode.textContent = 'TOPOLOGICAL GRAPH (NODES + EDGES)';
                    if (telemetryPortals) telemetryPortals.textContent = 'DIJKSTRA SHORTEST PATH';
                }
            });
        });
    }

    /* ==========================================================================
       6. Cross-Modal Token Attention Interactive Playground (Section 05)
       ========================================================================== */
    function initTokenPlayground() {
        const chips = document.querySelectorAll('.token-interactive-chip');
        const attentionScoreEl = document.getElementById('tokenAttentionScore');
        const attentionFillEl = document.getElementById('tokenAttentionFill');
        const tokenGroundedRoomEl = document.getElementById('tokenGroundedRoom');
        const tokenDevanagariEl = document.getElementById('tokenDevanagariEquiv');
        const tokenTeluguEl = document.getElementById('tokenTeluguEquiv');

        if (!chips.length) return;

        const tokenData = {
            'Bedroom 1': { weight: 0.94, room: 'Bedroom 1 (Start Viewpoint vp_1)', hi: 'शयनकक्ष 1 (स्थान)', te: 'బెడ్‌రూమ్ 1 (ప్రారంభం)' },
            'pathway': { weight: 0.72, room: 'Doorway Portal 1 (Threshold x: 1.2, z: 0.8)', hi: 'रास्ता / मार्ग', te: 'మార్గం / దారి' },
            'hallway': { weight: 0.89, room: 'Hallway Corridor (Viewpoint vp_2)', hi: 'गलियारा (मध्यवर्ती)', te: 'హాల్‌వే (మధ్యలో)' },
            'reach': { weight: 0.65, room: 'Doorway Portal 2 (Threshold x: 1.8, z: -1.8)', hi: 'पहुंचें / रुकें', te: 'చేరుకోండి / వెళ్ళండి' },
            'Kitchen': { weight: 0.98, room: 'Kitchen Galley (Destination Viewpoint vp_3)', hi: 'रसोईघर (लक्ष्य स्थान)', te: 'కిచెన్ (లక్ష్యం)' }
        };

        chips.forEach(chip => {
            chip.addEventListener('click', () => {
                chips.forEach(c => c.classList.remove('active'));
                chip.classList.add('active');

                const word = chip.dataset.token || chip.textContent.trim();
                const info = tokenData[word] || { weight: 0.60, room: 'Spatial Trajectory Segment', hi: 'संबद्ध टोकन', te: 'సంబంధిత పదం' };

                if (attentionScoreEl) attentionScoreEl.textContent = `α = ${info.weight.toFixed(2)}`;
                if (attentionFillEl) {
                    attentionFillEl.style.width = `${info.weight * 100}%`;
                    attentionFillEl.style.backgroundColor = info.weight > 0.85 ? '#B8D96B' : (info.weight > 0.7 ? '#55BFD0' : '#E5AD69');
                }
                if (tokenGroundedRoomEl) tokenGroundedRoomEl.textContent = info.room;
                if (tokenDevanagariEl) tokenDevanagariEl.textContent = info.hi;
                if (tokenTeluguEl) tokenTeluguEl.textContent = info.te;
            });
        });
    }

    /* ==========================================================================
       Initialize on Load
       ========================================================================== */
    function initLanding() {
        const landingView = document.getElementById('viewLanding');
        if (!landingView) return;

        initScrollReveals();
        initNavScrollSpy();
        initMagneticButtons();
        initCursorGlow();
        initSpatialMatrix();
        initTokenPlayground();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initLanding);
    } else {
        initLanding();
    }
})();
