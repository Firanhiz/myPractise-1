'use strict';

document.querySelector('.item-turkiye').addEventListener('click', turkiye);
document.querySelector('.item-azerbaycan').addEventListener('click', azerbaycan);
document.querySelector('.item-iran').addEventListener('click', iran);
document.querySelector('.item-rusiya').addEventListener('click', rusiya);
document.querySelector('.item-ermenistan').addEventListener('click', ermenistan);
document.querySelector('.item-gurcustan').addEventListener('click', gurcustan);

function turkiye() {
    let xerite = prompt('Bu hansı ölkədir? QEYD: Azərbaycan əlifbasından istifadə edin.', 'Ölkə adı yaz.');
    let turkiye = 'Türkiyə';

    if (xerite === turkiye) {
        document.querySelector(".turkiye").style.display = 'block';
    } else {
        alert('Cavab səhvdir. Yenidən cəhd edin.');
    }   
}


function azerbaycan() {
    let xerite = prompt('Bu hansı ölkədir? QEYD: Azərbaycan əlifbasından istifadə edin.', 'Ölkə adı yaz.');
    let azerbaycan = 'Azərbaycan';

    if (xerite === azerbaycan) {
        document.querySelector(".azerbaycan").style.display = 'block';
    }else {
        alert('Cavab səhvdir. Yenidən cəhd edin.');
    }   
}

function iran() {
    let xerite = prompt('Bu hansı ölkədir? QEYD: Azərbaycan əlifbasından istifadə edin.', 'Ölkə adı yaz.');
    let iran = 'İran';

    if (xerite === iran) {
        document.querySelector(".iran").style.display = 'block';
    }else {
        alert('Cavab səhvdir. Yenidən cəhd edin.');
    }   
}

function rusiya() {
    let xerite = prompt('Bu hansı ölkədir? QEYD: Azərbaycan əlifbasından istifadə edin.', 'Ölkə adı yaz.');
    let rusiya = 'Rusiya';

    if (xerite === rusiya) {
        document.querySelector(".rusiya").style.display = 'block';
    }else {
        alert('Cavab səhvdir. Yenidən cəhd edin.');
    }   
}

function ermenistan() {
    let xerite = prompt('Bu hansı ölkədir? QEYD: Azərbaycan əlifbasından istifadə edin.', 'Ölkə adı yaz.');
    let ermenistan = 'Ermənistan';

    if (xerite === ermenistan) {
        document.querySelector(".ermenistan").style.display = 'block';
    }else {
        alert('Cavab səhvdir. Yenidən cəhd edin.');
    }   
}

function gurcustan() {
    let xerite = prompt('Bu hansı ölkədir? QEYD: Azərbaycan əlifbasından istifadə edin.', 'Ölkə adı yaz.');
    let gurcustan = 'Gürcüstan';

    if (xerite === gurcustan) {
        document.querySelector(".gurcustan").style.display = 'block';
    }else {
        alert('Cavab səhvdir. Yenidən cəhd edin.');
    }   
}
