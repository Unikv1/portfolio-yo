const scrollableDiv = document.getElementById('image_buttons');
const scrollableDiv_2 = document.getElementById('image_buttons_2');

let scrollingInterval;

scrollableDiv.addEventListener('mouseover', (e) => {

    const { left, right, width } = scrollableDiv.getBoundingClientRect();
    console.log (left, right, width);
    const mouseX = e.clientX;
    if (mouseX < left + width*0.4) { // Mouse near the left edge
        clearInterval(scrollingInterval);
        scrollingInterval = setInterval(() => {
            scrollableDiv.scrollLeft -= 4;
            console.log('mouseover');
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

scrollableDiv_2.addEventListener('mouseover', (e) => {

    const { left, right, width } = scrollableDiv_2.getBoundingClientRect();
    console.log (left, right, width);
    const mouseX = e.clientX;
    if (mouseX < left + width*0.4) { // Mouse near the left edge
        clearInterval(scrollingInterval);
        scrollingInterval = setInterval(() => {
            scrollableDiv_2.scrollLeft -= 4;
            console.log('mouseover');
        }, 10);
    } else if (mouseX > right - width*0.4) { // Mouse near the right edge
        clearInterval(scrollingInterval);
        scrollingInterval = setInterval(() => {
            scrollableDiv_2.scrollLeft += 5;
        }, 10);
    } else {
        clearInterval(scrollingInterval);
    }
});

scrollableDiv_2.addEventListener('mouseleave', () => {
    clearInterval(scrollingInterval);
}); 