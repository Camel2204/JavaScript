let url = new URL (location.href)
console.log(url)
let valueUser = url.searchParams.get('value');
console.log(valueUser)
const objectUser = JSON.parse(valueUser);
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
const postsButton = document.getElementById('postsUser');
// postsButton.addEventListener('click', function (){
//
// })

const divAllPosts = document.getElementById('allPosts');


fetch(`https://jsonplaceholder.typicode.com/users/${objectUser.id}/posts`)
    .then(response => response.json())
    .then(posts => {
        for (const post of posts) {
            const div = document.createElement('div');
            const p = document.createElement('p');
            p.innerText = post.title;
            const btn = document.createElement('button');
            div.append(p, btn);
            divAllPosts.appendChild(div);

        }
    })






// async function postOfCurrentUser (userId){
//     let response = await fetch('https://jsonplaceholder.typicode.com/users/'+userId);
//     let user = await response.json();
//     console.log(user);
//     let response2 = await fetch('https://jsonplaceholder.typicode.com/users/USER_ID/posts?userId='+userId);
//     let posts = await response2.json();
//     console.log(posts);
//
//
//
//
// }
// postOfCurrentUser(3)








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

