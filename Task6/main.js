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







    

