const textElement = document.getElementById('animatedText');
const descriptionElement = document.getElementById('canvasDescription');
const emailElement = document.getElementById('canvasEmail');
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
    descriptionElement.classList.add('fade-in');
    emailElement.classList.add('fade-in');
    document.getElementById('cursor').classList.add('blinking-cursor');
  }
}

updateText();