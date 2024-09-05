// const detailsContainer = document.getElementById('detailsContainer');
// fetch('https://jsonplaceholder.typicode.com/users')
//     .then((response) => response.json())
//     .then((usersArray) => {
//         for (const user of usersArray) {
//             const divContainer = document.createElement('div');
//             divContainer.classList.add('divContainer');
//             const cartWithAllInfo = document.createElement('div');
//             cartWithAllInfo.classList.add('allUerInfo');
//             // const ul = document.createElement('ul');
//
//             const p = document.createElement('p');
//             p.classList.add('addressP')
//
//
//             cartWithAllInfo.innerText = `
//                 Id: ${user.id},
//                 Name: ${user.name},
//                 Email: ${user.email},
//                 Phone: ${user.phone},
//                 Website: ${user.website}
//                 `
//             p.innerText = `
//             ADDRESS
//             street: ${user.address.street},
//             suite: ${user.address.suite},
//             city: ${user.address.city},
//             zipcode: ${user.address.zipcode},
//
//             GEO
//             lat: ${user.address.geo.lat},
//             lng: ${user.address.geo.lng},
//
//             COMPANY
//             name: ${user.company.name},
//             catchPhrase: ${user.company.catchPhrase},
//             bs: ${user.company.bs}
//             `
//             cartWithAllInfo.appendChild(p)
//             divContainer.appendChild(cartWithAllInfo);
//             detailsContainer.appendChild(divContainer)
//         }
//
//
//     })

let url = new URL (location.href)
console.log(url)
let valueUser = url.searchParams.get('value');
console.log(valueUser)
const parse = JSON.parse(valueUser);
console.log(parse);

