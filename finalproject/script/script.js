document.addEventListener('DOMContentLoaded', () => {
  // підключення json

  async function populate() {
    const requestURL = 'https://vanyayatsura.github.io/jsonforprogect/myjson.json'
    const request = new Request(requestURL)
  
    const response = await fetch(request)
    const infoSlider = await response.json()

    addTeam(infoSlider)
    addTestimonials(infoSlider)
   }
   
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
  const goTopBtn = document.querySelector("#goToTop") 
  goTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0
    })
  })
  // add content for team
  function addTeam(obj) {
    const teamConteiner = document.querySelector('.team__slider-conteiner')
    const swiperWrap = document.createElement('div')
    swiperWrap.classList.add('swiper-wrapper')
    teamConteiner.appendChild(swiperWrap)

    const myTeam = obj.team

    for(const team of myTeam) {
      const teamSlide = document.createElement('div')
      teamSlide.classList.add('team__card', 'swiper-slide')
      const teamFoto = document.createElement('div')
      teamFoto.classList.add('team__img')
      const hoverGradient = document.createElement('div')
      hoverGradient.classList.add('hover-gradient')
      const teamLinc = document.createElement('div')
      teamLinc.classList.add('team__link')
      const teamName = document.createElement('h3')
      teamName.classList.add('team__name')
      const teamPosition = document.createElement('div')
      teamPosition.classList.add('team__position')

      teamFoto.innerHTML = `<img src="img/main/${team.teamFoto}" alt="Foto">`
      teamLinc.innerHTML = `<a href="${team.social.faceboock}">
                    <img src="img/icon/facebook.svg" alt="facebook">
                  </a>
                  <a href="${team.social.instagram}">
                    <img src="img/icon/instagram.svg" alt="instagram">
                  </a>
                  <a href="${team.social.linkedIn}">
                    <img src="img/icon/linked.svg" alt="linked">
                  </a>`
      teamName.textContent = team.teamName
      teamPosition.textContent = team.position

      teamSlide.appendChild(teamFoto)
      teamFoto.appendChild(hoverGradient)
      teamFoto.appendChild(teamLinc)
      teamSlide.appendChild(teamName)
      teamSlide.appendChild(teamPosition)

      swiperWrap.appendChild(teamSlide)
    }
    teamConteiner.innerHTML += `<div class="next"><svg width="18" height="12" viewbox="0 0 18 12" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M6.20711 11.2071C5.81658 11.5976 5.18342 11.5976 4.79289 11.2071L0.292892 6.70711C-0.0976315 6.31658 -0.0976315 5.68342 0.292892 5.29289L4.79289 0.792893C5.18342 0.402369 5.81658 0.402369 6.20711 0.792893C6.59763 1.18342 6.59763 1.81658 6.20711 2.20711L3.41421 5L17 5C17.5523 5 18 5.44772 18 6C18 6.55228 17.5523 7 17 7L3.41421 7L6.20711 9.79289C6.59763 10.1834 6.59763 10.8166 6.20711 11.2071Z"/>
    </svg></div>
  <div class="prev"><svg width="18" height="12" viewbox="0 0 18 12" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M6.20711 11.2071C5.81658 11.5976 5.18342 11.5976 4.79289 11.2071L0.292892 6.70711C-0.0976315 6.31658 -0.0976315 5.68342 0.292892 5.29289L4.79289 0.792893C5.18342 0.402369 5.81658 0.402369 6.20711 0.792893C6.59763 1.18342 6.59763 1.81658 6.20711 2.20711L3.41421 5L17 5C17.5523 5 18 5.44772 18 6C18 6.55228 17.5523 7 17 7L3.41421 7L6.20711 9.79289C6.59763 10.1834 6.59763 10.8166 6.20711 11.2071Z"/>
    </svg></div>`
    // team slider
    const mySwiper = new Swiper('.team__slider-conteiner', {
      direction: 'horizontal',
      loop: true,
      navigation: {
        nextEl: '.next',
        prevEl: '.prev',
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 20
        },
        480: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 30
        }
      }
    });
  }

  // add content for testimonials
  function addTestimonials(obj) {
    const arrow = `<svg width="18" height="12" viewbox="0 0 18 12" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M6.20711 11.2071C5.81658 11.5976 5.18342 11.5976 4.79289 11.2071L0.292892 6.70711C-0.0976315 6.31658 -0.0976315 5.68342 0.292892 5.29289L4.79289 0.792893C5.18342 0.402369 5.81658 0.402369 6.20711 0.792893C6.59763 1.18342 6.59763 1.81658 6.20711 2.20711L3.41421 5L17 5C17.5523 5 18 5.44772 18 6C18 6.55228 17.5523 7 17 7L3.41421 7L6.20711 9.79289C6.59763 10.1834 6.59763 10.8166 6.20711 11.2071Z"/>
      </svg>`

    const testimonialsContainer = document.querySelector('.testimonials__slider-container')
    const swiperWrap = document.createElement('div')
    swiperWrap.classList.add('swiper-wrapper')
    const slideLine = document.createElement('div')
    slideLine.classList.add('slede__lins')
    const slidePrev = document.createElement('div')
    slidePrev.classList.add('testimonials-prev')
    const slideNext = document.createElement('div')
    slideNext.classList.add('testimonials-next')


    const myTestimonials = obj.comments

    for(const comments of myTestimonials) {
      const commentSlide = document.createElement('div')
      commentSlide.classList.add('testimonials__slide', 'swiper-slide')
      const braces = document.createElement('div')
      braces.classList.add('braces')
      const someComment = document.createElement('div')
      someComment.classList.add('testimonials__testimonial')
      const comment = document.createElement('p')
      comment.classList.add('testimonial')
      const user = document.createElement('div')
      user.classList.add('testimonial__user')
      const userFoto = document.createElement('div')
      userFoto.classList.add('testimonial__user-foto')
      const namePosition = document.createElement('div')
      namePosition.classList.add('testimonial__name-position')
      const userName = document.createElement('h3')
      userName.classList.add('testimonial__name')
      const userPosition = document.createElement('div')
      userPosition.classList.add('testimonial__position')

      braces.innerHTML = `<img src="img/main/braces.png" alt="braces">`
      comment.textContent = comments.comment
      userFoto.innerHTML = `<img src="img/main/${comments.userFoto}" alt="user foto">`
      userName.textContent = comments.userName
      userPosition.textContent = comments.position

      commentSlide.appendChild(braces)
      commentSlide.appendChild(someComment)
      someComment.appendChild(comment)
      someComment.appendChild(user)
      user.appendChild(userFoto)
      user.appendChild(namePosition)
      namePosition.appendChild(userName)
      namePosition.appendChild(userPosition)
      swiperWrap.appendChild(commentSlide)
    }
    slidePrev.innerHTML = arrow
    slideNext.innerHTML = arrow
    testimonialsContainer.appendChild(swiperWrap)
    testimonialsContainer.appendChild(slideLine)
    testimonialsContainer.appendChild(slidePrev)
    testimonialsContainer.appendChild(slideNext)
  
    // testimonials slider
    const testimonialsSlider = new Swiper('.testimonials__slider-container', {
      direction: 'horizontal',
      loop: true,
      slidesPerView: 1,
      spaceBetween: 40,
  
      pagination: {
        el: '.slede__lins',
        clickable: false,
      },
      navigation: {
        nextEl: '.testimonials-next',
        prevEl: '.testimonials-prev',
      },
      breakpoints: {
        320: {
          spaceBetween: 40
        },
        720: {
          spaceBetween: 60
        },
        1024: {
          spaceBetween: 105
        }
      }
    });
  }

  populate()

})
