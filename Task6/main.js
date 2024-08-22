//1 - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
let s1 = 'hello world';
let s2 = 'lorem ipsum';
let s3 = 'javascript is cool';

console.log(s1.length);
console.log(s2.length);
console.log(s3.length);

const strings = [s1, s2, s3];
for (const s of strings){
    console.log(s.length);
}

function lengthStrings (arr){
    for (const s of arr){
        console.log(s.length);
    }
}

lengthStrings(strings);

//2 - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
let str1 = 'hello world';
let str2 = 'lorem ipsum';
let str3 = 'javascript is cool';

str1.toUpperCase();
console.log(str1.toUpperCase());

str2.toUpperCase();
console.log(str2.toUpperCase());

str3.toUpperCase();
console.log(str3.toUpperCase());

//3 - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
let strin1 = 'HELLO WORLD';
let strin2 = 'LOREM IPSUM';
let strin3 = 'JAVASCRIPT IS COOL';

strin1.toLowerCase();
console.log(strin1.toLowerCase());

strin2.toLowerCase();
console.log(strin2.toLowerCase());

strin3.toUpperCase();
document.write(strin3.toUpperCase());

//4 #0b89BkYZwu
// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let brudString = ' dirty string   ';
console.log(brudString);
brudString.substring(0,2);
console.log(brudString.substring(1,13));

//5 - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

let stringa = 'Ревуть воли як ясла повні';
function stringToArray (str) {
    if (str){
        const split = str.split(' ');
        return split;
    }
    return [''];
}

console.log(stringToArray('hjjj jjj kkk'));

//6 - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити
// всі об'єкти в масиві на стрінгові.

const numbers = [10,8,-7,55,987,-1011,0,1050,0];
const strings1 = numbers.map(number => {
    return number + "";

});
console.log(strings1);

//7 - створити функцію sortNums(array,direction), яка прймає масив чисел, та сортує його
// від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

let nums = [11,21,3];

nums.sort((number1, number2) => {
    return number1 - number2;
})
    console.log(nums);

function sortNums(ArrayOfnums,direction){
    if (direction === 'ascending'){
        const sort1 = ArrayOfnums.sort((number1, number2) => number1 - number2);
        return sort1;
    }
    if (direction === 'descending') return ArrayOfnums.sort((number1, number2) => number2 - number1);
};

console.log(sortNums([3, 11, 21], 'descending'));


//8 -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}


let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

coursesAndDurationArray.sort((a,
                              b) =>
                                    (b.monthDuration - a.monthDuration));

console.log(coursesAndDurationArray);

let resultFilterArray
    = coursesAndDurationArray.filter(function (curs){
       return  curs.monthDuration > 5;
});
console.log(resultFilterArray);

let mapResultArray = resultFilterArray.map((cours, index) => {
    let obj = {
        id: index+1,
        title: cours.title,
        monthDuration: cours.monthDuration
    }
    return obj;
})
console.log(mapResultArray);

// 9 описати колоду карт (від 6 до туза без джокерів)

//
// {
//     cardSuit: '', // 'spade' пики, 'diamond' буб,'heart'чир, 'clubs'крести
//         value: '', // '6'-'10', 'ace','jack','queen','king'
//     color:'', // 'red','black'
// }

// let cards =[
//     {cardSuit: 'spade', value: '6', color: 'black'},
//     {cardSuit: 'spade', value: '7', color: 'black'},
//     {cardSuit: 'spade', value: '8', color: 'black'},
//     {cardSuit: 'spade', value: '9', color: 'black'},
//     {cardSuit: 'spade', value: '10', color: 'black'},
//     {cardSuit: 'spade', value: 'jack', color: 'black'},
//     {cardSuit: 'spade', value: 'queen' color: 'black'},
//     {cardSuit: 'spade', value: 'king', color: 'black'},
//     {cardSuit: 'spade', value: 'ace', color: 'black'},
//
//     {cardSuit: 'diamond', value: '6', color: 'red'},
//     {cardSuit: 'diamond', value: '7', color: 'red'},
//     {cardSuit: 'diamond', value: '8', color: 'red'},
//     {cardSuit: 'diamond', value: '9', color: 'red'},
//     {cardSuit: 'diamond', value: '10', color: 'red'},
//     {cardSuit: 'diamond', value: 'jack', color: 'red'},
//     {cardSuit: 'diamond', value: 'queen' color: 'red'},
//     {cardSuit: 'diamond', value: 'king', color: 'red'},
//     {cardSuit: 'diamond', value: 'ace', color: 'red'},
//
//     {cardSuit: 'heart', value: '6', color: 'red'},
//     {cardSuit: 'heart', value: '7', color: 'red'},
//     {cardSuit: 'heart', value: '8', color: 'red'},
//     {cardSuit: 'heart', value: '9', color: 'red'},
//     {cardSuit: 'heart', value: '10', color: 'red'},
//     {cardSuit: 'heart', value: 'jack', color: 'red'},
//     {cardSuit: 'heart', value: 'queen' color: 'red'},
//     {cardSuit: 'heart', value: 'king', color: 'red'},
//     {cardSuit: 'heart', value: 'ace', color: 'red'},
//
//     {cardSuit: 'clubs', value: '6', color: 'black'},
//     {cardSuit: 'clubs', value: '7', color: 'black'},
//     {cardSuit: 'clubs', value: '8', color: 'black'},
//     {cardSuit: 'clubs', value: '9', color: 'black'},
//     {cardSuit: 'clubs', value: '10', color: 'black'},
//     {cardSuit: 'clubs', value: 'jack', color: 'black'},
//     {cardSuit: 'clubs', value: 'queen' color: 'black'},
//     {cardSuit: 'clubs', value: 'king', color: 'black'},
//     {cardSuit: 'clubs', value: 'ace', color: 'black'},
// ];
// // знайти піковий туз
// // - всі шістки
// // - всі червоні карти
// // - всі буби
// // - всі трефи від 9 та більше
//
// let cardsFilter = cards.filter(function (card){
//     if (card.value === '6'){
//         return card;
//     }
// });
// console.log(cardsFilter);

const suits = ['spade', 'diamond','heart', 'clubs'];
const values = ['6', '7', '8', '9', '10', 'jack','queen','king', 'ace'];
const cards =[];
for (const suit of suits){
    for (const value of values){
        const card = {cardSuit: suit, value: value};
       if (suit === 'heart' || suit === 'diamond'){
           card.color = 'red';
       } else {
           card.color = 'black';
       }
       cards.push(card);
    }
}
console.log(cards)
console.log(cards.find(card => card.value === 'ace' && card.cardSuit === 'spade'));

//  let resaltFilter = cards.filter(function (card){
//     return  card.value === '6';
// })
// console.log(resaltFilter);
console.log(cards.filter(card => card.value === '6'));
console.log(cards.filter(card => card.color === 'red'));
console.log(cards.filter(card => card.cardSuit === 'diamond'));
console.log(cards.filter(card => card.cardSuit === 'clubs' && card.value !== '6' && card.value !== '7' && card.value !== '8'));
