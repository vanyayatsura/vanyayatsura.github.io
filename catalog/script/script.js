// змінні
let availability;
let addStiker;
let addDiscount = '';
// обєкти
let math = {
  name: 'Математика',
  foto: 'img/math.png',
  title: 'котосови',
  price: 550 + ' грн',
  residual: 0,
  stiker: 'new',
  discount: null
};
let gift = {
  name: 'подарунок',
  foto: 'img/g1.png',
  title: 'набір розумника',
  price: 190 + ' грн',
  residual: 1,
  stiker: null,
  discount: 'discount'
};
let score = {
  name: 'усний рахунок',
  foto: 'img/turbo.png',
  title: 'турборахунок',
  price: 320 + ' грн',
  residual: 1,
  stiker: 'hit',
  discount: null
};
let letters = {
  name: 'букви та читання',
  foto: 'img/zb.png',
  title: 'тваринобукви',
  price: 450 + ' грн',
  residual: 1,
  stiker: 'hit',
  discount: null
};
// масиви
let category = [math, gift, score, letters];
// функції

function addEL (content){
  let wrap = document.getElementById('wrapper');
  wrap.innerHTML = wrap.innerHTML + content;
}
function addContent(category){
let content =' <div class="card ' + addStiker + 'd-flex">' + 
'<div class="card__category uppercase">' + 
category.name + 
'</div>' + 
'<div class="card__img">' + 
'<img src=" ' + category.foto + ' " alt=""></div>' + 
'<div class="card__title uppercase">' + 
category.title + 
'</div>' + 
'<div class="card__price ' + addDiscount + ' uppercase">' + category.price + '</div>' + 
'<div class="card__btn uppercase d-flex'  + availability + '</div>'
'</div>';
addEL(content);
}
function availabilityValidation(i){
  if (category[i].residual === 0){
    availability = ' no-stock">незабаром у продажі';
    category[i].price = '';
  } else {
    availability =' stock">у корзину';
  }
  if (category[i].stiker === null){
    addStiker = ''
  } else if(category[i].stiker === 'new') {
    addStiker = ' stiker stiker__new '
  }
  else {
    addStiker = ' stiker stiker__hit '
  }
  if (category[i].discount !== null) {
    addDiscount = ' discount '
  } else {
    addDiscount = ''
  }
  };
//code
for (let i = 0 ; i < 4; i++) {
  availabilityValidation(i);
  addContent(category[i]);
}
