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
  // {
  //   name: "Baboucarr Mendy",
  //   service: "Laundry",
  //   testimonial:
  //     "This laundry service is a game-changer for me. They handle my laundry with care, even the delicate items, and deliver them back promptly. It's a huge relief not to worry about laundry anymore!",
  //   image: "./img/testimonials/male-3.png",
  // },
  // {
  //   name: "Aminata Ceesay",
  //   service: "Kids Salon",
  //   testimonial:
  //     "I take my children to this salon regularly, and they always have a blast. The staff is amazing with kids and creates a fun and safe environment. The haircuts are stylish, and my kids can't wait to go back!",
  //   image: "./img/testimonials/female-4.png",
  // },
  // {
  //   name: "Ousman Jagne",
  //   service: "Crochet",
  //   testimonial:
  //     "This company is a crocheter's paradise! They have a wide range of yarns in various colors and textures. The quality is excellent, and I always find what I need for my crochet projects. Highly recommended!",
  //   image: "./img/testimonials/male-4.png",
  // },
  // {
  //   name: "Mariama Ceesay",
  //   service: "Cleaning",
  //   testimonial:
  //     "I've tried several cleaning services, but this one stands out. The cleaners are punctual, trustworthy, and go above and beyond to ensure my home is immaculate. I'm a satisfied customer!",
  //   image: "./img/testimonials/female-5.png",
  // },
  // {
  //   name: "Bakary Touray",
  //   service: "Laundry",
  //   testimonial:
  //     "I can't express how much time this laundry service has saved me. The convenience of having my clothes picked up, cleaned, and delivered back is a game-changer. The quality of their work is top-notch!",
  //   image: "./img/testimonials/male-5.png",
  // },
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
  <p class="text-sm">${testimonial.testimonial}</p>
  </div>
`)
);
