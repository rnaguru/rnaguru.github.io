document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu-toggle");
  const sideNav = document.getElementById("side-nav");

  menuToggle.addEventListener("click", () => {
    sideNav.classList.toggle("show");
  });

  // Close the menu when clicking a link
  const navLinks = document.querySelectorAll(".nav-link");
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      sideNav.classList.remove("show");
    });
  });
});