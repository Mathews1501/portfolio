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

// sidebar menu js

function showSidebar(){
  const sidebar = document.querySelector('.sidebar')
  sidebar.style.display = 'flex'
}

function hideSidebar(){
  const sidebar = document.querySelector('.sidebar')
  sidebar.style.display = 'none'
}