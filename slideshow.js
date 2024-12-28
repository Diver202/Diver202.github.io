const slideshowInner = document.querySelector('.slideshow-inner');
        const slides = document.querySelectorAll('.slide');
        const totalSlides = slides.length;
        let currentSlide = 0;

        function showNextSlide() {
            currentSlide = (currentSlide + 1) % totalSlides;
            slideshowInner.style.transform = `translateX(-${currentSlide * 100}%)`;
        }

        setInterval(showNextSlide, 5000); // Change slide every 5 seconds