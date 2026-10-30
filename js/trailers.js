/**
 * Marvel Trailers Gallery Script
 * Responsive video modal, YouTube embed, Phase & Search filtering.
 */

document.addEventListener("DOMContentLoaded", () => {
  initTrailersPage();
});

function initTrailersPage() {
  const grid = document.querySelector("#trailersGrid");
  const searchInput = document.querySelector("#trailerSearchInput");
  const filterButtons = document.querySelectorAll(".trailer-filter-btn");
  const modal = document.querySelector("#videoModal");
  const modalContent = document.querySelector("#videoModalBody");
  const modalClose = modal?.querySelector(".modal-close-btn");

  if (!grid || typeof MOVIES_DATA === "undefined") return;

  let currentFilter = "all";
  let currentSearch = "";

  function renderTrailers() {
    const filtered = MOVIES_DATA.filter((movie) => {
      if (!movie.trailerId) return false;

      const matchesFilter =
        currentFilter === "all" ||
        movie.phase.toLowerCase().replace(" ", "") === currentFilter.toLowerCase().replace(" ", "") ||
        movie.saga.toLowerCase().includes(currentFilter.toLowerCase());

      const matchesSearch =
        movie.title.toLowerCase().includes(currentSearch) ||
        (movie.keyCharacters && movie.keyCharacters.some((c) => c.toLowerCase().includes(currentSearch)));

      return matchesFilter && matchesSearch;
    });

    if (filtered.length === 0) {
      grid.innerHTML = `
        <div style="grid-column: 1/-1; text-align: center; padding: 4rem 1rem;">
          <h3 style="color: var(--marvel-gold); margin-bottom: 0.8rem;">No Trailers Found</h3>
          <p>No teasers or trailers match your search. Try resetting your search filter.</p>
        </div>
      `;
      return;
    }

    grid.innerHTML = filtered
      .map(
        (movie) => `
        <article class="trailer-item reveal-on-scroll is-revealed" data-id="${movie.id}" data-trailer="${movie.trailerId}">
          <div class="trailer-thumb-wrap">
            <img 
              src="https://img.youtube.com/vi/${movie.trailerId}/hqdefault.jpg" 
              alt="${movie.title} Trailer" 
              loading="lazy" 
              onerror="this.src='${movie.poster}'"
            />
            <div class="trailer-play-icon">▶</div>
            <span class="card-badge" style="left: 12px; top: 12px;">${movie.phase}</span>
          </div>
          <div class="trailer-info">
            <h3 style="font-size: 1.4rem; color: #fff; margin-bottom: 4px;">${movie.title}</h3>
            <div style="font-size: 0.84rem; color: var(--marvel-gold); margin-bottom: 0.8rem;">Official Theatrical Trailer</div>
            <p style="font-size: 0.88rem; color: var(--text-secondary); line-height: 1.5; margin-bottom: 1rem;">
              ${movie.synopsis.substring(0, 110)}...
            </p>
            <button class="btn btn-primary btn-sm" style="width: 100%;" onclick="openTrailerModal('${movie.trailerId}', '${movie.title.replace(/'/g, "\\'")}')">
              Watch Trailer ▶
            </button>
          </div>
        </article>
      `
      )
      .join("");
  }

  // Filter button clicks
  filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      currentFilter = btn.getAttribute("data-filter");
      renderTrailers();
    });
  });

  // Search input
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      currentSearch = e.target.value.trim().toLowerCase();
      renderTrailers();
    });
  }

  // Open trailer modal
  window.openTrailerModal = (trailerId, title) => {
    if (!modal || !modalContent) return;

    modalContent.innerHTML = `
      <div style="position: relative; width: 100%; aspect-ratio: 16/9; background: #000; border-radius: var(--radius-md); overflow: hidden; box-shadow: 0 0 30px rgba(0,0,0,0.9);">
        <iframe 
          src="https://www.youtube-nocookie.com/embed/${trailerId}?autoplay=1&rel=0&modestbranding=1" 
          title="${title} Official Trailer" 
          style="width: 100%; height: 100%; border: none;" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          allowfullscreen>
        </iframe>
      </div>
      <div style="margin-top: 1.2rem; display: flex; align-items: center; justify-content: space-between;">
        <h3 style="font-size: 1.8rem; color: #fff;">${title}</h3>
        <span class="section-tag gold" style="margin-bottom: 0;">Official 4K Trailer</span>
      </div>
    `;

    modal.classList.add("active");
    document.body.style.overflow = "hidden";
  };

  const closeVideoModal = () => {
    if (modalContent) modalContent.innerHTML = "";
    modal.classList.remove("active");
    document.body.style.overflow = "";
  };

  if (modalClose) modalClose.addEventListener("click", closeVideoModal);
  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) closeVideoModal();
    });
  }

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal?.classList.contains("active")) {
      closeVideoModal();
    }
  });

  // Initial render
  renderTrailers();
}

