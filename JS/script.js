// script for Navigation bar starts
const bars = document.querySelector(".bars");
const menu = document.querySelector(".menu");
console.log(bars);
console.log(menu);
bars.addEventListener("click", mobileMenu);

function mobileMenu() {
    bars.classList.toggle("active");
    menu.classList.toggle("active");
}
// script for Navigation bar ends
