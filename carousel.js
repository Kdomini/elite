document.addEventListener('DOMContentLoaded', () => {
    const carouselContainers = document.querySelectorAll('.carousel-container');

    carouselContainers.forEach(container => {
        const carouselImages = container.querySelector('.carousel-images');
        const images = carouselImages.querySelectorAll('img');
        const prevBtn = container.querySelector('.prev-btn');
        const nextBtn = container.querySelector('.next-btn');
        let currentIndex = 0;

        const showImage = (index) => {
            if (images.length === 0) return;

            if (index >= images.length) {
                currentIndex = 0;
            } else if (index < 0) {
                currentIndex = images.length - 1;
            } else {
                currentIndex = index;
            }
            carouselImages.style.transform = `translateX(${-currentIndex * (100 / images.length)}%)`;
        };

        nextBtn.addEventListener('click', () => {
            showImage(currentIndex + 1);
        });

        prevBtn.addEventListener('click', () => {
            showImage(currentIndex - 1);
        });

        showImage(0);

        
    });
});
