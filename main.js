const navLinks = document.querySelector('.nav-links');
const hamburger = document.querySelector('.hamburger');
const closeBtn = document.querySelector('.close');

hamburger.addEventListener('click', () => {
  navLinks.style.display = 'block';
  closeBtn.style.display = 'block';
  hamburger.style.display = 'none';
});

closeBtn.addEventListener('click', () => {
  navLinks.style.display = 'none';
  closeBtn.style.display = 'none';
  hamburger.style.display = 'block';
});
