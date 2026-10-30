/**
 * Marvel Contact & Community Page Script
 * Client-Side Form Validation, Live Character Counter,
 * Interactive FAQ Accordions, and Modal Toast Confirmations.
 */

document.addEventListener("DOMContentLoaded", () => {
  initContactPage();
  initFaqAccordion();
});

function initContactPage() {
  const form = document.querySelector("#contactForm");
  const nameInput = document.querySelector("#contactName");
  const emailInput = document.querySelector("#contactEmail");
  const topicSelect = document.querySelector("#contactTopic");
  const messageInput = document.querySelector("#contactMessage");
  const charCounter = document.querySelector("#charCount");
  const submitBtn = document.querySelector("#contactSubmitBtn");

  if (!form) return;

  // Character counter
  if (messageInput && charCounter) {
    messageInput.addEventListener("input", () => {
      const length = messageInput.value.length;
      charCounter.textContent = `${length} / 500 characters`;
      if (length > 450) {
        charCounter.style.color = "var(--marvel-gold)";
      } else {
        charCounter.style.color = "var(--text-muted)";
      }
    });
  }

  // Helper validation functions
  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const showError = (input, msg) => {
    const parent = input.closest(".form-group");
    let errorEl = parent.querySelector(".form-error-msg");
    if (!errorEl) {
      errorEl = document.createElement("div");
      errorEl.className = "form-error-msg";
      parent.appendChild(errorEl);
    }
    errorEl.textContent = msg;
    errorEl.style.display = "block";
    input.style.borderColor = "#FF5252";
  };

  const clearError = (input) => {
    const parent = input.closest(".form-group");
    const errorEl = parent.querySelector(".form-error-msg");
    if (errorEl) errorEl.style.display = "none";
    input.style.borderColor = "";
  };

  // Real-time blur validation
  nameInput?.addEventListener("blur", () => {
    if (nameInput.value.trim().length < 2) {
      showError(nameInput, "Please enter your name (minimum 2 characters).");
    } else {
      clearError(nameInput);
    }
  });

  emailInput?.addEventListener("blur", () => {
    if (!validateEmail(emailInput.value.trim())) {
      showError(emailInput, "Please provide a valid email address.");
    } else {
      clearError(emailInput);
    }
  });

  messageInput?.addEventListener("blur", () => {
    if (messageInput.value.trim().length < 10) {
      showError(messageInput, "Message must be at least 10 characters long.");
    } else {
      clearError(messageInput);
    }
  });

  // Form submission
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    let isValid = true;

    if (nameInput.value.trim().length < 2) {
      showError(nameInput, "Please enter your name.");
      isValid = false;
    } else {
      clearError(nameInput);
    }

    if (!validateEmail(emailInput.value.trim())) {
      showError(emailInput, "Please provide a valid email address.");
      isValid = false;
    } else {
      clearError(emailInput);
    }

    if (messageInput.value.trim().length < 10) {
      showError(messageInput, "Message must be at least 10 characters.");
      isValid = false;
    } else {
      clearError(messageInput);
    }

    if (!isValid) return;

    // Simulate sending state
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = `<span>Transmitting to Avengers HQ...</span>`;
    submitBtn.disabled = true;

    setTimeout(() => {
      submitBtn.innerHTML = originalText;
      submitBtn.disabled = false;

      // Show success toast
      if (typeof showToast === "function") {
        showToast("🚀 Transmission Received! S.H.I.E.L.D. Command will review your message.");
      }

      // Reset form
      form.reset();
      if (charCounter) charCounter.textContent = "0 / 500 characters";
    }, 1200);
  });
}

function initFaqAccordion() {
  const faqItems = document.querySelectorAll(".faq-item");
  if (!faqItems.length) return;

  faqItems.forEach((item) => {
    const header = item.querySelector(".faq-header");
    if (!header) return;

    header.addEventListener("click", () => {
      const isOpen = item.classList.contains("open");

      // Close other accordions
      faqItems.forEach((other) => {
        if (other !== item) other.classList.remove("open");
      });

      // Toggle current
      item.classList.toggle("open", !isOpen);
    });

    header.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        header.click();
      }
    });
  });
}
