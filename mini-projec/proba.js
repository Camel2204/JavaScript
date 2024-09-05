const detailsContainer = document.getElementById('detailsContainer');
fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((usersArray) => {
        for (const user of usersArray) {
            const divContainer = document.createElement('div');
            divContainer.classList.add('divContainer');
            const cartWithAllInfo = document.createElement('div');
            cartWithAllInfo.classList.add('allUerInfo');
            if (user === 'object'){
           for (const u of user){
           console.log(u);
           }
           }
           }
        })
