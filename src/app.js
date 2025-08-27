const mobileMenuIcon = document.querySelector("#mobile-menu-btn");

const subscribeForm = document.querySelector("#subscribe-form");
const subscribeMessage = document.getElementById("subscribe-message");
const previousBtn = document.querySelector("#previous");
const nextBtn = document.querySelector("#next");
const carousel = document.querySelector("#carousel");
const darkModeToggle = document.querySelector("#dark-mode-toggle");
const mobileMenu = document.getElementById("mobile-menu");

mobileMenuIcon.addEventListener(`click`, () => {
  if (mobileMenuIcon.classList.contains("open")) {
    mobileMenuIcon.classList.remove("open");
  } else {
    mobileMenuIcon.classList.add("open");
  }
});

mobileMenu.addEventListener("click", () => {
  mobileMenuIcon.classList.remove("open");
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

if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
}

darkModeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});
