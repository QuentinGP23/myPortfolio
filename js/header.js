const nav = document.getElementById("nav");
const toggleIcon = document.getElementById("toggleIcon");
const main = document.getElementsByTagName("main")[0];
const body = document.getElementsByTagName("body")[0];
const footer = document.getElementsByTagName("footer")[0];

toggleIcon.addEventListener("click", function() {
  if (main.style.display === "none") {
    nav.style.display = "none";
    main.style.display = "block";
    body.style.overflow = "auto";
    footer.style.display = "flex";
    toggleIcon.src = "./img/icons/icons8-menu.svg";
  } else {
    nav.style.display = "block";
    main.style.display = "none";
    body.style.overflow = "hidden";
    footer.style.display = "none";
    toggleIcon.src = "./img/icons/icons8-menu_close.svg";
  }
});