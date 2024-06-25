document.addEventListener("DOMContentLoaded", () => {
    const animatedDiv = document.getElementById('projectCardAnimation');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animatedDiv.classList.add('animated', 'fadeInUp', 'animatedFadeInUp');
            } else {
                animatedDiv.classList.remove('animated', 'fadeInUp', 'animatedFadeInUp');
            }
        });
    }, {
        threshold: 0.1 // Adjust the threshold as needed
    });

    observer.observe(animatedDiv);
});