// alert('privet');
// alert('kiev');
// console.log();
// let glass = 100500;
// console.log(glass);
// gless = 200300;
// console.log(gless);
//
// let ppp = 123456789;
// console.log(ppp);
// ppp = 12;
// console.log(ppp);

// let sss;
// sss = 1231;
// console.log(sss);
//
// {
//     let a = 100;
//     var b = 200;
//     const c = 300;
// }
// console.log(b);
//
//     const PI = 3.1415926;
// console.log(PI);

// ______ОПЕРАЦИИ С ПЕРЕМЕННІМИ______

// let word1 = 'hello';
// word1 = 'hello'
// console.log(word1);
// let word2 = 'vasya';
// console.log(word2);
// let word3 = 'drug';
// let space =' ';
//
// let words = word1+space+word2;
// console.log(words);
//
// let words2 = word1+' '+word2;
// console.log(words);
// let words3 = `${word1} ${word2} ${word3}`;
// console.log(words3);
//
// word1 = 'poka';
// word2 = 'vsem';
// word3 = 'druzyam';
// let words4 = `${word1} ${word2} ${word3}`;
// console.log(words4);


// let bool1 = true;
// let bool2 = false;
// let bool3 = true;
// let bool4 = false;
//
// console.log(bool4+bool2);
// console.log(100/bool2);
// console.log(100+bool3);
//
// let a = 10;
// let b = 12;
// let result = a+b+100;
// console.log(result);
//
// console.log(121%13);
//
// console.log(typeof result);
// console.log(typeof bool2);
// console.log(typeof words4);

// ________КОНВЕРТАЦИЯ_______

// let str1 = '100';
// str1 = +100;
// console.log(str1);
// str1 = '100';
// console.log(str1);
// console.log(+str1);
//
// let num1 = 100;
// num1 = 200+'';
// console.log(num1);
// console.log(+num1);
// console.log(num1+'');
//
// console.log(!!num1);
// console.log(!!words4);
//
// console.log(!!'');
// console.log(!!0);
// console.log(''+10+20);
//
// let answer = prompt();
// console.log(answer);
// console.log(+answer);


// ________ЛЕЦИЯ 2_________

// let array =[];
// console.log(array.length);
//
// let array1 = [12, 'asd', true];
// console.log(array1);
//
// array1[0] = 123;
// array1[1] = 'pups';
// array1[2] = false;
// array1[3] = 'ura';
// console.log(array1);
//
// console.log(typeof array1);
// console.log(array1[2]);
//
// // ______МАССИВЫ С МАССИВАМИ_______
//
// let names = ['vasya', 'petya', ['tom', 'jery']];
// console.log(names[2]);
// console.log(names[2][0]);
// console.log(names[2][1]);
//
// let names1 =['sasha', ['petya', ['anna', 'varya']]];
// console.log(names1[1][0]);
//
// let nemesOfwoomen = names1[1][1];
// console.log(nemesOfwoomen[0]);
//
// let nameOfCharacters = names[2];
// console.log(nameOfCharacters[1]);
//
// console.log(Array.isArray(names));
// console.log(Array.isArray(array));
// let byaka = 'mama myla ramu';
// console.log(Array.isArray(byaka));
//
// console.log(typeof names);
// console.log(typeof byaka);

// _________________________ОБЪЕКТЫ________________

// let dog ={
//     name: 'Umka',
//     age: 2,
//     status: true
// }
//
// console.log(dog);
// console.log(dog.name);
// console.log(dog.status);
// console.log(dog['age']);
// console.log(dog['name']);
//
//
// let kat = {
//     name: 'Murka',
//     age: 5,
//     status: false,
//     commands: ['sidet', 'fas', 'lezhat']
// }
//
// console.log(kat);
// console.log(kat.name);
// console.log(kat["commands"]);
// console.log(kat.commands[1]);
// console.log(kat['commands'][2]);
//
// dog.poroda = 'jack rasel';
// console.log(dog);
// dog['age'] = 3;
// console.log(dog);
//
// kat.poroda = 'pushistaya';
// kat['name'] = 'Mashka';
// console.log(kat);
// kat['commands'][0] = 'day lapu';
// console.log(kat.commands);
//
// // ____________Массив с объектом_____________
// let user3 = {
//     username: 'barbos',
//     surname: 'baranov',
//     age: 30,
// }
//
// let users =[
//     {username: 'kokos', surname: 'radionov', age: 25},
//     {username: 'abricos', surname: 'kretov', age: 45},
//     user3
// ]
// console.log(users);
// console.log(users[0]);
// console.log(users[0].age);
// console.log(users[2]['username']);
// console.log(users[users.length-2].age);
//
// let users1 = [
//     {username: 'kokos', surname: 'radionov', age: 25},
//     {username: 'abricos', surname: 'kretov', age: 45},
//     user3,
//     {username: 'malinka', surname: 'petrova', age: 25, skills: ['html', 'dizayn', 'photoshop']},
// ]
//
// console.log(users1[3]. skills[1]);
//
// let atlet = {
//     ad: 1,
//     name: 'Ivan',
//     age: 13,
//     roditeli: {
//         namemathe: 'Natasha',
//         namefathe: 'Sasha'
//     }
// }
//
// console.log(atlet.roditeli.namefathe);
//
// const obj ={}
// obj.id = 100500;
// console.log(obj);
//
// let a = 0;
// let b = a;
// console.log(b);
// console.log(a, b);
// console.log(b = a + 1);
// console.log(a);
// console.log(b);
// let sportik1 ={id:1}
// let sportik2 = sportik1;
// console.log(sportik1, sportik2);
// sportik2 = {id:2};
// console.log(sportik1, sportik2);

