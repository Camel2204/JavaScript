// - За допомогою циклу for і document.write() вивести 10 блоків div
// c довільним текстом всередині

for (let counter = 0; counter<10; counter++){
    document.write(`<div><h2>Hello</h2></div>`);
}

// - За допомогою циклу for і document.write() вивести 10 блоків div
// c довільним текстом і індексом всередині

for (let counter = 0; counter<10; counter++){
    document.write(`
                    <div class="task2">
                        <h3>Hello</h3>
                        <p> - ${counter}</p>
                    </div>
                    `);
}

//3 За допомогою циклу while вивести в документ 20 блоків h1 c довільним
// текстом всередині.

let i = 0;
while (i<20){
    document.write(`<div><h1>Good day</h1></div>`);
    i++;
}

//4 - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом
// і індексом всередині.

let box =0;
while (box<20){
    document.write(`<div class="task4">
                                <h1>Hello</h1> 
                                - ${box} 
                                </div>`);
    box++;
}

//5 - Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// Масив:
//
//     let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
//
// ШАБЛОН:
//     <ul>
//         <li>ITEM OF ARRAY</li>
//         <!--
//             і тд інші об'єкти масиву
//              ...
//              ...
//              ...
//         -->
//     </ul>
//
// замість 'ITEM OF ARRAY' підставити елемент з масиву щоб получився цілий список з даними з масиву

let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
// let list = 0;
// while (list<listOfItems.length){
//     document.write(`<ul><li>${list}</li></ul>`);
//     list++;
// }

console.log(listOfItems[0])



