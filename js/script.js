'use strict';

document.querySelector('.item-turkiye').addEventListener('click', function() {
    dialog('Türkiyə', 'turkiye')
});
// document.querySelector('.item-azerbaycan').addEventListener('click', function() {
//     dialog('Azərbaycan', 'azerbaycan')
// });
// document.querySelector('.item-iran').addEventListener('click', function() {
//     dialog('İran', 'iran')
// });
// document.querySelector('.item-rusiya').addEventListener('click', function() {
//     dialog('Rusiya', 'rusiya')
// });
// document.querySelector('.item-ermenistan').addEventListener('click', function() {
//     dialog('Ermənistan', 'ermenistan')
// });
// document.querySelector('.item-gurcustan').addEventListener('click', function() {
//     dialog('Gürcüstan', 'gurcustan')
// });



function dialog(answer, element) {
    let xerite = prompt('Bu hansı ölkədir? QEYD: Azərbaycan əlifbasından istifadə edin.', 'Ölkə adı yaz.');

    if (xerite === answer) {
        document.querySelector("." + element).style.display = 'block';
    } else {
        alert('Cavab səhvdir. Yenidən cəhd edin.');
    } 
}


document.querySelector('.appears-hint-button').addEventListener('click', showHints);
document.querySelector('.btn-hidden').addEventListener('click', hideHints)
document.querySelector('.refresh').addEventListener('click', randomHints);
document.querySelector('.refresh-map').addEventListener('click', refreshMap);

// let thisItem = document.querySelector('.item');

// let objPic = [
//     {map: '../img/map-1.png', country: 'Türkiyə'},
//     {map: '../img/map-2.png', country: 'Azərbaycan'},
//     {map: '../img/map-3.png', country: 'İran'},
//     {map: '../img/map-4.png', country: 'Rusiya'},
//     {map: '../img/map-5.png', country: 'Ermənistan'},
//     {map: '../img/map-6.png', country: 'Gürcüstan'}
// ]

// function createItems() {
//     thisItem.innerHTML = '';
//     for (let obj of objPic) {
//         const item = `
//             <figure>
//                 <img class="item-turkiye" src='${obj.map}' />
//             </figure>
//             <p class="turkiye country-name">${obj.country}</p>
//         `;
//     thisItem.insertAdjacentHTML('beforeend', item);
//     }
// }

function refreshMap() {
    let mapOfCountry = [
        '../img/map-1.png',
        '../img/map-2.png',
        '../img/map-3.png',
        '../img/map-4.png',
        '../img/map-5.png',
        '../img/map-6.png'
    ]

    let randomMapOfCountrty = Math.floor(Math.random() * mapOfCountry.length);
    document.querySelector('.item-turkiye').src = mapOfCountry[randomMapOfCountrty];
}

function showHints() {
    document.querySelector('.hint').style.display = 'block';
}

function hideHints() {
    document.querySelector('.hint').style.display = 'none';
}


let addPicToRandomHintsOfCountryMap = ['../img/flag-of-turkey.png', ''];
let randomAdition = Math.floor(Math.random() * addPicToRandomHintsOfCountryMap.length);
let push1 = document.querySelector('.random-hints-pic').src = addPicToRandomHintsOfCountryMap[randomAdition];



function randomHints() {
    let push2;

    let hintsOfCountryMap = ['Paytaxtı: Ankara şəhəri.', 'Atatürk!',]; // '../img/flag-of-turkey'

    let randomHintsOfCountryMap = Math.floor(Math.random() * hintsOfCountryMap.length);

    document.querySelector('.random-hints').innerHTML = hintsOfCountryMap[randomHintsOfCountryMap];

    push2 = hintsOfCountryMap.push(push1);
    console.log(push2.length);
    
}





    
  
  
 
