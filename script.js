function scrollLeft() {
  const scrollContainer = document.querySelector('.scroll-content');
  scrollContainer.style.transform = 'translateX(-20%)';
}

function scrollRight() {
  const scrollContainer = document.querySelector('.scroll-content');
  scrollContainer.style.transform = 'translateX(20%)';
}
