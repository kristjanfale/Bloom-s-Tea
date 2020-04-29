const navToggle = document.querySelector('.nav__toggle');
const navLinks = document.querySelectorAll('.nav__link');

// Toggle nav
navToggle.addEventListener('click', () => {
  document.body.classList.toggle('nav-open');
});

// Close nav when 'click' on links
navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    document.body.classList.remove('nav-open');
  });
});
