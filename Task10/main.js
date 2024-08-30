// - Створити довільний елемент з id = text та створити кнопку.
//     Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку
// зникав елемент з id="text".


// let buttons = document.getElementsByTagName('button');
// let button = buttons[0];
//
//
// console.log(button);
// button.onclick = function (){
//     document.getElementById('text').style.display = 'none';
// };

// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні
// на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити
// про це користувача
// let forms = document.forms;
//
// let form = forms[0];
// console.log(form);
// let input = form.age;
//
// let button = document.getElementsByClassName('btn')[0];
//
// let massage = document.getElementsByTagName('h2')[0];
// console.log(massage);
// form.addEventListener('submit', function (evenObject){
//     evenObject.preventDefault()
// })
//
// button.onclick = function (){
//     if (input.value < 18){
//         massage.style.display = 'block';
//     }
//     }


// Стоврити форму з трьома полями для name,sruname,age та кнопкою. При натисканні на кнопку зчитати данні з полів,
//     та вивести об'єкт в документ. Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом

// const formUser = document.forms.formUser;
// let target = document.getElementById('target');
// formUser.addEventListener('submit', function (e) {
//     e.preventDefault();
//     let nameValue = formUser.name.value;
//     let surnameValue = formUser.surname.value;
//     let ageValue = +formUser.age.value;
//     let button = document.getElementsByTagName('button')[0];
//     let obg = {nameValue, surnameValue, ageValue};
//     console.log(obg);
//     target.innerText = obg.nameValue + ' ' + obg.surnameValue + ' ' + obg.ageValue;
//
// })
//
//
// є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки буде додавати до неї +1

let numberDiv = document.getElementById('number');
let numbInDiv = document.getElementsByTagName('p')[0];

// let currantNumber = +localStorage.getItem('number');
// currantNumber += 1;
// localStorage.setItem('number', currantNumber);
// numbInDiv.innerText = currantNumber;

// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще, в масив sessionsList зберігається інформація
// про дату та час відвідування сторінки. Є  сторінка sessionsListPage.html (назва довільна), при відвідуванні якої потрібно відмалювати
// всю інформацію про відвідування сторінки index.html. Інфу НЕ виводити в консоль, а малювати в DOM

// створити конвертор ваги з кг в фунти. данні заповнюються через інпут. При введенні
// даних обрахунок стається миттєво, без натискань додаткових кнопок

let form = document.forms[0];
console.log(form);
let input = form.number;
console.log(input);


let resDiv = document.getElementById('result');
input.oninput = function() {
    const kilos = +this.value;
    let resalt = kilos*2.2;
    resDiv.innerText = resalt;

}

// В localStorage зберігаються масиви. Вам потрібно зробити функцію, які дістає
// потрібний вам масив з localStorage та додає в нього об'єкт
// сигнатура функції -
// addToLocalStorage(arrayName:string,objToAdd:any{}):void

// function addToLocalStorage (arrayName,objToAdd){
//     const lsItem = localStorage.getItem(arrayName);
//     if (!lsItem){
//         throw new Error ('there is no such array')
//     }
//     const array = JSON.parse(lsItem);
//     if (typeof objToAdd === 'object'){
//         array.push(objToAdd);
//     }
//     const jsonArray = JSON.stringify(array);
//     localStorage.setItem(arrayName, jsonArray);
// }
// addToLocalStorage('sessionsList', {})

// Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк,
//     третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з
// відповідним вмістом.

let enterForm = document.forms['enter'];

let tbl = document.getElementById('table');
let stringValue = +tbl.string.value;
let cellValue = +tbl.cell.value;
let infoValue = tbl.info.value;



