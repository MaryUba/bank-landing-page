const menuButton = document.querySelector(".toggle-menu-btn");
const primaryNav = document.querySelector(".primary-navigation");
const overlay = document.querySelector(".overlay");

menuButton.addEventListener("click", () => {
  overlay.classList.toggle("hidden");
  let isHidden = primaryNav.getAttribute("data-hidden");
  if (isHidden === "false") {
    primaryNav.setAttribute("data-hidden", true);
    menuButton.setAttribute("aria-expanded", false);
  } else {
    primaryNav.setAttribute("data-hidden", false);
    menuButton.setAttribute("aria-expanded", true);
  }
});

function openFormInNewTab() {
  const formUrl = "https://maryuba.github.io/form/";

  window.open(formUrl, '_blank');
}