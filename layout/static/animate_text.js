const textElement = document.getElementById('animatedText');
const experienceElement = document.getElementById('experienceElement');
const experienceElement1 = document.getElementById('experienceElement1');
const experienceElement2 = document.getElementById('experienceElement2');
const projectCardAnimation = document.getElementById('projectCardAnimation');
const textContent = "Hi, I'm Facundo";
const duration = 1500;
const steps = textContent.length;
const stepDuration = duration / steps;

const elements = [textElement, experienceElement, experienceElement1, experienceElement2];

let currentStep = 0;

function updateText() {
  if (currentStep <= steps) {
    textElement.innerHTML = textContent.substring(0, currentStep) + '<span id="cursor">|</span>';
    currentStep++;
    setTimeout(updateText, stepDuration);
  } else {
    // After the typing animation is complete, trigger the fade-in
    experienceElement.classList.add('animated', 'animatedFadeInUp', 'fadeInUp');
    experienceElement1.classList.add('animated', 'animatedFadeInUp', 'fadeInUp');
    experienceElement2.classList.add('animated', 'animatedFadeInUp', 'fadeInUp');
    document.getElementById('cursor').classList.add('blinking-cursor');
  }
}

updateText();


document.addEventListener('DOMContentLoaded', () => {
  function addFadeInClasses() {
      elements.forEach(element => {
          element.classList.add('animated', 'animatedFadeInUp', 'fadeInUp');
          element.classList.remove('animatedFadeOutUp', 'fadeOutUp');
      });
  }

  function addFadeOutClasses() {
      elements.forEach(element => {
          element.classList.add('animated', 'animatedFadeOutUp', 'fadeOutUp');
          element.classList.remove('animatedFadeInUp', 'fadeInUp');
      });
  }

  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        console.log(entry.isIntersecting);
          if (entry.isIntersecting) {
              addFadeInClasses();
          } else {
              addFadeOutClasses();
          }
      });
  });

  observer.observe(start);
});
