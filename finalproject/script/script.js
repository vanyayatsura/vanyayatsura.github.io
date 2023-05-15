document.addEventListener('DOMContentLoaded', () => {
  // підключення json

  async function populate() {
    const requestURL = 'https://vanyayatsura.github.io/jsonforprogect/myjson.json'
    const request = new Request(requestURL)
  
    const response = await fetch(request)
    const infoSlider = await response.json()
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
  function goTop () {
    document.documentElement.scrollTop = 0;
  }
  // team slider
  // const mySwiper = new Swiper('.team__slider-conteiner', {
  //   direction: 'horizontal',
  //   loop: true,
  //   navigation: {
  //     nextEl: '.next',
  //     prevEl: '.prev',
  //   },
  //   breakpoints: {
  //     320: {
  //       slidesPerView: 1,
  //       spaceBetween: 20
  //     },
  //     480: {
  //       slidesPerView: 1,
  //       spaceBetween: 10,
  //     },
  //     640: {
  //       slidesPerView: 2,
  //       spaceBetween: 20
  //     },
  //     1024: {
  //       slidesPerView: 4,
  //       spaceBetween: 30
  //     }
  //   }
  // });
  // testimonials slider
  const testimonialsSlider = new Swiper('.testimonials__slider-container', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    spaceBetween: 40,

    pagination: {
      el: '.slede__lins',
      clickable: true,
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

  // add content for team

  populate()
})
/* <div class="swiper-wrapper">
              <div class="team__card swiper-slide">
              <div class="team__img">
                <img src="img/main/team-foto-1.png" alt="Foto">
                <div class="hover-gradient"></div>
                <div class="team__link">
                  <a href="#">
                    <img src="img/icon/facebook.svg" alt="facebook">
                  </a>
                  <a href="#">
                    <img src="img/icon/instagram.svg" alt="instagram">
                  </a>
                  <a href="#">
                    <img src="img/icon/linked.svg" alt="linked">
                  </a>
                </div>
              </div>
              <h3 class="team__name">Dianne Russell</h3>
              <div class="team__position">Founder and CEO</div>
              </div>
              <div class="team__card swiper-slide">
              <div class="team__img">
                <img src="img/main/team-foto-2.png" alt="Foto">
                <div class="hover-gradient"></div>
                <div class="team__link">
                  <a href="#">
                    <img src="img/icon/facebook.svg" alt="facebook">
                  </a>
                  <a href="#">
                    <img src="img/icon/instagram.svg" alt="instagram">
                  </a>
                  <a href="#">
                    <img src="img/icon/linked.svg" alt="linked">
                  </a>
                </div>
              </div>
              <h3 class="team__name">Dianne Russell</h3>
             <div class="team__position">Founder and CEO</div>
              </div>
              <div class="team__card swiper-slide">
              <div class="team__img">
                <img src="img/main/team-foto-3.png" alt="Foto">
                <div class="hover-gradient"></div>
                <div class="team__link">
                  <a href="#">
                    <img src="img/icon/facebook.svg" alt="facebook">
                  </a>
                  <a href="#">
                    <img src="img/icon/instagram.svg" alt="instagram">
                  </a>
                  <a href="#">
                    <img src="img/icon/linked.svg" alt="linked">
                  </a>
                </div>
              </div>
              <h3 class="team__name">Dianne Russell</h3>
              <div class="team__position">Founder and CEO</div>
              </div>
              <div class="team__card swiper-slide">
              <div class="team__img">
                <img src="img/main/team-foto-4.png" alt="Foto">
                <div class="hover-gradient"></div>
                <div class="team__link">
                  <a href="#">
                    <img src="img/icon/facebook.svg" alt="facebook">
                  </a>
                  <a href="#">
                    <img src="img/icon/instagram.svg" alt="instagram">
                  </a>
                  <a href="#">
                    <img src="img/icon/linked.svg" alt="linked">
                  </a>
                </div>
              </div>
              <h3 class="team__name">Dianne Russell</h3>
              <div class="team__position">Founder and CEO</div>
              </div>
            </div> */