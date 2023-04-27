let hello = document.getElementById('hello');
let age = document.getElementById('age');

let userName = prompt('Як тебе звати?');
let userAge = prompt('Скільки тобі років?');

let userAlter5 = Number(userAge) + 5;

document.getElementById('hello').textContent = 'Привіт ' + userName;
document.getElementById('age').textContent = 'Тобі буде ' + userAlter5 + ' ,через 5 років';
