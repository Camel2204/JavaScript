function printerToDoc (){
    document.write('privet-privet')
}

const printerDoc = function () {
    document.write('privet moy svet v obed')
}

printerDoc()
printerToDoc()


function asdd() {
    console.log('ashfdhgsafdh');
}
asdd();

const greeting = function () {
    console.log('hi!');
};
greeting()

function calculator1 (a,b){
    return a+b;
}
console.log(calculator1(12,10));

const calculator2 = function (a,b){
    return a+b;
}
console.log(calculator2(1, 12));

const calculator3 = (a,b) => a+b;
document.write(calculator3(12,12));
console.log(calculator3(31, 1));

//1 - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function sguare(a,b){
    if (a>0 && b>0){
        return a*b;
    } else {
        return 0;
    }
}
const square1 = (a, b) => a*b;
console.log(square1(2, -3));

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

const circle1 = (r) =>{
    if (r>0){
        return 3.14 * r * r;
    } else {
        return 0;
    }
}
console.log(circle1(-2));

//3 - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

function cylinderS (r, h){
    if (r>0 && h>0){
        return 2 * 3.14 * r * (h+r);
    } else {
        return 0;
    }
}
console.log(cylinderS(3, 4));

let cylinder1 = (r, h) => 2 * 3.14 * r * (h+r);
console.log(cylinder1(3, 15));
let result1 = cylinder1(3,12);
console.log(result1)

//4 - створити функцію яка приймає масив та виводить кожен його елемент
function arrayPrinter (arr){
    for (const arrElement of arr){
        console.log(arrElement)
    }
}
let arrnew = ['petya', 'olya', 454];
arrayPrinter([12,456, 'saha']);

let ArrA = ['bol', 'boy', 'day'];
arrayPrinter(ArrA);

const arrayPrinter1 = (arr) =>{
    for (const item of arr){
        console.log(item);
    }
}
arrayPrinter1(arrnew)

//5 -створити функцію яка створює параграф з текстом та виводить його через document.write.
//     Текст задати через аргумент
function printToDocument (msg){
    document.write(`<p>${msg}</p>`);
}
printToDocument ('cool');

let printToDoc = (msg) => document.write(`<p>${msg}</p>`)
printToDoc('hello')

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

const printToDocList = (msg) =>{
    document.write(`<ul>
                        <li>${msg}</li>
                        <li>${msg}</li>
                        <li>${msg}</li>
                    </ul>`);
};
printToDocList('pryuvet');

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
printListToDocument('super', 10);

const printToDocL = (text, xNam) => {
    document.write(`<ul>`)
    for (let i = 0; i< xNam; i++){
        document.write(`<li>${text}</li>`);
    }
    document.write(`</ul>`)
}
printToDocL('rest', 4)

