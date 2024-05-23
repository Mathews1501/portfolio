  //js for my scroll up button
document.addEventListener("DOMContentLoaded", function() {
  var scrollUpButton = document.getElementById('scrollUpBtn');

  window.addEventListener('scroll', function() {
    if (window.scrollY > 300) {
      scrollUpButton.style.display = 'block';
    } else {
      scrollUpButton.style.display = 'none';
    }
  });

  scrollUpButton.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
});

