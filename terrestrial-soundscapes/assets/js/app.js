let button = document.querySelector(".menuButton");

button.addEventListener("click", () => {
    button.parentElement.parentElement.querySelector("menu").classList.toggle("menuCollapsed");
})