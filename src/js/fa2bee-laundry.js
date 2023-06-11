const faqs = [
  {
    question: "HOW FAST CAN I GET MY ITEMS DELIVERED?",
    answer: `You can have your items delivered within 2 days.`,
  },
  {
    question: "ARE ANY OF YOUR PRODUCTS A DANGER TO THE ENVIRONMENT?",
    answer: `We use animal friendly products. None of our products are harmful to the environment.`,
  },
  {
    question: "WHAT DO I PUT MY DIRTY LAUNDRY ITEMS IN?",
    answer: `For first time users, put it in a trash bag or any bag and when we return your clothes we will put it in a nice RIAHBEE bag, we kindly ask that you use those for the future orders.`,
  },
  {
    question: "WHAT HAPPENS WHEN MY CLOTHING IS RUINED BY YOUR LAUNDRY MAT ?",
    answer: `Please do call us immediately if this happens, such issues are rare but our customer service is what makes us different. we will do everything we can to quickly fix the problem.`,
  },
  {
    question: "FOR PICKUP AND DELIVERY , DO I HAVE TO BE HOME?",
    answer: `When you make this request simply let us know where the laundry/ dry cleaning will be , most people put it in their front door. Whatever works for you ! the same thing goes for when we return your items.`,
  },
  {
    question: "DO I BRING IN MY OWN DETERGENT?",
    answer: `Unless you want to, we will provide the detergent for free.`,
  },
];

const questionsAndAnswers = document.querySelector("#accordion");
faqs.forEach((faq, i) => {
  questionsAndAnswers.innerHTML += `
  <h3 class="text-sm xl:text-lg font-bold text-left text-black border-none ${
    i % 2 === 0 ? "bg-beeYellow" : "bg-laundryLightPurple"
  }">${faq.question}</h3>
  <div class="h-fit">
    <p class="text-black">
    ${faq.answer}
    </p>
  </div>
      `;
});

$("#accordion").accordion();
