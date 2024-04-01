document.addEventListener("DOMContentLoaded", function() {
    const skillBars = document.querySelectorAll('.skill-level');
    
    skillBars.forEach(bar => {
      bar.addEventListener('click', function(event) {
        const skill = event.target.dataset.skill;
        const mouseX = event.clientX - event.target.getBoundingClientRect().left;
        const width = (mouseX / event.target.offsetWidth) * 100;
        
        animateSkillBar(skill, width);
      });
    });
  });
  
  function animateSkillBar(skill, targetWidth) {
    const bar = document.getElementById(skill + "-bar");
    const currentWidth = parseFloat(bar.style.width) || 0;
    
    const animationDuration = 500; // milliseconds
    const animationSteps = 50;
    const stepWidth = (targetWidth - currentWidth) / animationSteps;
    
    let currentStep = 0;
    const interval = setInterval(function() {
      currentStep++;
      if (currentStep >= animationSteps) {
        clearInterval(interval);
      }
      const newWidth = currentWidth + stepWidth * currentStep;
      bar.style.width = newWidth + "%";
    }, animationDuration / animationSteps);
  }
  