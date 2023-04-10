let iconMenu = document.getElementById('iconMenu')

let iconOpen = document.getElementById('iconOpen')
let iconClose = document.getElementById('iconClose')

iconMenu.addEventListener('click', () => {
  iconOpen.classList.toggle('hide')
  iconClose.classList.toggle('hide')
  showMenu.classList.toggle('show-menu')
})