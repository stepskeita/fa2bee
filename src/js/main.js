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

document.querySelector(".footerDate").innerHTML = new Date().getFullYear();

const banners = [
  {
    title: "Laundry",
    description: "We do commercial laundry for all",
    image: "img/banner/riahbee_home1.webp",
    link: "https://riahbeelaundry.com/",
  },
  {
    title: "Cleaning",
    description: "Cleaning & Home Services in the Gambia",
    image: "img/banner/cleaning.png",
    link: "",
  },
  {
    title: "Crochet",
    description: "We design all types of wears for your drip",
    image: "img/banner/crochet.png",
    link: "",
  },
];

const homeServicesData = [
  {
    title: "Laundry",
    description:
      "Convenient and quality laundry service. Careful handling, prompt turnaround, and neatly folded clothes. Say goodbye to laundry hassles.",
    icon: "img/services/laundry.png",
    link: "https://riahbeelaundry.com/",
    slug: "laundry",
  },
  {
    title: "Cleaning",
    description:
      "Experience professional cleaning services that leave your space spotless and fresh. Thorough, reliable, and hassle-free.",
    icon: "img/services/cleaning.png",
    link: "",
    slug: "cleaning",
  },

  {
    title: "Kids Salon",
    description:
      "Fun, safe, and stylish salon experience for children. Skilled staff, trendy haircuts, and big smiles guaranteed.",
    icon: "img/services/kids-salon.png",
    link: "",
    slug: "kids-salon",
  },
];
const homeServicesContainer = document.querySelector(".homeServicesContainer");

const carouselItemsContainer = document.querySelector(
  ".carouselItemsContainer"
);

const indicatorsContainer = document.querySelector(".indicatorsContainer");

// home banner area
banners.forEach((banner, idx) => {
  indicatorsContainer.innerHTML += `<button
  type="button"
  data-te-target="#showcase"
  data-te-slide-to="${idx + 1}"
  class="w-3 h-3 my-1 rounded-full border border-white bg-beeYellow bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
></button>`;

  carouselItemsContainer.innerHTML += `
<div
class="relative float-left -mr-[100%] hidden w-full h-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
data-te-carousel-item
style="backface-visibility: hidden"
>
<img
  src="${banner.image}"
  class="block w-full h-full object-cover transition-transform duration-300 scale-x-100 scale-y-110"
  alt=""
/>
<!-- overlay -->
<div
  class="absolute top-0 left-0 w-full h-full bg-customDark/70 z-30 flex items-center justify-center p-5 lg:p-7 xl:p-10 text-white"
>
  <div
    class="text-center flex items-center flex-col justify-center"
  >
    <h2
      class="flex items-center text-4xl md:text-5xl xl:text-7xl mb-6 font-thin animate__animated animate__slideInDown"
      data-wow-duration="5s"
      data-wow-delay="3s"
    >
      <span class="font-thin text-beeYellow mx-2">FA2BEE</span>
      <span class="font-extrabold mx-2">${banner.title}</span>
    </h2>
    <div
      class="font-light text-sm md:text-lg animate__animated animate__slideInRight flex items-center mb-7"
      data-wow-duration="4s"
      data-wow-delay="3s"
    >
      <div
        class="w-7 xl:w-10 h-0.5 bg-beeYellow mx-2 lg:mx-4"
      ></div>
      <p class="text-sm xl:text-lg truncate">
        ${banner.description}
      </p>
      <div
        class="w-7 xl:w-10 h-0.5 bg-beeYellow mx-2 lg:mx-4"
      ></div>
    </div>
    <a
      href="${banner.link}"
      class="block mt-3 w-fit rounded-3xl hover:bg-customBlack hover:text-beeYellow hover:border hover:border-beeYellow transition-colors duration-500 mx-auto bg-beeYellow text-customBlack py-3 px-7 text-sm animate__animated animate__slideInUp"
      data-wow-duration="7s"
      data-wow-delay="5s"
    >
      More Details
    </a>
  </div>
</div>
</div>
`;
});

// home page services

homeServicesData.forEach((service) => {
  homeServicesContainer.innerHTML += `
  <div
            class="flex-1 flex m-2 my-4 hover:shadow-xl hover:shadow-customDark p-2 transition-all duration-500 service-${service.slug}"
          >
            <div class="flex flex-col items-center justify-center">
              <div class="w-0.5 my-2 bg-beeYellow flex-1"></div>
              <img
                class="h-16 w-16 object-scale-down"
                src="${service.icon}"
                alt="FA2BEE ${service.title}"
              />
              <div class="w-0.5 my-2 bg-beeYellow flex-1"></div>
            </div>
            <div class="flex-1 p-3 flex flex-col">
              <h2 class="text-xl mb-4 font-extrabold">${service.title}</h2>
              <p class="text-sm text-gray-200 mb-3">
                ${service.description}
              </p>
              <a
                href="${service.link}"
                class="w-fit text-beeYellow flex flex-col after:transition-all after:duration-300 after:w-6 after:border after:border-beeYellow hover:after:w-full"
              >
                More Details
              </a>
            </div>
          </div>
  `;
});

$(".about-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  items: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  autoplayTimeout: 2000,
  autoplayHoverPause: true,
});
$(".testimonial-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  items: 1,
  autoplay: true,
  autoplayTimeout: 3000,
  autoplaySpeed: 1200,
  autoplayHoverPause: true,
  slideTransition: "linear",
  margin: 10,
  responsive: {
    1450: {
      items: 4,
    },
    900: {
      items: 3,
    },
  },
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

// reveal animation
homeServicesData.forEach((service, i) => {
  ScrollReveal().reveal(`.service-${service.slug}`, {
    duration: 500,
    dealy: i * 100,
    reset: true,
  });
});
