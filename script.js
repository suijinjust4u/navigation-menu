// script.js

window.addEventListener('scroll', function() {
  const navbar = document.getElementById('navbar');
  const sections = document.querySelectorAll('section');
  
  // Add or remove the "scrolled" class based on scroll position
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }

  // Fade in sections when they enter the viewport
  sections.forEach(section => {
    const sectionPosition = section.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (sectionPosition < windowHeight - 100) {
      section.style.animation = 'fadeInSection 1s forwards';
    }
  });
});
