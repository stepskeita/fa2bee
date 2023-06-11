let navLinks = document.querySelectorAll(".nav-link");
const sections = [
  document.querySelector("#top"),
  document.querySelector("#aboutus"),
  document.querySelector("#services"),
  document.querySelector("#ourNumbers"),
  document.querySelector("#testimonials"),
  document.querySelector("#contact"),
];
// for window scrolldown event
window.addEventListener("scroll", (e) => {
  sections.forEach((section) => {
    section.offsetBottom = section.offsetTop + section.offsetHeight;

    if (
      window.scrollY >= section.offsetTop - 200 &&
      window.scrollY <= section.offsetBottom - 200
    ) {
      navLinks.forEach((navLinkItem) => {
        if (navLinkItem.getAttribute("href").includes(section.id))
          navLinkItem.classList.add("active");
        else navLinkItem.classList.remove("active");
      });
    }
  });
});

// for clickable event
navLinks.forEach((navLink) => {
  navLink.addEventListener("click", (e) => {
    navLinks.forEach((navLinkItem) => navLinkItem.classList.remove("active"));
    navLink.classList.add("active");
  });
});
