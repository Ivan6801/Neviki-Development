// const ipad = window.matchMedia('screen and (max-width: 767px)');

const menu = document.querySelector('.menu');
console.log('Diseño css burder menu', menu);

const hideContainer = document.querySelector('.hide-container');
console.log('Diseño hide container', hideContainer);

// Perfil menu
const perfilMenu = document.querySelector('.perfil-menu');
console.log('Perfil menu:', perfilMenu);


function hideShow() {
    if (menu.classList.contains('is-active')) {
        menu.classList.remove('is-active');
    } else {
        menu.classList.add('is-active');
    }

    if (hideContainer.classList.contains('is-hide')) {
        hideContainer.classList.remove('is-hide');
    } else {
        hideContainer.classList.add('is-hide');
    }
}



function hideShowPerfil() {
    if (perfilMenu.classList.contains('is-perfil')) {
        perfilMenu.classList.remove('is-perfil');
    } else {
        perfilMenu.classList.add('is-perfil');
    }

    if (hideContainer.classList.contains('is-hide')) {
        hideContainer.classList.remove('is-hide');
    } else {
        hideContainer.classList.add('is-hide');
    }
}