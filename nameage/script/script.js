let hello = document.getElementById ('hello');
let age = document.getElementById ('age');
let modal = document.getElementById ('modal');
let form = document.getElementById ('form');
let borderName = document.getElementById ('userName');
let borderAge = document.getElementById ('userAge');
let userName = document.getElementById ('userName');
let userAge = document.getElementById ('userAge');
let btn = document.getElementById ('btn');

btn.addEventListener('click', () => {
  let userNameValue = (userName.value)
  let userAgeValue = Number(userAge.value)

  let valueName
  let valueAge

  if (userNameValue.length < 2) {
    borderName = borderName.style.border = "4px solid red"
    alert ("Ім'я має містити не менше 2 букв");
    valueName = (false);
    console.log(userName)
  }
    else{
    valueName = (true);
  }

  if (Number.isInteger(userAgeValue)){
    valueAge = (true);
    }
    else{
      borderAge = borderAge.style.border = "4px solid red"
      alert ("Вік повинен бути цілим числом");
      valueAge = (false);
    }
    if (valueName === true && valueAge === true){
    modal = (modal.style.top = "-500px");
    hello.textContent = ('Привіт ' + userNameValue);
    if ((userAgeValue + 5) >= 60){
      alert ('Пора на пенцію');
      age.textContent = ('тобі буде ' + (userAgeValue + 5) +' через 5 років');
    }
      else{
        age.textContent = ('тобі буде ' + (userAgeValue + 5) +' через 5 років');
      }
  }
})
