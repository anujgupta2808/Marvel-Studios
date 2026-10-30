/**
 * Marvel Superheroes Page Script
 * Search, Category Filtering, Sorting, Character Details Modal, Stats Bars.
 */

document.addEventListener("DOMContentLoaded", () => {
  initHeroesPage();
});

function initHeroesPage() {
  const grid = document.querySelector("#heroesGrid");
  const searchInput = document.querySelector("#heroSearchInput");
  const filterButtons = document.querySelectorAll(".hero-filter-btn");
  const sortSelect = document.querySelector("#heroSortSelect");
  const modal = document.querySelector("#heroModal");
  const modalContent = document.querySelector("#heroModalBody");
  const modalClose = modal?.querySelector(".modal-close-btn");

  if (!grid || typeof CHARACTERS_DATA === "undefined") return;

  let currentCategory = "all";
  let currentSearch = "";
  let currentSort = "name-asc";

  function renderCharacters() {
    let filtered = CHARACTERS_DATA.filter((hero) => {
      const matchesCategory =
        currentCategory === "all" ||
        hero.category === currentCategory ||
        hero.affiliation.toLowerCase().includes(currentCategory);

      const matchesSearch =
        hero.name.toLowerCase().includes(currentSearch) ||
        hero.realName.toLowerCase().includes(currentSearch) ||
        hero.powers.some((p) => p.toLowerCase().includes(currentSearch));

      return matchesCategory && matchesSearch;
    });

    // Sorting
    filtered.sort((a, b) => {
      if (currentSort === "name-asc") return a.name.localeCompare(b.name);
      if (currentSort === "name-desc") return b.name.localeCompare(a.name);
      if (currentSort === "power-desc") {
        const avgA = (a.stats.intelligence + a.stats.strength + a.stats.energy) / 3;
        const avgB = (b.stats.intelligence + b.stats.strength + b.stats.energy) / 3;
        return avgB - avgA;
      }
      return 0;
    });

    if (filtered.length === 0) {
      grid.innerHTML = `
        <div style="grid-column: 1/-1; text-align: center; padding: 4rem 1rem;">
          <h3 style="color: var(--marvel-gold); margin-bottom: 0.8rem;">No Heroes Assembled</h3>
          <p>No characters match your search criteria. Try a different query or reset filters.</p>
          <button class="btn btn-outline" style="margin-top: 1.5rem;" onclick="resetHeroFilters()">Reset All Filters</button>
        </div>
      `;
      return;
    }

    grid.innerHTML = filtered
      .map(
        (hero) => `
        <article class="character-card reveal-on-scroll is-revealed" data-id="${hero.id}" tabindex="0" role="button" aria-label="View details for ${hero.name}">
          <div class="card-image-wrap">
            <div class="card-glow-bg" style="background: ${hero.accentColor};"></div>
            <span class="card-badge">${hero.affiliation.split("/")[0]}</span>
            <img src="${hero.image}" alt="${hero.name}" loading="lazy" onerror="this.src='assets/images/characters/iron-man.png'" />
          </div>
          <div class="card-content">
            <h3 class="card-character-name">${hero.name}</h3>
            <div class="card-real-name">${hero.realName}</div>
            <div class="card-quote">“${hero.quote}”</div>
            <div class="card-footer">
              <span style="font-size: 0.8rem; color: var(--text-muted);">${hero.firstAppearance}</span>
              <button class="btn btn-primary btn-sm" onclick="event.stopPropagation(); openHeroModal('${hero.id}')">Intel Dossier →</button>
            </div>
          </div>
        </article>
      `
      )
      .join("");

    // Click handler for card
    grid.querySelectorAll(".character-card").forEach((card) => {
      card.addEventListener("click", () => {
        const id = card.getAttribute("data-id");
        openHeroModal(id);
      });
      card.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          const id = card.getAttribute("data-id");
          openHeroModal(id);
        }
      });
    });
  }

  // Filter click handlers
  filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      currentCategory = btn.getAttribute("data-filter");
      renderCharacters();
    });
  });

  // Search input handler
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      currentSearch = e.target.value.trim().toLowerCase();
      renderCharacters();
    });
  }

  // Sort select handler
  if (sortSelect) {
    sortSelect.addEventListener("change", (e) => {
      currentSort = e.target.value;
      renderCharacters();
    });
  }

  // Global reset helper
  window.resetHeroFilters = () => {
    currentCategory = "all";
    currentSearch = "";
    currentSort = "name-asc";
    if (searchInput) searchInput.value = "";
    if (sortSelect) sortSelect.value = "name-asc";
    filterButtons.forEach((b) => {
      b.classList.toggle("active", b.getAttribute("data-filter") === "all");
    });
    renderCharacters();
  };

  // Modal open function
  window.openHeroModal = (id) => {
    const hero = CHARACTERS_DATA.find((h) => h.id === id);
    if (!hero || !modal || !modalContent) return;

    modalContent.innerHTML = `
      <div style="display: grid; grid-template-columns: 1fr 1.3fr; gap: 2rem; align-items: start;">
        <div style="background: radial-gradient(circle at 50% 50%, rgba(255,255,255,0.06), #101010); border-radius: var(--radius-md); padding: 1.5rem; text-align: center; border: 1px solid var(--border-subtle);">
          <img src="${hero.image}" alt="${hero.name}" style="max-height: 400px; margin: 0 auto; filter: drop-shadow(0 15px 30px rgba(0,0,0,0.9));" />
          <div style="margin-top: 1.2rem;">
            <span class="section-tag" style="margin-bottom: 0;">Status: ${hero.status}</span>
          </div>
        </div>
        <div>
          <span class="section-tag gold">${hero.affiliation}</span>
          <h2 style="font-size: 2.8rem; margin: 0.2rem 0; color: #fff;">${hero.name}</h2>
          <div style="font-size: 1.1rem; color: var(--marvel-gold); margin-bottom: 1.2rem; font-weight: 600;">
            ${hero.realName} • Portrayed by ${hero.actor}
          </div>
          <div style="background: rgba(230, 36, 41, 0.08); border-left: 3px solid var(--marvel-red); padding: 12px 16px; margin-bottom: 1.4rem; font-style: italic; color: #E0E0E0;">
            "${hero.struggleQuote}"
          </div>
          <p style="font-size: 0.95rem; margin-bottom: 1.5rem; line-height: 1.7;">${hero.bio}</p>

          <h4 style="font-size: 1.2rem; color: var(--marvel-gold); margin-bottom: 0.8rem;">Superhuman Capabilities</h4>
          <ul style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-bottom: 1.8rem;">
            ${hero.powers.map((p) => `<li style="font-size: 0.86rem; color: #ccc; display: flex; align-items: center; gap: 6px;"><span style="color: var(--marvel-red);">⚡</span> ${p}</li>`).join("")}
          </ul>

          <h4 style="font-size: 1.2rem; color: var(--marvel-gold); margin-bottom: 0.8rem;">Power Attributes</h4>
          <div class="stats-grid">
            <div class="stat-bar-item">
              <label><span>Intelligence</span> <span>${hero.stats.intelligence}%</span></label>
              <div class="stat-bar-track"><div class="stat-bar-fill" style="width: ${hero.stats.intelligence}%;"></div></div>
            </div>
            <div class="stat-bar-item">
              <label><span>Strength</span> <span>${hero.stats.strength}%</span></label>
              <div class="stat-bar-track"><div class="stat-bar-fill" style="width: ${hero.stats.strength}%;"></div></div>
            </div>
            <div class="stat-bar-item">
              <label><span>Speed</span> <span>${hero.stats.speed}%</span></label>
              <div class="stat-bar-track"><div class="stat-bar-fill" style="width: ${hero.stats.speed}%;"></div></div>
            </div>
            <div class="stat-bar-item">
              <label><span>Durability</span> <span>${hero.stats.durability}%</span></label>
              <div class="stat-bar-track"><div class="stat-bar-fill" style="width: ${hero.stats.durability}%;"></div></div>
            </div>
            <div class="stat-bar-item">
              <label><span>Energy Output</span> <span>${hero.stats.energy}%</span></label>
              <div class="stat-bar-track"><div class="stat-bar-fill" style="width: ${hero.stats.energy}%;"></div></div>
            </div>
            <div class="stat-bar-item">
              <label><span>Combat Skills</span> <span>${hero.stats.combat}%</span></label>
              <div class="stat-bar-track"><div class="stat-bar-fill" style="width: ${hero.stats.combat}%;"></div></div>
            </div>
          </div>

          <h4 style="font-size: 1.2rem; color: var(--marvel-gold); margin: 1.5rem 0 0.8rem 0;">Key MCU Appearances</h4>
          <div style="display: flex; flex-wrap: wrap; gap: 8px;">
            ${hero.keyAppearances.map((m) => `<span style="background: rgba(255,255,255,0.06); padding: 4px 12px; border-radius: var(--radius-sm); font-size: 0.82rem; color: #ddd; border: 1px solid var(--border-subtle);">${m}</span>`).join("")}
          </div>
        </div>
      </div>
    `;

    modal.classList.add("active");
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
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

  // Check URL query parameters for direct modal open (e.g., heroes.html?id=iron-man)
  const urlParams = new URLSearchParams(window.location.search);
  const heroIdParam = urlParams.get("id");
  if (heroIdParam) {
    setTimeout(() => openHeroModal(heroIdParam), 150);
  }

  // Initial render
  renderCharacters();
}
