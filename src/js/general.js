// side nav
const sideNavBtn = document.querySelector(".sideNavBtn");
const sideNavCloseBtn = document.querySelector(".sideNavCloseBtn");
const sideNav = document.querySelector(".sideNav");

sideNavBtn.addEventListener("click", (e) => {
  sideNav.classList.toggle("show");
});
sideNavCloseBtn.addEventListener("click", (e) => {
  sideNav.classList.toggle("show");
});

const scrollToTop = document.querySelector(".scrollToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY >= 400) {
    scrollToTop.classList.add("show");
  } else {
    scrollToTop.classList.remove("show");
  }
});

scrollToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0 });
});
