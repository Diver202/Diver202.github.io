const slides = document.querySelectorAll('.slide');
        let currentSlide = 0;

        function showNextSlide() {
            const previousSlide = slides[currentSlide];
            previousSlide.classList.remove('active');
            previousSlide.classList.add('previous');

            currentSlide = (currentSlide + 1) % slides.length;

            const nextSlide = slides[currentSlide];
            nextSlide.classList.remove('previous');
            nextSlide.classList.add('active');
        }

        setInterval(showNextSlide, 5000); // Change slide every 5 seconds