let family = [
    46, 'Oleksandr', true, 37, 'Lyudmila', true, 12, 'Mark', true, 'Iefymenko'
]
console.log(family);
console.log(family[0]);
console.log(family[1]);
console.log(family[2]);
console.log(family[3]);
console.log(family[4]);
console.log(family[5]);
console.log(family[6]);
console.log(family[7]);
console.log(family[8]);
console.log(family[9]);

family[0] = 46.5;
console.log(family[0]);
console.log(family);

let book1 = {
    title: 'batman',
    pageCount: 300,
    genre: 'comic'
}

let book2 = {
    title: 'matrix',
    pageCount: 1000,
    genre: 'fantastic'
}
console.log(book2);

let book3 = {
    title: 'pinocchio',
    pageCount: 50,
    genre: 'fairyTale'
}
console.log(book3);

let batman = {
    title: 'batman',
    pageCount: 300,
    genre: 'comic',
    authors: [
        {name: 'Bob Keyn', age: 50},
        {name: 'Bil Figner', age: 55}
    ]
}
console.log(batman);

let matrix = {
    title: 'matrix',
    pageCount: 1000,
    genre: 'fantastic',
    authors: ['William Irwin', 48]
}
console.log(matrix);

let pinocchio = {
    title: 'pinocchio',
    pageCount: 50,
    genre: 'fairyTale',
    authors: [
        {name: 'Karlo Kollody', age: 80}
    ]
}
console.log(pinocchio);
console.log(batman.authors[1]);
console.log(matrix.pageCount);
console.log(matrix.authors);
console.log(matrix.authors[0]);
console.log(pinocchio.authors);
console.log(batman.authors[1]);
console.log(pinocchio.authors[0]['age']);


batman.authors [1] = {name: 'David Duhovny', age: 45}
console.log(batman);

let users = [
    {name: 'Ivan', username: 'Vano', password: 12345},
    {name: 'Stepan', username: 'Set', password: 6789},
    {name: 'Vasiliy', username: 'Vas-Vas', password: 13579},
    {name: 'Oleksandr', username: 'Sanya', password: 121212},
    {name: 'Vitaliy', username: 'Vetal', password: 232323},
    {name: 'Yevgen', username: 'Zcheka', password: 343434},
    {name: 'Sergiy', username: 'Gray', password: 454545},
    {name: 'Oleksiy', username: 'Ol', password: 565656},
    {name: 'Petro', username: 'Pit', password: 676767},
    {name: 'Dmytro', username: 'Dimon', password: 787878},
];
console.log(users);
console.log(users [0]['password']);
console.log(users [1]['password']);
console.log(users [2]['password']);
console.log(users [3]['password']);
console.log(users [4]['password']);
console.log(users [5]['password']);
console.log(users [6]['password']);
console.log(users [7]['password']);
console.log(users [8]['password']);
console.log(users [9]['password']);

let temperature = [
    ['day1',
        {morning: 10, daytime: 20, evening: 17}],
    ['day2',
        {morning: 11, daytime: 21, evening: 18}],
    ['day3',
        {morning: 12, daytime: 22, evening: 18}],
    ['day4',
        {morning: 13, daytime: 23, evening: 19}],
    ['day5',
        {morning: 10, daytime: 20, evening: 17}],
    ['day6',
        {morning: 11, daytime: 21, evening: 18}],
    ['day7',
        {morning: 5, daytime: 10, evening: 12}]
];
console.log(temperature);
console.log(temperature[6][1]['morning']);

let x = 0;

if (x > 0){
    console.log('Virno');
} else {
    console.log('Nevirno')
}

let time = 59;
if (time <= 15){
    console.log(1);
} else if (time <= 30){
    console.log(2);
} else  if (time <= 45){
    console.log(3);
} else if (time <= 59){
    console.log(4);
} else {
    console.log('?????')}

let day = 0;
if (day <= 10){
    console.log(1);
} else if (day <= 20){
    console.log(2);
} else if (day <=31){
    console.log(3);
} else {
    console.log('?????')
}

switch (3){
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednsday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');
        break;
    case 7:
        console.log('Sunday');
        break;
    default:
        console.log('?????')
}

let z = 4;
let y = -5;
if (z > y){
    console.log(z);
} else if (z < y){
    console.log(y);
} else if (z = y){
    console.log('=');
} else{
    console.log('?????')
}

let A = !!0;
if (A === !!0){
    console.log('default');
} else if (A === !!''){
    console.log('default');
} else if (A === undefined){
    console.log('default');
} else if (A === null){
    console.log('default');
} else if (A === !!NaN){
    console.log('default');
} else{
    console.log('?????')
}

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

if (coursesAndDurationArray[4]['monthDuration'] > 5){
    console.log('super');
};