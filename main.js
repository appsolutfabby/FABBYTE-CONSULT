"use strict";

/* navbar toggle */
/* const bookConsultationBtn = document.querySelector("[data-navbar-item-btn]"); */

const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const overlay = document.querySelector("[data-overlay]");

navOpenBtn.addEventListener("click", function () {
  navbar.classList.add("active");
  overlay.classList.add("active");
});

navCloseBtn.addEventListener("click", function () {
  navbar.classList.remove("active");
  overlay.classList.remove("active");
});

overlay.addEventListener("click", function () {
  navbar.classList.remove("active");
  overlay.classList.remove("active");
});

/* Add event listener to the button */
/* bookConsultationBtn.addEventListener("click", function () {
  navbar.classList.remove("active");
  overlay.classList.remove("active");
});
 */

/* toggle navbar & overlay on link click */

const navbarLinks = document.querySelectorAll("[data-navbar-link]");

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", function () {
    navbar.classList.remove("active");
    overlay.classList.remove("active");
  });
}

/* header & go to top active when scrolled to 400px */

const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-to-top]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 400) {
    header.classList.add("active");
    goTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    goTopBtn.classList.remove("active");
  }
});
