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

// const teamSliderConteiner = document.getElementById('teamSliderConteiner');
// const slide = document.getElementsByClassName('team__card')
// const translate = '285px'

// function plusSlerds(n){
//   for (let i = 0; i < slide.length; i++) {
//     slide[i].style = `transform: translate(-${translate});`
//   }
// }


function goTop () {
  document.documentElement.scrollTop = 0
}