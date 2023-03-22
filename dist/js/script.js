window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;
  const top = document.querySelector("#top");
  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
    top.classList.remove("hidden");
    top.classList.add("flex");
  } else {
    header.classList.remove("navbar-fixed");
    top.classList.remove("flex");
    top.classList.add("hidden");
  }
};

const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");
hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

const mode = document.querySelector("#mode");
const html = document.querySelector("html");
mode.addEventListener("click", function () {
  if (mode.checked) {
    html.classList.add("dark");
    localStorage.theme = "dark";
  } else {
    html.classList.remove("dark");
    localStorage.theme = "light";
  }
});

if (
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  mode.checked = true;
} else {
  mode.checked = false;
}
