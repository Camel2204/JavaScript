let url = new URL (location.href)
console.log(url)
let infoUser = url.searchParams.get('info');
console.log(infoUser)
const objectUser = JSON.parse(infoUser);
console.log(objectUser);

const ul = document.querySelector('#userList')

function outputAllVelueUser (user,tag) {
    for (const userKey in user) {
        console.log(userKey)
        if (typeof user[userKey] !== 'object'){
            const li = document.createElement('li')
            li.innerHTML = `${userKey}: ${user[userKey]}`
            tag.appendChild(li);
        } else {
            const ul = document.createElement('ul')
            ul.innerText = `${userKey}`
            tag.appendChild(ul);
            outputAllVelueUser(user[userKey], ul)
        }
    }
}
outputAllVelueUser(objectUser, ul)

// const ul = document.createElement('ul')
// for (const userKey in objectUser){
//     console.log(userKey)
//     if (typeof objectUser[userKey] !== 'object'){
//         const li = document.createElement('li');
//         li.innerText = `${userKey} ${objectUser[userKey]}`
//         ul.appendChild(li);
//         userAllInfo.appendChild(ul)
//
//
//     } else {
//         const ulnew = document.createElement('ul')
//         ul.appendChild(ulnew)
//         const objectKey = objectUser[userKey];
//         for (const objUserKey in objectKey){
//             console.log(objUserKey)
//             const linew = document.createElement('li')
//             linew.innerHTML = `address:`
//             linew.innerText = ` ${objUserKey} ${objectKey[objUserKey]}`
//             ulnew.appendChild(linew);
//             ul.appendChild(ulnew)
//         }
//     }
// }