// _________________ЛОГИЧЕСКИЕ РАВЕТВЛЕНИЯ______________

// let b = confirm('davay druzhit');
// if (b){
//     console.log('ya ochen rad');
// } else{
//     console.log('ochen zhal');
// }

// let age = +prompt ('enter yor age');
// if (age>18){
//     console.log('dobro pozhalovat');
// } else {
//     console.log('vam otkazano');
// }

// let color = prompt ('red? yellow? green?')
// if (color === 'green'){
//     console.log('go');
// } else if (color === 'yellow'){
//     console.log ('wait');
// } else if (color === 'red'){
//     console.log('stop');
// } else{
//     console.log('??????');
// }

// let chistayaDoroga = true;
// let color = prompt ('red? yellow? green?')
// if (color === 'green'){
//     if (chistayaDoroga){
//         console.log('go');
//     } else {
//         console.log('propusti car and go')
//     }
// } else if (color === 'yellow'){
//     console.log ('wait');
// } else if (color === 'red'){
//     console.log('stop');
// } else{
//     console.log('?????');
// }

// switch (color){
//     case "green":
//         console.log('go');
//         break;
//     case 'yellow':
//         console.log('wait');
//         break;
//     case 'red':
//         console.log('stop');
//         break;
//     default:
//         console.log('?????')
//

// ______________________ЦИКЛЫ_________________________

// for (let counter = 0; counter<5; counter++){
//     console.log(123);
// }
// for (let counter = 0; counter<5; counter++){
//     console.log(counter);
// }
// let a = [
//     {title: 'JS Complex', day: 5},
//     {title: 'PC', day: 6},
//     {title: 'JS', day: 7},
//     {title: 'F', day: 4},
//     {title: 'JS FR', day: 105},
// ]
// for (let i = 0; i < 5; i++){
//     if (a[i].day <= 5){
//         console.log(a[i].title);
//     }
// }
//
// for (let i = 0; i < 5; i++){
//      console.log(a[i]);
// }
//
// for (let i = 0; i < a.length-1; i++){
//     console.log(a[i])
// }
//
// for (let i = 0; i < a.length; i++) {
//     const aElement = a[i];
// }
//
// for (let i = a.length-1; i>0; i--){
//     const aElement = a[i];
//     console.log(aElement);
// }
//
// let users1 = [
//     {username: 'kokos', surname: 'radionov', age: 25},
//     {username: 'abricos', surname: 'kretov', age: 45},
//     {username: 'malinka', surname: 'petrova', age: 25, skills: ['html', 'dizayn', 'photoshop']},
// ]
//
// for (let i = 0; i<users1.length; i++) {
//     const user = users1[i];
//     console.log(user);
// }
// for (let i = users1.length; i > 0; i--){
//     const user = users1[i];
//     console.log(user)
// }
//
//
// for (let i = 0; i<users1.length; i++) {
//     const user = users1[i];
//     if (user.age <40){
//         console.log(user);
//     }
// }
//
// let gruppa = [11,22,33,44,55,66,77,88,99,111]
// for (let i = 0; i < gruppa.length; i++) {
//     const gruppaElement = gruppa[i];
//     if ((i>1 && i<5) || (i>8 && i<10)){
//         console.log(gruppaElement);
//     }
// }
//
// for (const item of gruppa){
//     if (item > 5 && item < 70){
//         console.log(item);
//     }
// }
//
// for (const item of a){
//     if (item.day>100){
//         console.log('brehlo')
//     }
// }
// for (let i = 0; i < a.length; i++){
//     const aElement = a[i];
//     if (aElement.day > 100){
//         console.log('zachem vrat?')
//     }
// }
// let user = {
//     id: 1,
//     name: 'Sanys',
//     age: 46,
//     skills: ['html', 'dizayn', 'photoshop']
// }
// console.log(user.name)
// for (const userKey in user){
//      // console.log(user[userKey]);
//      // console.log(userKey, user[userKey])
//     if (Array.isArray(user[userKey])){
//         for (const u of user[userKey]){
//             console.log(u);
//         }
//     }
// }
//
// let simpsons = [
//     {name: 'Homer', surname: 'Simpson', age: 40, info: 'tupak', photo: 'https://simpsons.fandom.com/wiki/Homer_Simpson?file=Homer+Simpson.png'},
//     {name: 'March', surname: 'Simpson', age: 38, info: 'molodec', photo: 'https://simpsons.fandom.com/wiki/Marge_Simpson?file=Marge+Character+Set.png'},
//     {name: 'Bart', surname: 'Simpson', age: 10, info: 'balbes', photo: 'https://futurama.fandom.com/wiki/Bart_Simpson?file=Bart_Simpson.png'},
//     {name: 'Lisa', surname: 'Simpson', age: 8, info: 'umnica', photo: 'https://simpsons.fandom.com/wiki/Lisa_Simpson?file=Lisa+Unlock.png'},
//     {name: 'Meggi', surname: 'Simpson', age: 1, info: 'pupsik', photo: 'https://simpsons.fandom.com/wiki/Maggie_Simpson?file=Maggie+Simpson+Tapped+Out.png'}
// ]
//
// for (const simpson of simpsons){
//     document.write(`<div class="simpsons">
//                    <h2>${simpson.name} ${simpson.surname} вік - ${simpson.age}</h2>
//                    <p>${simpson.info}</p>
//                    <img src="${simpson.photo}" alt="${simpson.name}">
//                    </div>`);
// };

