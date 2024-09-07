const userBook = document.getElementById('usersBook');
fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json())
.then(usersArray => {
    for (const user of usersArray) {
        const divUserContainer = document.createElement('div');
        divUserContainer.classList.add('divUserContainer')
        const divWithInfo = document.createElement('div');
        divWithInfo.classList.add('divWithInfo')
        divWithInfo.innerHTML = `<span style="color: green"><b>Id:</b></span> ${user.id} <span style="color: green"><b>Name:</b></span> ${user.name}`;
        const buttonUser = document.createElement('button');
        buttonUser.classList.add('buttonUser');
        buttonUser.innerHTML = `<b>More information</b>`

        buttonUser.addEventListener('click', function () {
            document.location = ('user-details.html');
            localStorage.setItem('user', JSON.stringify(user))
        });

        divWithInfo.appendChild(buttonUser);
        divUserContainer.appendChild(divWithInfo);
        userBook.appendChild(divUserContainer);


    }
})