function toggleMenu() {
    var menu = document.getElementById("mobileMenu");
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}
document.addEventListener("DOMContentLoaded", function () {
    const gallery = document.querySelector(".gallery");
    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");
    let index = 0;

    // Prebaci na sledeće tri slike
    nextBtn.addEventListener("click", function () {
        if (index < gallery.children.length - 3) { // Za tri slike
            index++;
            gallery.style.transform = `translateX(-${index * 33.33}%)`; // Pomeri za tri slike
        }
    });

    // Prebaci na prethodne tri slike
    prevBtn.addEventListener("click", function () {
        if (index > 0) {
            index--;
            gallery.style.transform = `translateX(-${index * 33.33}%)`; // Pomeri za tri slike
        }
    });
});


