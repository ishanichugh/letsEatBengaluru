const images = [
    'images/header-first-image.png',
    'images/header-second-image.jpg',
    'images/header-third-image.jpg',
];

let currentIndex = 0;

function changeImage() {
    const slideshow = document.querySelector('.header-slideshow');
    currentIndex = (currentIndex + 1) % images.length;
    slideshow.style.backgroundImage = `url(${images[currentIndex]})`;
}

setInterval(changeImage, 5000);

document.addEventListener('DOMContentLoaded', () => {
    const slideshow = document.createElement('div');
    slideshow.classList.add('header-slideshow');
    slideshow.style.backgroundImage = `url(${images[currentIndex]})`;
    document.querySelector('header').prepend(slideshow);
});
