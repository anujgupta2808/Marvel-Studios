/**
 * Marvel MCU Timeline Page Script
 * Switch between "Release Order" and "Chronological / Story Order".
 * Interactive timeline nodes with modal details.
 */

document.addEventListener("DOMContentLoaded", () => {
  initTimelinePage();
});

function initTimelinePage() {
  const timelineTrack = document.querySelector("#timelineTrack");
  const toggleRelease = document.querySelector("#toggleReleaseOrder");
  const toggleChrono = document.querySelector("#toggleChronoOrder");
  const orderDescription = document.querySelector("#timelineOrderDesc");

  if (!timelineTrack || typeof MOVIES_DATA === "undefined") return;

  let currentMode = "release"; // "release" or "chronological"

  function renderTimeline() {
    let sortedMovies = [...MOVIES_DATA];

    if (currentMode === "release") {
      sortedMovies.sort((a, b) => a.releaseYear - b.releaseYear);
      if (orderDescription) {
        orderDescription.textContent =
          "Viewing by Theatrical Release Order (2008 – Present). Experience how Marvel Studios unveiled the universe to audiences worldwide.";
      }
    } else {
      sortedMovies.sort((a, b) => a.chronologicalOrder - b.chronologicalOrder);
      if (orderDescription) {
        orderDescription.textContent =
          "Viewing by In-Universe Chronological Order (1942 – Present). Watch the events as they happened within the MCU canon timeline.";
      }
    }

    timelineTrack.innerHTML = sortedMovies
      .map((movie, index) => {
        const displayYear =
          currentMode === "release"
            ? `${movie.releaseYear}`
            : `Canon Year: ${movie.chronologicalYear}`;

        return `
          <div class="timeline-node reveal-on-scroll is-revealed" data-id="${movie.id}">
            <div class="timeline-dot"></div>
            <div class="timeline-card" onclick="window.location.href='movies.html?id=${movie.id}'">
              <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 8px;">
                <span class="timeline-year-badge">${displayYear}</span>
                <span class="section-tag gold" style="font-size: 0.72rem; padding: 3px 10px; margin-bottom: 0;">${movie.phase}</span>
              </div>
              <h3 style="font-size: 1.6rem; color: #fff; margin-bottom: 6px;">${movie.title}</h3>
              <div style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 0.8rem;">
                Order #${index + 1} • Directed by ${movie.director}
              </div>
              <p style="font-size: 0.92rem; color: #bbb; line-height: 1.5; margin-bottom: 1rem;">
                ${movie.synopsis}
              </p>
              ${
                movie.infinityStone
                  ? `<div style="font-size: 0.8rem; color: var(--marvel-red); font-weight: 700; margin-bottom: 0.8rem;">💎 ${movie.infinityStone}</div>`
                  : ""
              }
              <div style="display: flex; align-items: center; justify-content: space-between; border-top: 1px solid var(--border-subtle); padding-top: 0.8rem;">
                <span style="font-size: 0.8rem; color: var(--marvel-gold); font-weight: 600;">${movie.boxOffice}</span>
                <span style="font-size: 0.84rem; color: var(--text-secondary); font-weight: 600;">Explore Movie & Trailer →</span>
              </div>
            </div>
          </div>
        `;
      })
      .join("");
  }

  if (toggleRelease && toggleChrono) {
    toggleRelease.addEventListener("click", () => {
      if (currentMode === "release") return;
      currentMode = "release";
      toggleRelease.classList.add("active");
      toggleChrono.classList.remove("active");
      renderTimeline();
    });

    toggleChrono.addEventListener("click", () => {
      if (currentMode === "chronological") return;
      currentMode = "chronological";
      toggleChrono.classList.add("active");
      toggleRelease.classList.remove("active");
      renderTimeline();
    });
  }

  // Initial render
  renderTimeline();
}

