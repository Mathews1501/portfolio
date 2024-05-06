document.addEventListener("DOMContentLoaded", function () {
    // Get all the skill bars
    const bars = document.querySelectorAll(".bar");
  
    // Define a function to handle animation reset and restart
    function resetAndRestartAnimation(bar) {
      // Reset the bar width to 0 and restart animation
      bar.style.width = "100%";
      bar.style.animation = "none";
      void bar.offsetWidth; // Trigger reflow to restart animation
      bar.style.animation = "progress-animation 3s ease forwards";
    }
  
    // Iterate over each skill bar
    bars.forEach(bar => {
      // Listen for animation end on each bar
      bar.addEventListener("animationend", () => {
        resetAndRestartAnimation(bar);
      });
    });
  
    // Call the resetAndRestartAnimation function for each bar to start the animation initially
    bars.forEach(bar => {
      resetAndRestartAnimation(bar);
    });
  });

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

  