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
  