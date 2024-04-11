const burgerMenu = document.querySelector("#burgerActive");
const navMenu = document.querySelector("#navbar");

burgerMenu.addEventListener("click", function () {
    burgerMenu.classList.toggle("burger")
    navMenu.classList.toggle("hidden")
});