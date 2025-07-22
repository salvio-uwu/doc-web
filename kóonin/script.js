document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('hamburger');
  const menu = document.getElementById('menu');
  const dropdown = document.querySelector('.dropdown');

  hamburger.addEventListener('click', () => {
    menu.classList.toggle('show');
  });

  // Para submenu en responsive
  dropdown.addEventListener('click', (e) => {
    if (window.innerWidth <= 768) {
      e.preventDefault();
      dropdown.classList.toggle('open');
    }
  });
});
const carousel = new bootstrap.Carousel('#myCarousel')

// Animación de bloque visual introductorio
const introBox = document.getElementById("introBox");
const introObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      introObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

introObserver.observe(introBox);
