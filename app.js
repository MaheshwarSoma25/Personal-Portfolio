let navList = document.querySelector(".bi-list");
let closeSymbol = document.querySelector(".bi-x");
let header = document.querySelector("header");

navList.addEventListener("click", function () {
  let secondNav = document.querySelector(".second-nav-container");
  if (secondNav) {
    secondNav.style.display = "inline-block";
  }
});

closeSymbol.addEventListener("click", () => {
  let secondNav = document.querySelector(".second-nav-container");
  if (secondNav) {
    secondNav.style.display = "none";
  }
})