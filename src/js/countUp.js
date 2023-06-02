const servicesCounter = document.querySelector(".servicesCounter");
const clientsCounter = document.querySelector(".clientsCounter");
const deliveredCounter = document.querySelector(".deliveredCounter");

const ourNumbers = document.querySelector("#ourNumbers");

const countUp = (element, start, end, timing) => {
  element.innerHTML = start;

  if (start < end) {
    setTimeout(() => countUp(element, start + 1, end, timing), timing);
  }
};

window.addEventListener("scroll", (e) => {
  if (
    window.scrollY >= ourNumbers.offsetTop - 500 &&
    servicesCounter.innerHTML.toString() === "0"
  ) {
    countUp(servicesCounter, 0, 4, 500);
  }

  if (
    window.scrollY >= ourNumbers.offsetTop - 500 &&
    clientsCounter.innerHTML.toString() === "0"
  ) {
    countUp(clientsCounter, 0, 1500, 0.1);
  }

  if (
    window.scrollY >= ourNumbers.offsetTop - 500 &&
    deliveredCounter.innerHTML.toString() === "0"
  ) {
    countUp(deliveredCounter, 0, 2500, 0.01);
  }
});
