'use strict';

document.querySelector('.item-turkiye').addEventListener('click', turkiye);
// document.querySelector('.item-azerbaycan').addEventListener('click', azerbaycan);
// document.querySelector('.item-iran').addEventListener('click', iran);
// document.querySelector('.item-rusiya').addEventListener('click', rusiya);
// document.querySelector('.item-ermenistan').addEventListener('click', ermenistan);
// document.querySelector('.item-gurcustan').addEventListener('click', gurcustan);

document.querySelector('.appears-hint-button').addEventListener('click', showHints);
document.querySelector('.btn-hidden').addEventListener('click', hideHints)
document.querySelector('.refresh').addEventListener('click', randomHints);
document.querySelector('.refresh-map').addEventListener('click', refreshMap);

function turkiye() {
    let xerite = prompt('Bu hansı ölkədir? QEYD: Azərbaycan əlifbasından istifadə edin.', 'Ölkə adı yaz.');
    let Turkiye = 'Türkiyə';

    if (xerite === Turkiye) {
        document.querySelector(".turkiye").style.display = 'block';
    } else {
        alert('Cavab səhvdir. Yenidən cəhd edin.');
    }   
}

// function azerbaycan() {
//     let xerite = prompt('Bu hansı ölkədir? QEYD: Azərbaycan əlifbasından istifadə edin.', 'Ölkə adı yaz.');
//     let azerbaycan = 'Azərbaycan';

//     if (xerite === azerbaycan) {
//         document.querySelector(".azerbaycan").style.display = 'block';
//     }else {
//         alert('Cavab səhvdir. Yenidən cəhd edin.');
//     }   
// }

// function iran() {
//     let xerite = prompt('Bu hansı ölkədir? QEYD: Azərbaycan əlifbasından istifadə edin.', 'Ölkə adı yaz.');
//     let iran = 'İran';

//     if (xerite === iran) {
//         document.querySelector(".iran").style.display = 'block';
//     }else {
//         alert('Cavab səhvdir. Yenidən cəhd edin.');
//     }   
// }

// function rusiya() {
//     let xerite = prompt('Bu hansı ölkədir? QEYD: Azərbaycan əlifbasından istifadə edin.', 'Ölkə adı yaz.');
//     let rusiya = 'Rusiya';

//     if (xerite === rusiya) {
//         document.querySelector(".rusiya").style.display = 'block';
//     }else {
//         alert('Cavab səhvdir. Yenidən cəhd edin.');
//     }   
// }

// function ermenistan() {
//     let xerite = prompt('Bu hansı ölkədir? QEYD: Azərbaycan əlifbasından istifadə edin.', 'Ölkə adı yaz.');
//     let ermenistan = 'Ermənistan';

//     if (xerite === ermenistan) {
//         document.querySelector(".ermenistan").style.display = 'block';
//     }else {
//         alert('Cavab səhvdir. Yenidən cəhd edin.');
//     }   
// }

// function gurcustan() {
//     let xerite = prompt('Bu hansı ölkədir? QEYD: Azərbaycan əlifbasından istifadə edin.', 'Ölkə adı yaz.');
//     let gurcustan = 'Gürcüstan';

//     if (xerite === gurcustan) {
//         document.querySelector(".gurcustan").style.display = 'block';
//     }else {
//         alert('Cavab səhvdir. Yenidən cəhd edin.');
//     }   
// }

// ------------------------------------------------------------

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



    
  
  
 
