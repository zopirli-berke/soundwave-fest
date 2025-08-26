const mobileMenuIcon = document.querySelector("#mobile-menu-btn");
const ticketMenu = document.querySelector("#ticket-menu-item");

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
