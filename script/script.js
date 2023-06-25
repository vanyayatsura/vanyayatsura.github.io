

const certificate = document.querySelector('#certificate')
const showReviews = document.querySelector('#showReviews')


function openFoto() {
  document.querySelector('body').style.overflow = 'hidden'
  
  certificate.style.display = 'flex'
  setTimeout(() => {
    certificate.style.opacity = "1"
    certificate.style.width = "100%"
    certificate.style.height = "100%"
  }, 200)
  
}
function closeFoto() {
  document.querySelector('body').style.overflow = 'auto'
  certificate.style.opacity = "0"
  certificate.style.width = "0%"
  certificate.style.height = "0%"
  setTimeout(() => {
    certificate.style.display = 'none'
  }, 200)
}

function openReviews() {
  document.querySelector('body').style.overflow = 'hidden'
  showReviews.style.display = 'flex'
  setTimeout(() => {
    showReviews.style.opacity = "1"
    showReviews.style.width = "100%"
    showReviews.style.height = "100%"
  }, 200)
}

function closeReviews() {
  document.querySelector('body').style.overflow = 'auto'
  showReviews.style.opacity = "0"
  showReviews.style.width = "0%"
  showReviews.style.height = "0%"
  setTimeout(() => {
    showReviews.style.display = 'none'
  }, 200)
}