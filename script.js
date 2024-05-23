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

document.addEventListener("DOMContentLoaded", function() {
  const headings = document.querySelectorAll('.heading');

  setInterval(() => {
    let activeHeading = document.querySelector('.heading.active');
    let nextHeading = activeHeading.nextElementSibling;
    
    if (!nextHeading) {
      nextHeading = headings[0];
    }

    activeHeading.classList.remove('active');
    nextHeading.classList.add('active');
    activeHeading.classList.add('next');

    setTimeout(() => {
      activeHeading.classList.remove('next');
    }, 1000); // transition duration
  }, 5000); // Change heading every 5 seconds (adjust as needed)
});

document.querySelector('.read-more').addEventListener('click',function(){
  const content = document.querySelector('.content');
  const aboutParagraph2 = document.querySelector('.about-paragraph2');
  const readMore = document.querySelector('.read-more');

});
  