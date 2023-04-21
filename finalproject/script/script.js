let iconMenu = document.getElementById('iconMenu')

let menuBody = document.getElementById('menuBody')

iconMenu.addEventListener('click', () => {
  menuBody.classList.toggle('show-menu')
  iconMenu.classList.toggle('transform')
})

menuBody.addEventListener('click', () => {
  menuBody.classList.toggle('show-menu')
  iconMenu.classList.toggle('transform')
})