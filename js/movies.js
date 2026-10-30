/**
 * Marvel Movies Page Script
 * Search, Phase/Saga Filtering, Sorting, Movie Details Modal with Embedded Trailers.
 */

document.addEventListener("DOMContentLoaded", () => {
  initMoviesPage();
});

function initMoviesPage() {
  const grid = document.querySelector("#moviesGrid");
  const searchInput = document.querySelector("#movieSearchInput");
  const filterButtons = document.querySelectorAll(".movie-filter-btn");
  const sortSelect = document.querySelector("#movieSortSelect");
  const modal = document.querySelector("#movieModal");
  const modalContent = document.querySelector("#movieModalBody");
  const modalClose = modal?.querySelector(".modal-close-btn");

  if (!grid || typeof MOVIES_DATA === "undefined") return;

  let currentPhase = "all";
  let currentSearch = "";
  let currentSort = "release-asc";

  function renderMovies() {
    let filtered = MOVIES_DATA.filter((movie) => {
      const matchesPhase =
        currentPhase === "all" ||
        movie.phase.toLowerCase().replace(" ", "") === currentPhase.toLowerCase().replace(" ", "") ||
        movie.saga.toLowerCase().includes(currentPhase.toLowerCase());

      const matchesSearch =
        movie.title.toLowerCase().includes(currentSearch) ||
        movie.director.toLowerCase().includes(currentSearch) ||
        (movie.keyCharacters && movie.keyCharacters.some((c) => c.toLowerCase().includes(currentSearch)));

      return matchesPhase && matchesSearch;
    });

    // Sorting
    filtered.sort((a, b) => {
      if (currentSort === "release-asc") return a.releaseYear - b.releaseYear;
      if (currentSort === "release-desc") return b.releaseYear - a.releaseYear;
      if (currentSort === "title-asc") return a.title.localeCompare(b.title);
      if (currentSort === "boxoffice-desc") {
        // parse numeric billions/millions
        const parseBoxOffice = (str) => {
          if (!str || str.includes("Anticipated")) return 0;
          const num = parseFloat(str.replace(/[^0-9.]/g, ""));
          return str.includes("Billion") ? num * 1000 : num;
        };
        return parseBoxOffice(b.boxOffice) - parseBoxOffice(a.boxOffice);
      }
      return 0;
    });

    if (filtered.length === 0) {
      grid.innerHTML = `
        <div style="grid-column: 1/-1; text-align: center; padding: 4rem 1rem;">
          <h3 style="color: var(--marvel-gold); margin-bottom: 0.8rem;">No Cinema Archives Found</h3>
          <p>No films match your selected phase or search query.</p>
          <button class="btn btn-outline" style="margin-top: 1.5rem;" onclick="resetMovieFilters()">Reset All Filters</button>
        </div>
      `;
      return;
    }

    grid.innerHTML = filtered
      .map(
        (movie) => `
        <article class="movie-card reveal-on-scroll is-revealed" data-id="${movie.id}" tabindex="0" role="button" aria-label="View details for ${movie.title}">
          <div class="movie-poster-wrap">
            <span class="movie-phase-tag">${movie.phase}</span>
            <img src="${movie.poster}" alt="${movie.title}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1635805737707-575885ab0820?auto=format&fit=crop&w=600&q=80'" />
            <div class="movie-play-overlay">
              <div class="play-circle-btn">▶</div>
            </div>
          </div>
          <div class="movie-content">
            <h3 class="movie-title">${movie.title}</h3>
            <div class="movie-meta">
              <span>📅 ${movie.releaseYear}</span>
              <span>⏱ ${movie.runtime}</span>
            </div>
            <p class="movie-synopsis">${movie.synopsis}</p>
            <div style="margin-top: auto; display: flex; align-items: center; justify-content: space-between; border-top: 1px solid var(--border-subtle); padding-top: 0.8rem;">
              <span style="font-size: 0.78rem; color: var(--marvel-gold); font-weight: 600;">${movie.boxOffice}</span>
              <button class="btn btn-outline btn-sm" onclick="event.stopPropagation(); openMovieModal('${movie.id}')">Details & Trailer →</button>
            </div>
          </div>
        </article>
      `
      )
      .join("");

    // Click handler for card
    grid.querySelectorAll(".movie-card").forEach((card) => {
      card.addEventListener("click", () => {
        const id = card.getAttribute("data-id");
        openMovieModal(id);
      });
      card.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          const id = card.getAttribute("data-id");
          openMovieModal(id);
        }
      });
    });
  }

  // Filter click handlers
  filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      currentPhase = btn.getAttribute("data-filter");
      renderMovies();
    });
  });

  // Search input handler
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      currentSearch = e.target.value.trim().toLowerCase();
      renderMovies();
    });
  }

  // Sort select handler
  if (sortSelect) {
    sortSelect.addEventListener("change", (e) => {
      currentSort = e.target.value;
      renderMovies();
    });
  }

  // Reset helper
  window.resetMovieFilters = () => {
    currentPhase = "all";
    currentSearch = "";
    currentSort = "release-asc";
    if (searchInput) searchInput.value = "";
    if (sortSelect) sortSelect.value = "release-asc";
    filterButtons.forEach((b) => {
      b.classList.toggle("active", b.getAttribute("data-filter") === "all");
    });
    renderMovies();
  };

  // Modal open
  window.openMovieModal = (id) => {
    const movie = MOVIES_DATA.find((m) => m.id === id);
    if (!movie || !modal || !modalContent) return;

    modalContent.innerHTML = `
      <div style="display: flex; flex-direction: column; gap: 1.8rem;">
        <!-- Embedded Trailer Video -->
        <div style="position: relative; width: 100%; aspect-ratio: 16/9; background: #000; border-radius: var(--radius-md); overflow: hidden; border: 1px solid var(--border-subtle);">
          <iframe 
            src="https://www.youtube-nocookie.com/embed/${movie.trailerId}?autoplay=1&rel=0&modestbranding=1" 
            title="${movie.title} Trailer" 
            style="width: 100%; height: 100%; border: none;" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowfullscreen>
          </iframe>
        </div>

        <div style="display: grid; grid-template-columns: 2fr 1fr; gap: 2rem;">
          <div>
            <div style="display: flex; gap: 10px; margin-bottom: 0.8rem;">
              <span class="section-tag gold" style="margin-bottom: 0;">${movie.phase}</span>
              <span class="section-tag" style="margin-bottom: 0;">${movie.saga}</span>
            </div>
            <h2 style="font-size: 2.4rem; color: #fff; margin-bottom: 0.4rem;">${movie.title}</h2>
            <div style="font-size: 0.95rem; color: var(--text-muted); margin-bottom: 1.2rem;">
              Directed by <strong style="color: #fff;">${movie.director}</strong> • Released on <strong style="color: #fff;">${movie.releaseDate}</strong>
            </div>
            <p style="font-size: 1.05rem; line-height: 1.7; color: #D1D5DB; margin-bottom: 1.5rem;">${movie.synopsis}</p>

            <h4 style="font-size: 1.15rem; color: var(--marvel-gold); margin-bottom: 0.6rem;">Key Cast & Characters</h4>
            <div style="display: flex; flex-wrap: wrap; gap: 8px;">
              ${movie.keyCharacters.map((c) => `<span style="background: rgba(255,255,255,0.06); padding: 5px 12px; border-radius: var(--radius-sm); font-size: 0.84rem; color: #fff; border: 1px solid var(--border-subtle);">${c}</span>`).join("")}
            </div>
          </div>

          <div style="background: rgba(0, 0, 0, 0.45); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 1.5rem; display: flex; flex-direction: column; gap: 1.2rem;">
            <div>
              <div style="font-size: 0.75rem; text-transform: uppercase; color: var(--text-muted); letter-spacing: 0.1em;">Box Office</div>
              <div style="font-size: 1.5rem; font-family: var(--font-display); color: var(--marvel-gold);">${movie.boxOffice}</div>
            </div>
            <div>
              <div style="font-size: 0.75rem; text-transform: uppercase; color: var(--text-muted); letter-spacing: 0.1em;">Critical Reception</div>
              <div style="font-size: 0.92rem; color: #fff; font-weight: 600;">${movie.rating}</div>
            </div>
            <div>
              <div style="font-size: 0.75rem; text-transform: uppercase; color: var(--text-muted); letter-spacing: 0.1em;">Runtime</div>
              <div style="font-size: 0.92rem; color: #fff;">${movie.runtime}</div>
            </div>
            <div>
              <div style="font-size: 0.75rem; text-transform: uppercase; color: var(--text-muted); letter-spacing: 0.1em;">Chronological Setting</div>
              <div style="font-size: 0.92rem; color: var(--marvel-gold);">In-Universe: ${movie.chronologicalYear}</div>
            </div>
            ${
              movie.infinityStone
                ? `
              <div style="background: rgba(230, 36, 41, 0.12); border: 1px solid rgba(230, 36, 41, 0.3); border-radius: var(--radius-sm); padding: 10px;">
                <div style="font-size: 0.75rem; text-transform: uppercase; color: var(--marvel-red); font-weight: 700;">Infinity Stone Nexus</div>
                <div style="font-size: 0.86rem; color: #fff;">${movie.infinityStone}</div>
              </div>
            `
                : ""
            }
          </div>
        </div>
      </div>
    `;

    modal.classList.add("active");
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    // Clear iframe to stop video playback
    if (modalContent) modalContent.innerHTML = "";
    modal.classList.remove("active");
    document.body.style.overflow = "";
  };

  if (modalClose) modalClose.addEventListener("click", closeModal);
  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) closeModal();
    });
  }

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal?.classList.contains("active")) {
      closeModal();
    }
  });

  // URL query parameter check
  const urlParams = new URLSearchParams(window.location.search);
  const movieIdParam = urlParams.get("id");
  if (movieIdParam) {
    setTimeout(() => openMovieModal(movieIdParam), 150);
  }

  // Initial render
  renderMovies();
}
