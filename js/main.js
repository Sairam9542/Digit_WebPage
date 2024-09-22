//Testimonial Corousel for Learners Reviews

const testimonials = document.querySelectorAll('.testimonial');
const dots = document.querySelectorAll('.dot');
let currentIndex = 0;
let autoSlideInterval;

function showTestimonial(index) {
    const slider = document.querySelector('.testimonial-slider');
    slider.style.transform = `translateX(-${index * 100}%)`;
    updateDots(index);
}

function updateDots(index) {
    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
}

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentIndex = index;
        showTestimonial(index);
    });
});

setInterval(() => {
    currentIndex = (currentIndex + 1) % testimonials.length;
    showTestimonial(currentIndex);
}, 5000);

function stopAutoSlide() {
    clearInterval(autoSlideInterval);
}

// Start auto-slide when the page loads
startAutoSlide();

// Add mouseover and mouseout event listeners to the slider
const sliderContainer = document.querySelector('.testimonial-slider');
sliderContainer.addEventListener('mouseover', stopAutoSlide);  
sliderContainer.addEventListener('mouseout', startAutoSlide);  
