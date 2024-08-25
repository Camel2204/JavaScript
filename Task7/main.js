// - Створити функцію конструктор для об'єктів User з полями id, name, surname ,
// email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

function User(id, name, surname, email, phone){
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}
let users = [
    new User(1, 'Alex', 'Aleksandrov', 'alex@gmail.com', '+380931231234'),
    new User(2, 'Serg', 'Sergeev', 'Serg@gmail.com', '+380671231233'),
    new User (3, 'Stan', 'Stanov', 'Stan@gmail.com', '+380505453678'),
    new User (4, 'Stan', 'Stanov', 'Stan@gmail.com', '+380505453678'),
    new User (5, 'Misha', 'Mihaylov', 'Misha@gmail.com', '+380935453678'),
    new User (6, 'Mark', 'Markov', 'Mark@gmail.com', '+380505777678'),
    new User (7, 'Olya', 'Stayanova', 'Olya@gmail.com', '+380509453678'),
    new User (8, 'Oksana', 'Stahanova', 'Oksana@gmail.com', '+380505453699'),
    new User (9, 'Styepa', 'Stepanov', 'Stepa@gmail.com', '+380505453999'),
    new User (10, 'Vova', 'Vladimirov', 'Vova@gmail.com', '+380505456678'),
];
console.log(users);

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати ,
//     залишивши тільки об'єкти з парними id (filter)
//
// let filterUsersArr = users.filter(function (user){return user.id % 2 === 0;})
// console.log(filterUsersArr);

const predicate = (user) => user.id % 2 === 0;

console.log(users.filter(predicate));

// - Взяти масив з  User[] з попереднього завдання,
//     та відсортувати його по id. по зростанню (sort)

// const sravnenie = (user1, user2) => user2.id - user1.id;
//
// console.log(users.sort(sravnenie));

// console.log(users.sort(function (user1, user2) {
//     return user1.id - user2.id;
// }));

users.sort((user1,user2) => user2.id - user1.id)
console.log(users);

// - створити класс для об'єктів Client з полями id, name, surname,' +
// ' email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

class Client {
    constructor(id, name, surmame, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surmame;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

let clients = [
    new Client(1, 'Vasy', 'Vasilyek', 'vaska@ukr.net', '09321232121', [{title: 'tv', price: 123000}, {title: 'smartphone', price: 9000}]),
    new Client(2, 'Tasay', 'Tasilyek', 'taska@ukr.net', '09325232121', [{title: 'car', price: 12300000}, {title: 'smartphone', price: 19000}]),
    new Client(3, 'Sasy', 'Sasilyek', 'saska@ukr.net', '09321632121', [{title: 'tv', price: 123000}]),
    new Client(4, 'Pasy', 'Pasilyek', 'paska@ukr.net', '09321732121', [{title: 'tv', price: 123000}, {title: 'smartphone', tv: 19000}, {title: 'smartphone', tv: 19000}]),
    new Client(5, 'Zasy', 'Zasilyek', 'zaska@ukr.net', '09321832121', [{title: 'tv', price: 123000}, {title: 'smartphone', price: 9000}]),
    new Client(6, 'Kasy', 'Kasilyek', 'kaska@ukr.net', '09321432121', [{title: 'tv', price: 123000}, {title: 'smartphone', price: 9000}, {title: 'smartphone', tv: 19000}, {title: 'smartphone', tv: 19000}]),
    new Client(7, 'Fasy', 'Fasilyek', 'faska@ukr.net', '09325532121', [{title: 'tv', price: 123000}, {title: 'smartphone', price: 9000}]),
    new Client(8, 'Hasy', 'Hasilyek', 'haska@ukr.net', '09344432121', [{title: 'tv', price: 123000}, {title: 'smartphone', price: 9000}]),
    new Client(9, 'Dasy', 'Dasilyek', 'daska@ukr.net', '09325432121', [{title: 'tv', price: 123000}, {title: 'smartphone', price: 9000}]),
    new Client(10, 'Nasy', 'Nasilyek', 'naska@ukr.net', '09324232121', [{title: 'tv', price: 123000}, {title: 'smartphone', price: 9000}]),
]
console.log(clients);

// - Взяти масив (Client [] з попереднього завдання).
// Відсортувати його по кількості товарів в полі order по зростанню. (sort)

clients.sort((client1, client2) => {
    return client1.order.length - client2.order.length;
})

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник,' +
// ' рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на
// значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, ' +
// 'і додає його в поточний об'єкт car

// function Car (model, vyrobnik, rikVypusku, maxSpeed, vDvyguna){
//     this.model = model;
//     this.vyrobnik = vyrobnik;
//     this.rikVypusku = rikVypusku;
//     this.maxSpeed = maxSpeed;
//     this.vDvyguna = vDvyguna;
//     this.drive = function (){
//         console.log(`їдемо зі швидкістю ${maxSpeed} на годину`);
//     };
//     this.info = function () {
//     for (const key in this){
//     console.log(key, this[key]);
//     }};
//     this.increaseMaxSpeed = function (newSpeed){
//        if (newSpeed > 0) this.maxSpeed = this.maxSpeed + newSpeed;
//     };
//     this.changeYear = function (newValue){
//        if (newValue > 1815)
//         this.rikVypusku = newValue;
//     };
//     this.driver  = function (driverObject){
//        if (driverObject)  this.driver = driverObject;
//     }
//     };


    // const car = new Car('kia rio', 'kia', 2010, 300, 2.0);

//     car.driver({});
// console.log(car);

class Carp {
    constructor(model, vyrobnik, rikVypusku, maxSpeed, vDvyguna) {
        this.model = model;
        this.vyrobnik = vyrobnik;
        this.rikVypusku = rikVypusku;
        this.maxSpeed = maxSpeed;
        this.vDvyguna = vDvyguna;
    };
    drive = function (){
        console.log(`їдемо зі швидкістю ${maxSpeed} на годину`);
    };
    info(){
        for (const key in this){
            console.log(key, this[key]);
        }
    };
    increaseMaxSpeed = function (newSpeed){
        if (newSpeed > 0) this.maxSpeed = this.maxSpeed + newSpeed;
    };
    changeYear = function (newValue){
       if (newValue > 1815)
        this.rikVypusku = newValue;
    };
    driver  = function (driverObject){
       if (driverObject)  this.driver = driverObject;
    }
}

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. ' +
// 'Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я,
//     вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find
// та відповідного колбеку

class Cinderella {
    constructor(name, age, size) {
        this.name = name;
        this.age = age;
        this.size = size;
    };
}

const cinderellas =[
    new Cinderella('Natasha', 20, 39),
    new Cinderella('Vika', 21, 38),
    new Cinderella('Vita', 31, 40),
    new Cinderella('Masha', 16, 34),
    new Cinderella('Yulya', 35, 39),
    new Cinderella('Sasha', 40, 41),
    new Cinderella('Lyusya', 17, 36),
    new Cinderella('Kira', 10, 29),
    new Cinderella('Polina', 19, 38),
    new Cinderella('Katya', 21, 38),
]
console.log(cinderellas);

class Princ {
    constructor(name, ) {
    }
}