//1 - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function sguare(a,b){
    if (a>0 && b>0){
        return a*b;
    } else {
        return 0;
    }
}
let result = sguare(21,35);
console.log(result);

//2 - створити функцію яка обчислює та повертає площу кола з радіусом r
function circleS (r){
    if (r>0){
        return 3.14 * r * r;
    } else {
        return 0;
    }
}
let result2 = circleS(10);
console.log(result2);

//3 - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

function cylinderS (r, h){
    if (r>0 && h>0){
        return 2 * 3.14 * r * (h+r);
    } else {
        return 0;
    }
}
let recult3 = cylinderS(2,10);
console.log(recult3);

//4 - створити функцію яка приймає масив та виводить кожен його елемент
function arrayPrinter (arr){
    for (const arrElement of arr){
        console.log(arrElement)
    }
}
arrayPrinter(['petya', 'olya', 454]);
arrayPrinter([12,456, 'saha']);

let ArrA = ['bol', 'boy', 'day'];
arrayPrinter(ArrA);

//5 -створити функцію яка створює параграф з текстом та виводить його через document.write.
//     Текст задати через аргумент
function printToDocument (msg){
    document.write(`<p>${msg}</p>`);
}
printToDocument ('cool');

//6 - створити функцію яка створює ul з трьома елементами li та виводить його через document.write.
//     Текст li задати через аргумент всім однаковий

function printToDocumentList (msg){
    document.write(`<ul>
                        <li>${msg}</li>
                        <li>${msg}</li>
                        <li>${msg}</li>
                    </ul>`);
}
printToDocumentList('ura');

// -7 створити функцію яка створює ul з  елементами li. Текст li задати через аргумент всім однаковий.
//     Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// та виводить його через document.write

function printListToDocument (text, xNam){
   document.write(`<ul>`)
    for (let i = 0; i < xNam; i++){
        document.write(`<li>${text}</li>`);
    }
    document.write(`</ul>`);
}
printListToDocument('super', 10)

//8 - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві),
//     та будує для них список (ul li) та виводить його через document.write


function arrayCool (arr) {
   document.write(`<ul>`);
    for (const arrElement of arr) {
        document.write(`<li>${arrElement}</li>`);
    }
    document.write(`</ul>`);
}
arrayCool([123, 'yjkldl', true]);

//9 - створити функцію яка приймає масив об'єктів з наступними полями id,name,age ,' +
// ' та виводить їх в документ. Для кожного об'єкту окремий блок.

let arrayObj = [
    {id:1, name: 'olya', age: 30},
    {id:2, name: 'kolya', age: 39},
    {id:3, name: 'volya', age: 29},
    {id:4, name: 'solo', age: 40},
    {id:5, name: 'vova', age: 15},
    {id:6, name: 'ignat', age: 17},
    {id:7, name: 'nazar', age: 39}
]


function arrayAdd (arr){
    for (const item of arr){
        document.write(`<div class="object">${item.id} ${item.name} ${item.age}</div>`);
    }
}
arrayAdd(arrayObj);

//10 - створити функцію яка повертає найменьше число з масиву

let NAM = [10,4,5,6,9,100,4];

function minValue (arrayValue){
    let min = arrayValue[0];
    for (let i = 1; i < arrayValue.length; i++){
        let Value = arrayValue[i];
        if (Value < min){
            min = Value;
        }
    }
    return min;
}

console.log(minValue(NAM));

//11 - створити функцію sum(arr) яка приймає масив чисел, сумує значення елементів масиву та
// повертає його. Приклад sum([1,2,10]) //->13
function sum (arr){
    let basket = 0;
    for (const number of arr) {
        basket = basket + number;
    }
    return basket;
}























console.log(sum([1, 2, 10]));

//12 - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відповідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
function  swar(arr,index1,index2){
    if (index1 < arr.length && index2 < arr.length){
        let temp = arr[index1];
        arr[index1] = arr[index2];
        arr[index2] = temp;
        return arr;
    }
    return -Infinity;
}

console.log(swar([11, 22, 33, 44], 5, 3));

// #mkGDenYnNjn
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'USD') // => 400
function exchange(sumUAH,currencyValues,exchangeCurrency){
    let chosenCurrency;
    for (const item of currencyValues){
        if (item.currency === exchangeCurrency){
            chosenCurrency = item;
        }
    }
    let result = sumUAH/chosenCurrency.value;
    return result;
}

console.log(exchange(1000, [{currency: 'USD', value: 25}, {currency: 'EUR', value: 42}], 'USD'));




