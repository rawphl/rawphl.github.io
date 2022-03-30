let exploreButton = document.querySelector(".exploreButton");
let text = document.querySelectorAll("h1");
let archway = document.querySelector(".archwayImg");
let bgImage = document.querySelector(".bgImage");

exploreButton.addEventListener("click", () => {
/*     archway.style.transform = "scale(1.7)";

    bgImage.style.transform = "scale(1.2)";
    bgImage.style.filter = "blur(0)  grayscale(.2) brightness(.8)";
    bgImage.style.opacity = "o";

    exploreButton.style.filter = "blur(300px)";
    exploreButton.style.opacity = "0";

    for (let h1 of text) {
        h1.style.filter = "blur(300px)";
        h1.style.opacity = "0";
    }

    setTimeout(() => {
        window.location.href = "explore.html";
    }, 1000)
 */
    window.location.href = "explore.html";
})