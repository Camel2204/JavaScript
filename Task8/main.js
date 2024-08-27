// Створити функцію, яка робить глибоку копію об'єкту.
// Додати перевірки на undefined, null, NaN.
//     Подумати і реалізувати логіку, в якій
// кінцевий об'єкт буде мати функції,які в нього були до цього моменту.

function clone(obj){
    if (obj){
        let functions = [];
        for (const key in obj){
            if (typeof obj[key] === 'function'){
                const funClone = obj[key].bind({});
            functions.push({funClone, key});
    }
        }
        const cloneObj = JSON.parse(JSON.stringify(obj));
        for (const func of functions){
            cloneObj[func.key] = func.funClone;
        }
    console.log(cloneObj)
    return cloneObj;
    }
    throw new Error('!!!!!');
}




let kuku = {
    id: 1,
    name: 'serg',
    age: 123,
    greeting(){},
    foo(){},
}
console.log(clone(kuku));