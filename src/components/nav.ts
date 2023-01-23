const button = document.getElementById("nav-button");
const nav = document.getElementById("nav");
const menu = document.getElementById("menu");

button?.addEventListener("click", function () {
  nav?.classList.toggle("hidden");
  nav?.classList.toggle("block");

  menu?.classList.toggle("flex-col");
});
