const icon = document.getElementById("toggle");
const nav = document.getElementById("nav");

icon.addEventListener("click", function () {
  nav.classList.toggle("active");
});
