let slideIndex = 0;
showSlides();

function showSlides() {
    const slides = document.querySelectorAll('.slide');

    // Hide all slides
    slides.forEach(slide => {
        slide.style.display = 'none';
    });

    // Increment the slide index
    slideIndex++;

    // Reset slide index if we reach the end
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    // Display the current slide
    slides[slideIndex - 1].style.display = 'block';

    // Call showSlides() every 2 seconds for automatic sliding
    setTimeout(showSlides, 2000);
}

// Initial slide display
showSlides();
