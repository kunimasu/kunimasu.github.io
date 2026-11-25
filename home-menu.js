const homeHeader = document.querySelector(".home-header");
const homeMenuButton = homeHeader.querySelector(".home-menu-button");
const homeMenu = homeHeader.querySelector(".home-nav");
const compactHeader = window.matchMedia("(max-width: 740px)");

function isHomeMenuOpen() {
  return homeMenuButton.getAttribute("aria-expanded") === "true";
}

function closeHomeMenu(returnFocus = false) {
  if (!isHomeMenuOpen()) return;
  homeMenuButton.setAttribute("aria-expanded", "false");
  if (returnFocus) homeMenuButton.focus();
}

homeMenuButton.addEventListener("click", () => {
  homeMenuButton.setAttribute("aria-expanded", String(!isHomeMenuOpen()));
});

homeHeader.addEventListener("click", (event) => {
  if (event.target.closest("a")) closeHomeMenu();
});

homeHeader.addEventListener("focusout", (event) => {
  if (!homeHeader.contains(event.relatedTarget)) closeHomeMenu();
});

document.addEventListener("click", (event) => {
  if (!homeHeader.contains(event.target)) closeHomeMenu();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeHomeMenu(true);
});

compactHeader.addEventListener("change", () => {
  closeHomeMenu(compactHeader.matches && homeMenu.contains(document.activeElement));
});

homeMenuButton.hidden = false;
homeHeader.dataset.menuReady = "";
