const servicesCounter = document.querySelector(".servicesCounter");

const ourNumbers = document.querySelector("#ourNumbers");

window.addEventListener("scroll", (e) => {
  if (
    window.scrollY >= ourNumbers.offsetTop - 500 &&
    servicesCounter.innerHTML.toString() === "0"
  ) {
    $(".servicesCounter").countTo({
      from: 0,
      to: 4,
      speed: 2000,
      refreshInterval: 50,
    });

    $(".clientsCounter").countTo({
      from: 0,
      to: 1500,
      speed: 2000,
      refreshInterval: 50,
    });

    $(".deliveredCounter").countTo({
      from: 0,
      to: 2500,
      speed: 2000,
      refreshInterval: 50,
    });
  }
});
