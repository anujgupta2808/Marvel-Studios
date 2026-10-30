/**
 * Marvel Studios Fan Experience — Global Shared Script
 * Handles Navigation, Mobile Drawer, Global Quick Search, Back-to-Top,
 * Toast Notifications, IntersectionObserver Reveals, and Cinematic Preloader.
 */

document.addEventListener("DOMContentLoaded", () => {
  initPreloader();
  initNavbar();
  initMobileMenu();
  initBackToTop();
  initScrollReveal();
  initGlobalSearch();
  initNewsletter();
});

/* --------------------------------------------------------------------------
   Cinematic Preloader Loading Page
   Appears ONLY on page refresh / reload, NOT when navigating from one page to another.
   -------------------------------------------------------------------------- */
function initPreloader() {
  // Check if navigation is a page reload / refresh
  let isReload = false;
  if (window.performance) {
    const navEntries = performance.getEntriesByType("navigation");
    if (navEntries && navEntries.length > 0) {
      isReload = navEntries[0].type === "reload";
    } else if (performance.navigation) {
      isReload = performance.navigation.type === 1; // 1 = TYPE_RELOAD
    }
  }

  // Check if user was navigating internally via link clicks
  const isInternalNav = sessionStorage.getItem("mcu_nav_transition") === "true";
  sessionStorage.removeItem("mcu_nav_transition");

  // Record internal link clicks so subsequent page load knows it was an internal navigation
  document.addEventListener("click", (e) => {
    const link = e.target.closest("a");
    if (link && link.href && link.href.includes(window.location.host) && !link.target && !link.href.includes("#")) {
      sessionStorage.setItem("mcu_nav_transition", "true");
    }
  });

  // ONLY show preloader when user explicitly refreshes the page!
  // If navigating from one page to another, immediately exit without showing preloader.
  if (!isReload || isInternalNav) {
    const existing = document.querySelector("#mcuPreloader");
    if (existing) existing.remove();
    return;
  }

  // Preloader displays on page refresh
  let preloader = document.querySelector("#mcuPreloader");
  if (!preloader) {
    preloader = document.createElement("div");
    preloader.id = "mcuPreloader";
    preloader.className = "mcu-preloader";
    preloader.innerHTML = `
      <div class="preloader-content">
        <div class="preloader-badge-wrap">
          <div class="preloader-marvel-badge">MARVEL</div>
          <div class="preloader-subtext">STUDIOS</div>
        </div>
        <div class="preloader-progress-track">
          <div class="preloader-progress-bar"></div>
        </div>
        <div class="preloader-status">RELOADING SACRED TIMELINE...</div>
      </div>
    `;
    document.body.appendChild(preloader);
  }

  const dismissPreloader = () => {
    preloader.classList.add("fade-out");
    setTimeout(() => {
      preloader.remove();
    }, 600);
  };

  const startTime = Date.now();
  window.addEventListener("load", () => {
    const elapsed = Date.now() - startTime;
    const remaining = Math.max(0, 800 - elapsed);
    setTimeout(dismissPreloader, remaining);
  });

  // Safety fallback
  setTimeout(dismissPreloader, 2200);
}

/* --------------------------------------------------------------------------
   Navbar & Mobile Menu
   -------------------------------------------------------------------------- */
function initNavbar() {
  const navbar = document.querySelector(".navbar");
  if (!navbar) return;

  const handleScroll = () => {
    if (window.scrollY > 30) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  };

  window.addEventListener("scroll", handleScroll, { passive: true });
  handleScroll();

  // Highlight active page link
  const navLinks = document.querySelectorAll(".nav-link");
  const currentPath = window.location.pathname.split("/").pop() || "index.html";

  navLinks.forEach((link) => {
    const href = link.getAttribute("href");
    if (href === currentPath || (currentPath === "" && href === "index.html")) {
      link.classList.add("active");
      link.setAttribute("aria-current", "page");
    } else {
      link.classList.remove("active");
    }
  });
}

function initMobileMenu() {
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");
  if (!hamburger || !navMenu) return;

  const toggleMenu = () => {
    const isOpen = navMenu.classList.toggle("active");
    hamburger.classList.toggle("open");
    hamburger.setAttribute("aria-expanded", isOpen);
    document.body.style.overflow = isOpen ? "hidden" : "";
  };

  hamburger.addEventListener("click", toggleMenu);

  // Close menu on link click
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      if (navMenu.classList.contains("active")) {
        toggleMenu();
      }
    });
  });

  // Close on Escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && navMenu.classList.contains("active")) {
      toggleMenu();
    }
  });
}

/* --------------------------------------------------------------------------
   Back to Top Button
   -------------------------------------------------------------------------- */
function initBackToTop() {
  const backToTopBtn = document.querySelector(".back-to-top");
  if (!backToTopBtn) return;

  const handleScroll = () => {
    if (window.scrollY > 350) {
      backToTopBtn.classList.add("visible");
    } else {
      backToTopBtn.classList.remove("visible");
    }
  };

  window.addEventListener("scroll", handleScroll, { passive: true });

  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}

/* --------------------------------------------------------------------------
   Scroll Reveal with IntersectionObserver
   -------------------------------------------------------------------------- */
function initScrollReveal() {
  const revealElements = document.querySelectorAll(".reveal-on-scroll");
  if (!revealElements.length) return;

  if (!("IntersectionObserver" in window)) {
    revealElements.forEach((el) => el.classList.add("is-revealed"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-revealed");
          obs.unobserve(entry.target);
        }
      });
    },
    {
      root: null,
      threshold: 0.1,
      rootMargin: "0px 0px -30px 0px"
    }
  );

  revealElements.forEach((el) => observer.observe(el));
}

