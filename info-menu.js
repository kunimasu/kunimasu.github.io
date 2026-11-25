const menuButton = document.querySelector('.info-menu-button');

function setMenuOpen(open) {
  document.body.toggleAttribute('data-menu-open', open);
  menuButton.setAttribute('aria-expanded', String(open));
}

menuButton.addEventListener('click', () => {
  setMenuOpen(menuButton.getAttribute('aria-expanded') === 'false');
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && document.body.hasAttribute('data-menu-open') && menuButton.getClientRects().length) {
    setMenuOpen(false);
    menuButton.focus();
  }
});

document.body.setAttribute('data-menu-ready', '');
