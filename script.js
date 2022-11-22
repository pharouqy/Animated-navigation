const nav = document.querySelector("nav");
const humburger = document.querySelector("div.humburger");
const ul = document.querySelector("ul");

humburger.addEventListener("click", (e) => {
  if (humburger.classList.contains("animated")) {
    humburger.classList.remove("animated");
    ul.classList.remove("animated");
    nav.classList.remove("animated");
  } else {
    humburger.classList.add("animated");
    ul.classList.add("animated");
    nav.classList.add("animated");
  }
});
