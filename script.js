const slides = document.querySelectorAll('.slideshow img');
let currentIndex = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = i === index ? 'block' : 'none';
    });
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}

// Initialize the slideshow
showSlide(currentIndex);
setInterval(nextSlide, 3000); // Change slide every 3 seconds
