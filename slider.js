let slideIndex = 0;

function showSlide() {
    const slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.transform = "translateX(-" + slideIndex * 100 + "%)";
    }
}

function changeSlide(n, event) {
    event.preventDefault(); 
    
    const slides = document.querySelectorAll(".slide");
    slideIndex += n;
    if (slideIndex >= slides.length) slideIndex = 0;
    if (slideIndex < 0) slideIndex = slides.length - 1;

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex].style.display = "block";
}

showSlide();