// _____________________ФУНКЦИИ___________________________________

// function square (a,b){
//     let s = a * b;
//     return s;
// }

// console.log(square(-2, 2));
// let result = square(12, 2);
// console.log(result)
//
// function square(a,b){
//     if (a>0 && b>0){
//         return a*b;
//     }   return 0;
// }
//
// let arrA = [12,34,56,75, 'rukuku'];
// let arrB = ['rfrfrfr', 123456, true, 'rarara'];
// let arrC = ['micki', 'hellp', 789, false];
//
// for (const arrAElement of arrA){
//     console.log(arrAElement);
// }
// for (let i =0; i<arrB.length; i++){
//     const arrBElement = arrB[i];
//     console.log(arrBElement);
// }
//
// for(const arrCElement of arrC){
//     console.log(arrCElement);
// }
//
//
// function arrayPrint (arr){
// for (const arrElement of arr){
//     console.log(arrElement)
// }
// }
// arrayPrint(arrA);
// arrayPrint(arrB);
// arrayPrint(arrC);
//
// let arr =[];
// let arrNew =[];
// function addObjectToArray (obj, array){
//     if (array){
//         array[array.length] = obj;
//     }
// };
// addObjectToArray({name: 'serega', age: 23, status: false},arr);
// console.log(arr);
// addObjectToArray({name: 'vova', age: 25, status: true},arr);
// addObjectToArray({name: 'saha', age: 46, status: true},arr);
// console.log(arr)
// console.log(arr[1].name)
//
// addObjectToArray({name: 'kolyzn', age: 134},arrNew);
// console.log(arrNew);
// addObjectToArray({id:9}, arr);
//
// function printToDocument(msg, tag){
//     document.write(`<${tag}>${msg}</${tag}`);
// };
// printToDocument('Privet vsem!', 'div class="proba"');
//
// function foobar (a,b,c){
//     if (a && b && !c){
//         return a+b;
//     }else if (a && b && c){
//         return a+b-c;
//     }
// }
//
// console.log(foobar(12, 23));
// console.log(foobar(12, 23, 10));
//
// function boofar (a,b,c){
//     if (arguments.length === 2){
//         return arguments[0]+arguments[1];
//     } else if (arguments.length === 3){
//         return arguments[0]+arguments[1]-arguments[2];
//     }
// }
//
// console.log(boofar(2, 3));
// console.log(boofar(2, 3, 4));
//
// function footbar (...das){
//     console.log(das);
// }
// footbar(1,43,56,'kuku')
// ____________________________ЛЕКЦИЯ 5___________________________

// function сalculator (a,b){
//     return a + b;
// }
// const calculator1 = (a,b)=>{
//     return a + b;
// }
// const calculator2 = (a,b)=>a+b;
// const calculator3 = (a,b) => console.log(a+b);
// calculator3(123,3)

// _____________________ФУНКЦИИ В  ОБЪЕКТЕ______________

// let user ={
//     id: 1,
//     name: "Alex",
//     greeting: function (msg){
//         console.log("hello", msg);
//     }
// }
// user.greeting('drug')

