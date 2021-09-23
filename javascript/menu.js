// const ipad = window.matchMedia('screen and (max-width: 767px)');

const menu = document.querySelector('.menu');
console.log('Diseño css burder menu', menu);

const hideContainer = document.querySelector('.hide-container');
console.log('Diseño hide container', hideContainer);

const burgerButton = document.querySelector('.burger-button');
console.log('Menu:', burgerButton);



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
