
//função carousel

// const carouselContainer = document.querySelector('.carousel-container');
const slides = document.querySelectorAll('.carousel-slide');
// const prevButton = document.getElementById('prevButton');
// const nextButton = document.getElementById('nextButton');
let currentIndex = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        if (i === index) {
            // slide.style.display = 'block';
            slide.classList.add('ativo');
            slide.classList.remove('inativo');
        } else {
            // slide.style.display = 'none';
            slide.classList.remove('ativo');
            slide.classList.add('inativo');
        }
    });
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
}

// prevButton.addEventListener('click', prevSlide);
// nextButton.addEventListener('click', nextSlide);
document.getElementById('prevButton').addEventListener('click', prevSlide);
document.getElementById('nextButton').addEventListener('click', nextSlide);

//troca automatica de imagem no carousel
setInterval(nextSlide, 5000);

showSlide(currentIndex);
