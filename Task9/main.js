// - створити блок,
//     - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.

// let div = document.createElement('div');
// console.log(div);
// div.classList.add('wrap', 'collapse', 'alpha', 'beta');
// div.innerHTML = ('<p>Lorem input</p>');
// const cloneNode = div.cloneNode(true);
//
// document.body.appendChild(div);
// document.body.appendChild(cloneNode);

// - Є масив:
//
// Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)


const arr = ['Main','Products','About us','Contacts'];


const menu = document.createElement('ul');
menu.classList.add('menu');
document.body.appendChild(menu);

for (const item of arr) {
    const li = document.createElement('li');
    li.innerText = item;
    menu.appendChild(li);
}

// - Є масив Для кожного елементу масиву зробити блок в якому вивести інформацію про
// title та monthDuration
// Завдання робити через цикли.

// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
// for (const item of coursesAndDurationArray) {
//     const div = document.createElement('div');
//     div.innerText = `${item.title} ${item.monthDuration}`;
//     document.body.appendChild(div);
// }


// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,
//     в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з
// monthDuration елементу.
//     Завдання робити через цикли.


let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

for (const course of coursesAndDurationArray) {
    const div = document.createElement('div');
    const h2 = document.createElement('h2');
    h2.innerText = course.title;
    div.appendChild(h2);

    const p = document.createElement('p');
    p.innerText = course.monthDuration;
    div.appendChild(p);

    div.classList.add('item');
    h2.classList.add('heading');
    p.classList.add('description');

    document.body.appendChild(div);



}
