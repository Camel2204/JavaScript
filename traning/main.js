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

let dog ={
    name: 'Umka',
    age: 2,
    status: true
}

console.log(dog);
console.log(dog.name);
console.log(dog.status);
console.log(dog['age']);
console.log(dog['name']);


let kat = {
    name: 'Murka',
    age: 5,
    status: false,
    commands: ['sidet', 'fas', 'lezhat']
}

console.log(kat);
console.log(kat.name);
console.log(kat["commands"]);
console.log(kat.commands[1]);
console.log(kat['commands'][2]);

dog.poroda = 'jack rasel';
console.log(dog);
dog['age'] = 3;
console.log(dog);

kat.poroda = 'pushistaya';
kat['name'] = 'Mashka';
console.log(kat);
kat['commands'[0]] = 'day lapu';
console.log(kat.commands);

