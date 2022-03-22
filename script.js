const navMenu = document.querySelector(".nav__menu");
const navButton = document.querySelector(".nav__container--button");
const navLinks = document.querySelectorAll(".nav--link");
const navMenuClose = document.querySelector(".menuClose");
const navMenuOpen = document.querySelector(".menuOpen");

navLinks.forEach(navLink => navLink.addEventListener("click", toggleMenu));

navButton.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (navMenu.classList.contains("showMenu")) {
    navMenu.classList.remove("showMenu");
    navMenuClose.style.display = "none";
    navMenuOpen.style.display = "block";
  } else {
    navMenu.classList.add("showMenu");
    navMenuClose.style.display = "block";
    navMenuOpen.style.display = "none";
  }
}