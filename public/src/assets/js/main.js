let body = document.querySelector("body")
// Use the container control (#darkmode) instead of the inner icon for better accessibility
let themeToggle = document.getElementById("darkmode")
const loader = document.getElementById("loader")

window.addEventListener("DOMContentLoaded", () => {
    showLoader();
})

window.addEventListener("load", () => {
    setTimeout(() => {

        hideLoader();
        // Initialize libraries if present
        if (window.ScrollReveal) {
            window.sr = ScrollReveal();
            sr.reveal('.scroll-img');
            sr.reveal('#animado');
            sr.reveal('.description', {
                duration: 3000,
                origin: 'bottom',
                distance: '-100px'
            });
            sr.reveal('.btn-cv', {
                duration: 3000,
                origin: 'left',
                distance: '-100px'
            });
            sr.reveal('.scroll-img', {
                duration: 3000,
                origin: 'rigth',
                distance: '-100px'
            });
        }
        if (window.AOS && typeof AOS.init === 'function') {
            AOS.init();
        }
    }, 1000)

})

const showLoader = () => {
    loader.classList.add("show_loader")

}
const hideLoader = () => {
    loader.classList.remove("show_loader")
    const app = document.getElementById("app")
    app.classList.add("view-app")

}

// Accessible theme toggle: click and keyboard support, manage aria-pressed
if (themeToggle) {
    // Ensure proper ARIA state exists
    if (!themeToggle.hasAttribute('aria-pressed')) {
        themeToggle.setAttribute('aria-pressed', 'false');
    }
    const toggleTheme = () => {
        const pressed = themeToggle.getAttribute('aria-pressed') === 'true';
        themeToggle.setAttribute('aria-pressed', String(!pressed));
        body.classList.toggle("dark-theme");
    };
    themeToggle.addEventListener("click", toggleTheme);
    themeToggle.addEventListener("keydown", (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            toggleTheme();
        }
    });
}
// ScrollReveal and AOS are now initialized after window load if present

// --- Smooth scrolling for in-page anchors with easing and accessibility ---
(() => {
    const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // quadratic easing for a softer, less abrupt feel
    const easeInOutQuad = (t) => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2);

    const smoothScrollTo = (targetY, { duration = 1000 } = {}) => {
        if (prefersReduced) {
            window.scrollTo(0, Math.max(0, targetY));
            return Promise.resolve();
        }
        return new Promise((resolve) => {
            const startY = window.pageYOffset;
            const distance = Math.max(0, targetY) - startY;
            const startTime = performance.now();

            // Temporarily disable CSS smooth to avoid double-smoothing
            const docEl = document.documentElement;
            const prevBehavior = docEl.style.scrollBehavior;
            docEl.style.scrollBehavior = 'auto';

            const step = (now) => {
                const elapsed = now - startTime;
                const t = Math.min(1, elapsed / duration);
                const eased = easeInOutQuad(t);
                window.scrollTo(0, startY + distance * eased);
                if (t < 1) {
                    requestAnimationFrame(step);
                } else {
                    // restore
                    docEl.style.scrollBehavior = prevBehavior;
                    resolve();
                }
            };
            requestAnimationFrame(step);
        });
    };

    const getHashTarget = (hash) => {
        if (!hash || hash === '#') return null;
        const id = decodeURIComponent(hash.replace('#', '')); // allow encoded ids
        return document.getElementById(id);
    };

    const anchorLinks = document.querySelectorAll('a[href^="#"]:not([href="#"])');
    anchorLinks.forEach((link) => {
        link.addEventListener('click', async (e) => {
            const target = getHashTarget(link.getAttribute('href'));
            if (!target) return; // let browser handle if no target
            e.preventDefault();

            // offset in case of fixed headers and a tiny end offset to avoid hard stop
            const OFFSET = 8;
            const targetY = target.getBoundingClientRect().top + window.pageYOffset - OFFSET;
            await smoothScrollTo(targetY, { duration: 1000 });

            // Manage focus for accessibility without jumping the page
            const prevTabIndex = target.getAttribute('tabindex');
            if (!target.hasAttribute('tabindex')) target.setAttribute('tabindex', '-1');
            target.focus({ preventScroll: true });
            if (prevTabIndex === null) target.removeAttribute('tabindex');

            // Update the URL hash without an extra jump
            history.pushState(null, '', `#${target.id}`);
        });
    });
})();