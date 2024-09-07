const postObject = JSON.parse(localStorage.getItem('post'));
console.log(postObject)
const postDetailsContainer = document.getElementById('post-details');
const ulPost = document.createElement('ul');
ulPost.classList.add('listPost')


fetch(`https://jsonplaceholder.typicode.com/users/${postObject.id}/posts`)
    .then(response => response.json())
    .then(post => {
        for (const postKey in postObject) {

            const li = document.createElement('li');
            li.innerHTML = `<span style="color: green"><b>${postKey}:</b></span> ${postObject[postKey]}`;
            ulPost.appendChild(li)
            postDetailsContainer.appendChild(ulPost);
        }})

const commentsBlock = document.getElementById('commentsBlock');
fetch(`https://jsonplaceholder.typicode.com/posts/${postObject.id}/comments`)
        .then(response => response.json())
        .then(comments => {
            for (const comment of comments){
                const divWithComment = document.createElement('div');
                divWithComment.classList.add('divWithComment')
                for (key in comment){
                    const p = document.createElement('p');
                    p.innerHTML = `<span style="color: green"><b>${key}:</b></span> ${comment[key]}`
                    divWithComment.appendChild(p);
                    commentsBlock.appendChild(divWithComment)
                }
            }
        })