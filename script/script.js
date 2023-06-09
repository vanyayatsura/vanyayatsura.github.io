

const certificate = document.querySelector('#certificate')


function openFoto() {
  document.querySelector('body').style.overflow = 'hidden'
  certificate.style.opacity = "1"
  certificate.style.width = "100%"
  certificate.style.height = "100%"
}
function closeFoto() {
  document.querySelector('body').style.overflow = 'auto'
  certificate.style.opacity = "0"
  certificate.style.width = "0%"
  certificate.style.height = "0%"
}