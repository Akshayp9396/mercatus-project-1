let currentIndex = 0;

function moveSlider(direction) {
    const slider = document.querySelector('.slider');
    const totalServices = document.querySelectorAll('.slider .service--column').length;
    const servicesToShow = 3; // Number of services to show at once
    const slideWidth = 100 / servicesToShow; // Percentage of the slider width

    currentIndex += direction;

    // Loop the slider index
    if (currentIndex < 0) {
        currentIndex = Math.ceil(totalServices / servicesToShow) - 1; // Go to the last set
    } else if (currentIndex >= Math.ceil(totalServices / servicesToShow)) {
        currentIndex = 0; // Go back to the first set
    }

    // Move the slider
    slider.style.transform = `translateX(-${currentIndex * slideWidth}%)`;
}