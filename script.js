document.addEventListener("DOMContentLoaded", () => {
  // Mobile Navigation Toggle
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.querySelector(".navbar ul");
  hamburger?.addEventListener("click", () => {
    navMenu?.classList.toggle("active");
  });

  // Back to Top Button
  const backToTop = document.getElementById("backToTop");
  window.addEventListener("scroll", () => {
    document.querySelector(".header")?.classList.toggle("shrink", window.scrollY > 50);
    if (backToTop) backToTop.style.display = window.scrollY > 300 ? "block" : "none";
  });

  backToTop?.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Product Filtering
  document.querySelectorAll("[data-filter]").forEach(button => {
    button.addEventListener("click", () => {
      const category = button.dataset.filter;
      document.querySelectorAll(".product-card").forEach(card => {
        card.style.display = category === "all" || card.dataset.category === category ? "block" : "none";
      });
    });
  });

  // Modal Handling
  window.openModal = id => {
    const modal = document.getElementById(`modal-${id}`);
    if (modal) modal.style.display = "flex";
  };
  
  window.closeModal = id => {
    const modal = document.getElementById(`modal-${id}`);
    if (modal) modal.style.display = "none";
  };

  // Contact Form Validation
  const contactForm = document.getElementById("contactForm");
  contactForm?.addEventListener("submit", (e) => {
    const name = document.getElementById("name")?.value.trim();
    const email = document.getElementById("email")?.value.trim();
    const message = document.getElementById("message")?.value.trim();
    if (!name || !email || !message) {
      alert("Please fill out all fields.");
      e.preventDefault();
    }
  });
});