/* --------------------------------------------------------------------------
   Toast Notifications
   -------------------------------------------------------------------------- */
function showToast(message, duration = 3500) {
  let toast = document.querySelector(".toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.className = "toast";
    document.body.appendChild(toast);
  }

  toast.textContent = message;
  toast.classList.add("show");

  clearTimeout(toast._timeout);
  toast._timeout = setTimeout(() => {
    toast.classList.remove("show");
  }, duration);
}

/* --------------------------------------------------------------------------
   Global Search Modal (Characters & Movies)
   -------------------------------------------------------------------------- */
function initGlobalSearch() {
  const triggerBtn = document.querySelector(".search-trigger-btn");
  let searchModal = document.querySelector("#globalSearchModal");

  if (!searchModal) {
    searchModal = document.createElement("div");
    searchModal.id = "globalSearchModal";
    searchModal.className = "modal-overlay";
    searchModal.innerHTML = `
      <div class="modal-dialog global-search-modal">
        <button class="modal-close-btn" aria-label="Close search">&times;</button>
        <div class="global-search-input-wrap">
          <span style="position: absolute; left: 18px; top: 50%; transform: translateY(-50%); color: #888;">🔍</span>
          <input type="text" id="globalSearchInput" placeholder="Search Marvel heroes, movies, sagas..." autofocus />
        </div>
        <div id="globalSearchResults" class="global-search-results">
          <p style="color: #888; text-align: center; padding: 2rem;">Type to search characters and movies across the MCU...</p>
        </div>
      </div>
    `;
    document.body.appendChild(searchModal);
  }

  const searchInput = searchModal.querySelector("#globalSearchInput");
  const resultsContainer = searchModal.querySelector("#globalSearchResults");
  const closeBtn = searchModal.querySelector(".modal-close-btn");

  const openSearch = () => {
    searchModal.classList.add("active");
    document.body.style.overflow = "hidden";
    setTimeout(() => searchInput.focus(), 100);
  };

  const closeSearch = () => {
    searchModal.classList.remove("active");
    document.body.style.overflow = "";
    searchInput.value = "";
    resultsContainer.innerHTML = `<p style="color: #888; text-align: center; padding: 2rem;">Type to search characters and movies across the MCU...</p>`;
  };

  if (triggerBtn) {
    triggerBtn.addEventListener("click", openSearch);
  }

  closeBtn.addEventListener("click", closeSearch);
  searchModal.addEventListener("click", (e) => {
    if (e.target === searchModal) closeSearch();
  });

  // Keyboard shortcut '/' to search, 'Escape' to close
  document.addEventListener("keydown", (e) => {
    if (e.key === "/" && !["INPUT", "TEXTAREA"].includes(document.activeElement.tagName)) {
      e.preventDefault();
      openSearch();
    } else if (e.key === "Escape" && searchModal.classList.contains("active")) {
      closeSearch();
    }
  });

  // Search filter execution
  searchInput.addEventListener("input", (e) => {
    const query = e.target.value.trim().toLowerCase();
    if (!query) {
      resultsContainer.innerHTML = `<p style="color: #888; text-align: center; padding: 2rem;">Type to search characters and movies across the MCU...</p>`;
      return;
    }

    const matches = [];

    // Search Characters
    if (typeof CHARACTERS_DATA !== "undefined") {
      CHARACTERS_DATA.forEach((c) => {
        if (
          c.name.toLowerCase().includes(query) ||
          c.realName.toLowerCase().includes(query) ||
          c.affiliation.toLowerCase().includes(query)
        ) {
          matches.push({
            type: "Hero",
            title: c.name,
            subtitle: `${c.realName} • ${c.affiliation}`,
            url: `heroes.html?id=${c.id}`,
            badge: "Hero"
          });
        }
      });
    }

    // Search Movies
    if (typeof MOVIES_DATA !== "undefined") {
      MOVIES_DATA.forEach((m) => {
        if (
          m.title.toLowerCase().includes(query) ||
          m.phase.toLowerCase().includes(query) ||
          m.director.toLowerCase().includes(query)
        ) {
          matches.push({
            type: "Movie",
            title: m.title,
            subtitle: `${m.releaseYear} • ${m.phase} • Directed by ${m.director}`,
            url: `movies.html?id=${m.id}`,
            badge: "Movie"
          });
        }
      });
    }

    if (matches.length === 0) {
      resultsContainer.innerHTML = `<p style="color: #888; text-align: center; padding: 2rem;">No results found for "${query}". Try searching "Iron Man", "Avengers", or "Endgame".</p>`;
      return;
    }

    resultsContainer.innerHTML = matches
      .slice(0, 8)
      .map(
        (item) => `
        <a href="${item.url}" class="search-result-item">
          <span class="card-badge" style="position: static; font-size: 0.7rem;">${item.badge}</span>
          <div style="flex: 1;">
            <div style="color: #fff; font-weight: 700; font-size: 1.05rem;">${item.title}</div>
            <div style="color: #aaa; font-size: 0.85rem;">${item.subtitle}</div>
          </div>
          <span style="color: var(--marvel-gold);">→</span>
        </a>
      `
      )
      .join("");
  });
}

/* --------------------------------------------------------------------------
   Newsletter Subscription Handler
   -------------------------------------------------------------------------- */
function initNewsletter() {
  const form = document.querySelector("#newsletterForm");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const input = form.querySelector("input[type='email']");
    if (!input || !input.value.trim()) return;

    showToast("🎉 Welcome to S.H.I.E.L.D. Intel! You are now subscribed.");
    input.value = "";
  });
}
