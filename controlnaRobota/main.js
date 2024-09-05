let usersBook = document.getElementById('usersBook');
fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(usersArray => {
        for (const user of usersArray){
            console.log(user)

                const divContainer = document.createElement('div')
                divContainer.classList.add('user-container')
                const divWithInfo = document.createElement('div');
                divWithInfo.classList.add('user-info')
                divWithInfo.innerText = `id: ${user.id},
                 name: ${user.name}`
                const buttonAllInfo = document.createElement('button')
                buttonAllInfo.classList.add('buttonAllInfo');
                buttonAllInfo.innerHTML = "More information"
                divWithInfo.appendChild(buttonAllInfo);
                divContainer.appendChild(divWithInfo);
                usersBook.appendChild(divContainer);
                buttonAllInfo.onclick = function (){
                    location.href = "";
                }


            }


    })