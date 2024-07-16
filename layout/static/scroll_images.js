const scrollableDiv = document.getElementById('image_buttons');

let scrollingInterval;

scrollableDiv.addEventListener('mouseover', (e) => {
    const { left, right, width } = scrollableDiv.getBoundingClientRect();
    const mouseX = e.clientX;
    if (mouseX < left + width*0.4) { // Mouse near the left edge
        clearInterval(scrollingInterval);
        scrollingInterval = setInterval(() => {
            scrollableDiv.scrollLeft -= 4;
        }, 10);
    } else if (mouseX > right - width*0.4) { // Mouse near the right edge
        clearInterval(scrollingInterval);
        scrollingInterval = setInterval(() => {
            scrollableDiv.scrollLeft += 5;
        }, 10);
    } else {
        clearInterval(scrollingInterval);
    }
});

scrollableDiv.addEventListener('mouseleave', () => {
    clearInterval(scrollingInterval);
}); 