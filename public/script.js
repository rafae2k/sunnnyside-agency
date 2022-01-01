const menuIcon = document.querySelector('.menu-icon');

menuIcon.addEventListener('click', () => {
  const menu = document.querySelector('#menu');
  menu.classList.toggle('show');
});
