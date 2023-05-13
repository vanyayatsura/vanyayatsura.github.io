document.addEventListener('DOMContentLoaded', () => {

  // змінні для бургер меню
  const iconMenu = document.getElementById('iconMenu');
  const menuBody = document.getElementById('menuBody');

  // змінні для слайдерів
  const teamWrap = document.getElementById("team");
  const testimonialsWrap = document.getElementById("testimonials");

  // Функції для бургер меню
  iconMenu.addEventListener('click', () => {
    menuBody.classList.toggle('show-menu');
    iconMenu.classList.toggle('transform');
  })
  menuBody.addEventListener('click', () => {
    menuBody.classList.toggle('show-menu');
    iconMenu.classList.toggle('transform');
  })

  // функції скрол вверх
  function goTop () {
    document.documentElement.scrollTop = 0;
  }
  
})