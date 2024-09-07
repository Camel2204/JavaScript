const userObject = JSON.parse(localStorage.getItem('user'));
console.log(userObject)
const ul = document.getElementById('userList');

function outputAllVelueUser (user, tag) {
    for (const userKey in user) {
        console.log(userKey)
        if (typeof user[userKey] !== 'object') {
            const li = document.createElement('li');
            li.innerHTML = `<span style="color: green"><b>${userKey}:</b></span> ${user[userKey]}`;
            tag.appendChild(li);
        } else {
            const ulIn = document.createElement('ul');
            ulIn.innerHTML = `<span style="color: green"><b>${userKey}:</b></span>`;
            tag.appendChild(ulIn);
            outputAllVelueUser(user[userKey], ulIn);
        }
    }
}
outputAllVelueUser(userObject, ul)

const postUserButtom = document.getElementById('postsUser');
const postsContainer = document.getElementById('allPosts');

fetch(`https://jsonplaceholder.typicode.com/users/${userObject.id}/posts`)
.then(response => response.json())
.then(posts => {
    for (const post of posts){
        const divForPost = document.createElement('div');
        divForPost.classList.add('divForPost')
        const p = document.createElement('p');
        p.innerText = post.title;
        const wholePostButton = document.createElement('button');
        wholePostButton.classList.add('allPost');
        wholePostButton.innerHTML =`<span style="font-size: 10px"><b>Post of current user</b></span>`
        divForPost.append(p, wholePostButton);
        postsContainer.appendChild(divForPost);

        wholePostButton.addEventListener('click', function (){
            document.location = ('post-details.html');
            localStorage.setItem('post', JSON.stringify(post));
        })

    }
})

postUserButtom.addEventListener('click', function (){
    postsContainer.style.display = 'flex';
})
