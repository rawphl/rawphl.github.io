let container = document.querySelector(".container");
container.addEventListener("click", (e) => {
    if (e.target.classList.contains("question")) {
        e.target.parentElement.querySelector(".collapse").classList.toggle("collapsed");
        e.target.parentElement.querySelector(".answer").classList.toggle("hidden");
        e.target.parentElement.cl
    }
})