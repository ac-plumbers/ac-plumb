document.addEventListener("DOMContentLoaded", () => {
  const openBtn = document.getElementById("open-menu-button");
  const closeBtn = document.getElementById("close-menu-button");
  const menu = document.getElementById("mobile-menu");
  const panel = document.getElementById("menu-panel");
  const backdrop = document.getElementById("menu-backdrop");

  function openMenu() {
    menu.classList.remove("hidden");
    setTimeout(() => {
      panel.classList.remove("translate-x-full");
    }, 10);
  }

  function closeMenu() {
    panel.classList.add("translate-x-full");
    setTimeout(() => {
      menu.classList.add("hidden");
    }, 300);
  }

  if (openBtn && closeBtn && menu && panel && backdrop) {
    openBtn.addEventListener("click", openMenu);
    closeBtn.addEventListener("click", closeMenu);
    backdrop.addEventListener("click", closeMenu);
  }
});
