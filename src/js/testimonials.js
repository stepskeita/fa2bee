const testimonials = [
  {
    name: "Fatou Sarr",
    service: "Cleaning",
    testimonial:
      "I am extremely satisfied with the cleaning services provided by this company. They are professional, thorough, and always leave my home sparkling clean. Highly recommended!",
    image: "./img/testimonials/female-1.png",
  },
  {
    name: "Modou Jallow",
    service: "Laundry",
    testimonial:
      "The laundry service offered by this company is exceptional. They handle my clothes with care, and everything comes back neatly folded and smelling fresh. It's a huge time-saver for me!",
    image: "./img/testimonials/male-1.png",
  },
  {
    name: "Awa Ceesay",
    service: "Kids Salon",
    testimonial:
      "My kids love going to this salon! The staff is friendly, patient, and skilled at handling children. They always leave with stylish haircuts and big smiles on their faces.",
    image: "./img/testimonials/female-2.png",
  },
  {
    name: "Lamin Sanneh",
    service: "Crochet",
    testimonial:
      "As a crochet enthusiast, I am impressed by the quality and variety of yarns available from this company. They offer excellent customer service and prompt delivery. A great resource for all my crochet projects!",
    image: "./img/testimonials/male-2.png",
  },
  {
    name: "Ndey Saine",
    service: "Cleaning",
    testimonial:
      "I've used their cleaning services for both my home and office, and I've been consistently impressed. They pay attention to detail and ensure that every nook and corner is spotless. Great job!",
    image: "./img/testimonials/female-3.png",
  },
];

const testimonalCarousel = document.querySelector(".testimonial-carousel");

testimonials.forEach(
  (testimonial) =>
    (testimonalCarousel.innerHTML += `
  <div class="item text-center p-3">
  <div class="rounded-full mx-auto  overflow-hidden w-16 h-16 mb-2">
  <img src="${testimonial.image}" alt="Fa2Bee Happy Clients" class="w-full object-scale-down">
  </div>
  <h2 class="text-beeYellow font-extrabold text-2xl mb-2">${testimonial.name}</h2>
  <p class="text-lg mb-7">${testimonial.service}</p>
  <p class="text-sm w-9/12 mx-auto md:w-full">${testimonial.testimonial}</p>
  </div>
`)
);
