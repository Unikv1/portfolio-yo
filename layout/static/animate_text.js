const textElement = document.getElementById('animatedText');
const experienceElement = document.getElementById('experienceElement');
const experienceElement1 = document.getElementById('experienceElement1');
const experienceElement2 = document.getElementById('experienceElement2');
const projectCardAnimation = document.getElementById('projectCardAnimation');
const textContent = "Hi, I'm Facundo";
const duration = 1500;
const steps = textContent.length;
const stepDuration = duration / steps;

let currentStep = 0;

function updateText() {
  if (currentStep <= steps) {
    textElement.innerHTML = textContent.substring(0, currentStep) + '<span id="cursor">|</span>';
    currentStep++;
    setTimeout(updateText, stepDuration);
  } else {
    // After the typing animation is complete, trigger the fade-in
    experienceElement.classList.add('animated');
    experienceElement.classList.add('animatedFadeInUp');
    experienceElement.classList.add('fadeInUp');
    experienceElement1.classList.add('animated');
    experienceElement1.classList.add('animatedFadeInUp');
    experienceElement1.classList.add('fadeInUp');
    experienceElement2.classList.add('animated');
    experienceElement2.classList.add('animatedFadeInUp');
    experienceElement2.classList.add('fadeInUp');
    document.getElementById('cursor').classList.add('blinking-cursor');
  }
}

updateText();



// Intersection Observer to hide textElement when projectCard is visible
const projectCard = document.getElementById('projectCard');
const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.1 // Adjust the threshold as needed
};

function handleIntersection(entries, observer) {

  entries.forEach(entry => {

    if (entry.isIntersecting || entry.intersectionRect.top <= 950 && !entry.intersectionRect.top == 0) {
      console.log(entry.intersectionRect.top)
      textElement.classList.add('fadeOutUp', 'animatedFadeOutUp');
      
      experienceElement.style.display = 'none';
      experienceElement1.style.display = 'none';
      experienceElement2.style.display = 'none';
    } else if (entry.intersectionRect.top > 950 ) {
      textElement.classList.remove('fadeOutUp', 'animatedFadeOutUp');
      textElement.classList.add('animated', 'fadeInUp', 'animatedFadeInUp');
      experienceElement.style.display = 'block';
      experienceElement1.style.display = 'flex';
      experienceElement2.style.display = 'block';
    }
  });
}

const observer = new IntersectionObserver(handleIntersection, observerOptions);
observer.observe(projectCard);
