document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll(".section");

  navLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();

      // Hide all sections
      sections.forEach((section) => {
        section.classList.remove("visible");
        section.classList.add("hidden");
      });

      // Show the clicked section
      const target = document.querySelector(link.getAttribute("href"));
      target.classList.remove("hidden");
      setTimeout(() => target.classList.add("visible"), 10); // Add a delay for animation
    });
  });
});