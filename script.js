const header = document.querySelector("[data-header]");
const toggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelectorAll(".site-nav a");

function syncHeader() {
  if (!header) return;
  header.classList.toggle("is-scrolled", window.scrollY > 12);
}

function closeNav() {
  if (!header || !toggle) return;
  document.body.classList.remove("nav-open");
  header.classList.remove("is-open");
  toggle.setAttribute("aria-expanded", "false");
}

window.addEventListener("scroll", syncHeader, { passive: true });
syncHeader();

if (toggle && header) {
  toggle.addEventListener("click", () => {
    const expanded = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!expanded));
    header.classList.toggle("is-open", !expanded);
    document.body.classList.toggle("nav-open", !expanded);
  });
}

navLinks.forEach((link) => {
  link.addEventListener("click", closeNav);
});
