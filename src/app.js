const mobileMenuIcon = document.querySelector("#mobile-menu-btn");
const ticketMenu = document.querySelector("#ticket-menu-item");
const subscribeForm = document.querySelector("#subscribe-form");
const subscribeMessage = document.getElementById("subscribe-message");
const previousBtn = document.querySelector("#previous");
const nextBtn = document.querySelector("#next");
const carousel = document.querySelector("#carousel");

mobileMenuIcon.addEventListener(`click`, () => {
  if (mobileMenuIcon.classList.contains("open")) {
    mobileMenuIcon.classList.remove("open");
  } else {
    mobileMenuIcon.classList.add("open");
  }
});

ticketMenu.addEventListener(`click`, () => {
  if (ticketMenu.classList.contains("open")) {
    ticketMenu.classList.remove("open");
  } else {
    ticketMenu.classList.add("open");
  }
});

subscribeForm.addEventListener("submit", (event) => {
  event.preventDefault();

  subscribeMessage.classList.remove("hidden");

  setTimeout(() => {
    subscribeMessage.classList.add("hidden");
    subscribeForm.reset();
  }, 3000);
});

nextBtn.addEventListener("click", () => {
  const itemWidth = carousel.getElementsByTagName("div")[0].clientWidth;
  carousel.scrollLeft = carousel.scrollLeft + itemWidth;
});

previousBtn.addEventListener("click", () => {
  const itemWidth = carousel.getElementsByTagName("div")[0].clientWidth;
  carousel.scrollLeft = carousel.scrollLeft - itemWidth;
});
