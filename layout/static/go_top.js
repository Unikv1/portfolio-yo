function appear() {
    var topButton = document.getElementById("top_button");
    if (document.documentElement.scrollTop > 300) {
      topButton.classList.add('show');
    } else {
      topButton.classList.remove('show');
    }
  }
  
  function goToTop() {
    document.documentElement.scrollTop = 0;
  }
  
  document.addEventListener("scroll", appear);
  document.getElementById("top_button").addEventListener("click", goToTop);
