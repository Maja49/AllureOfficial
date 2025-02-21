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

document.addEventListener('DOMContentLoaded', () => {
    console.log("JavaScript is loaded");

    const scrollToTopButton = document.querySelector('.scroll-to-top');

    if (!scrollToTopButton) {
        console.error("Scroll-to-top button not found!");
        return;
    } else {
        console.log("Scroll-to-top button found!");
    }

    // Dodaj logiku za prikazivanje dugmeta kada je korisnik pri dnu stranice
    window.addEventListener('scroll', () => {
        const scrollHeight = document.documentElement.scrollHeight;
        const scrollTop = window.scrollY;
        const clientHeight = document.documentElement.clientHeight;

        // Proveri da li je korisnik pri dnu stranice
        if (scrollTop + clientHeight >= scrollHeight - 50) {
            scrollToTopButton.style.display = 'flex'; // Prikazuj dugme
        } else {
            scrollToTopButton.style.display = 'none'; // Sakrij dugme
        }
    });

    // Dodaj logiku za skrolovanje na vrh
    scrollToTopButton.addEventListener('click', () => {
        console.log("Scroll-to-top button clicked!");
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    });
});