// let user ={
//     id: 1,
//     name: 'Vasya',
//     greeting: (msg)=>{
//         console.log('hello', msg);
//     }
// }
// user.greeting('moy svet')
//
// console.log(user)
//
// let user = {
//     id:1,
//     name: 'Stan',
//     greeting: function (msg){
//         console.log('hello', msg, this.name);
//     }
// }
// user.greeting('drug');
// let arrUsers = [];
// function userBilder (id, name, arr){
//    arr[arr.length] = {
//        id: id,
//        name: name,
//    }
//    return arr
// }
//
// userBilder(1, 'petya', arrUsers );
// console.log(arrUsers);
// userBilder(2, 'senya', arrUsers);
// userBilder(3, 'yura', arrUsers);

// function userBuilder (id, name){
//     let user = {
//         id,
//         name,
//     }
//     return
//     {
//         getId() => {
//             console.log(user.id);
//     },
//         getName() => {
//             console.log(user.name);
//     }, setId (id) {
//             if (id > 0){
//                 user.id = id;
//             }
//     }, setName(name) {
//             if (name){
//                 user.name = name;
//             }
//     }, getObjCopy(){
//             return{
//                 id: user.id,
//                 name: user.name,
//             }
//     }
//     }
// }

// let manipulatorUBuilder1 = userBuilder(1, 'Varya')
//
// manipulatorUBuilder1.getId();
// // // manipulatorUBuilder1.getName();
// // // userBuilder(2, 'vika').getId();
// //
// // manipulatorUBuilder1.setId(32)
// let userCopy = manipulatorUBuilder1.getObjCope ;
// console.log(userCopy)

// ______________методы стрингов__________________________

// let str = 'hello my friends';
// console.log(str);
// console.log(str[0]);
// for (const strElement of str){
//     console.log(strElement);
// }
// let s = str.concat(' I love you');
// console.log(s)
// let split = s.split(' ');
// console.log(split);

// _________МЕТОДЫ МАССИВОВ____________________________________

// let arr =[];
// console.log(Array.isArray(arr));
// let obj = {};
// console.log(Array.isArray(obj));
//
// arr.push('mama myla ramu');
// console.log(arr);
// arr.push('sohlo dolgo');
//
// const pop = arr.pop();
// console.log(pop);
// console.log(arr)
// arr.unshift('vchera ves den');
// console.log(arr);
// let shift = arr.shift();
// console.log(arr);
// console.log(shift);
// arr.unshift('vchera ves den');
// let s = arr.join();
// console.log(s);
// console.log(arr);
//
// let arr2 =[]
// arr2.push('papa tozhe rabotal');
// let arr3 = arr.concat(arr2);
// console.log(arr3);
// let wis = arr3.join();
// console.log(wis);
// let revers = arr3.reverse();
// console.log(arr3);
// console.log(revers);
// arr3.reverse()
// console.log(arr3);
// console.log(arr3.slice(1));
// console.log(arr3);
//
// let removedItem = arr3.splice(0,1, 'segodnya')
// console.log(removedItem);
// console.log(arr3);
// _____________________ЧАСТЬ ____________________________
//
// let users =[
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'tanya', age: 39, status: false},
//     {name: 'sanya', age: 46, status: true},
//     {name: 'vanya', age: 54, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'katya', age: 20, status: false},
//     {name: 'julya', age: 21, status: true},
//     {name: 'serg', age: 61, status: false},
//     {name: 'styepa', age: 19, status: false},
// ];
// users.forEach(function (value){
//     console.log(value);
// })
//
// let resultUsArr = users.filter(function (user){
//     return user.age > 40;
// });
// console.log(resultUsArr)

// let mapResultArr=  users.map(user => user.age);
// console.log(mapResultArr);

// let mapResultArr = users.map((user, index)=>{
//     user.id = index+1;
//     return index;
// })
//
// console.log(users);

//
// let mapResultArr = users.map((user, index)=>{
//     let obj ={
//         id: index+1,
//         name: user.name,
//         age: user.age,
//         status: user.status
//     }
//     return obj
// })
//
// console.log(mapResultArr);
//
// let reduseArr = users.reduce((accumulator, user)=>{
//     if(user.status){
//         accumulator[0].push(user);
//     } else{
//         accumulator[1].push(user);
//     }
//     return accumulator;
// }, [[],[]]);
// console.log(reduseArr);

// _____________________КОНСТРУКТОРЫ___________________________

// function User (id, name){
//     this.id = id;
//     this.name = name;
// }
// let user1 = new User(1, 'sanya');
// console.log(user1);

class User{
    constructor(id,name) {
        this.id = id;
        this.name = name;
    }
}
let user1 = new User(2, 'vasya');
console.log(user1);

