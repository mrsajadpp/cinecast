const carousel = document.querySelector('.carousel');
const scrollItems = carousel.querySelectorAll('.scrollone');
const scrollOneWidth = scrollItems[0].offsetWidth;
let currentIndex = 0;
let isScrollingForward = true;
let autoScrollInterval;

function autoScroll() {
    if (isScrollingForward) {
        currentIndex++;
        if (currentIndex >= scrollItems.length) {
            currentIndex = scrollItems.length - 2;
            isScrollingForward = false;
        }
    } else {
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = 1;
            isScrollingForward = true;
        }
    }

    carousel.scrollTo({
        left: currentIndex * scrollOneWidth,
        behavior: 'smooth'
    });
}

function startAutoScroll() {
    autoScrollInterval = setInterval(autoScroll, 6000); // Change images every 3 seconds
}

// Start the auto-scroll when the page loads
startAutoScroll();