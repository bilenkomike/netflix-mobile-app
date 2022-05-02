document.querySelector('.menu__link.active').classList.remove('active');
const menu = document.querySelector('#menu');
const header = document.querySelector('#header');

const startbtn = document.getElementById('start');
const looginbtn = document.getElementById('login');
const looginLoginbtn = document.getElementById('login--login');
const looginRegbtn = document.getElementById('register--login');
const regLoginbtn = document.getElementById('loginReg');
const regbtn = document.getElementById('register');
startbtn.addEventListener('click', () =>  {
    screen1 = document.querySelector('#screen--start');
    screen1.classList.remove('active');
    document.querySelector(`#screen--register`).classList.add('active');
    fadeOut(screen1,document.querySelector(`#screen--register`));
    header.removeAttribute('style');
});
looginbtn.addEventListener('click', () =>  {
    screen2 = document.querySelector('#screen--start');
    screen2.classList.remove('active');
    document.querySelector(`#screen--login`).classList.add('active');
    fadeOut(screen2,document.querySelector(`#screen--login`));
    header.removeAttribute('style');
});
looginLoginbtn.addEventListener('click', () =>  {
    screen3 = document.querySelector('#screen--login');
    screen3.classList.remove('active');
    document.querySelector(`#screen--home`).classList.add('active');
    fadeOut(screen3,document.querySelector(`#screen--home`));
    document.querySelector(`#dark--blur`).classList.add('active');
    document.body.classList.add('allow-ov');
    header.removeAttribute('style');
    document.querySelector(`[screen-id=screen--home]`).classList.add('active');
    localStorage.setItem('page','screen--home');
    menu.removeAttribute('style');
    document.querySelector(`.header__menu__icon.right`).removeAttribute('style');
});
looginRegbtn.addEventListener('click', () =>  {
    screen = document.querySelector('#screen--login');
    screen.classList.remove('active');
    document.querySelector(`#screen--register`).classList.add('active');
    fadeOut(screen,document.querySelector(`#screen--register`));
});

regbtn.addEventListener('click', () =>  {
    screen3 = document.querySelector('#screen--register');
    screen3.classList.remove('active');
    document.querySelector(`#screen--home`).classList.add('active');
    fadeOut(screen3,document.querySelector(`#screen--home`));
    document.querySelector(`#dark--blur`).classList.add('active');
    document.body.classList.add('allow-ov');
    header.removeAttribute('style');
    document.querySelector(`[screen-id=screen--home]`).classList.add('active');
    localStorage.setItem('page','screen--home');
    menu.removeAttribute('style');
    document.querySelector(`.header__menu__icon.right`).removeAttribute('style');
});
regLoginbtn.addEventListener('click', () =>  {
    screen = document.querySelector('#screen--register');
    screen.classList.remove('active');
    document.querySelector(`#screen--login`).classList.add('active');
    fadeOut(screen,document.querySelector(`#screen--login`));
});



if(localStorage.getItem('page') == null) {

    localStorage.setItem('page','screen--home');
}
else {
    document.querySelector(`#screen--start`).style.cssText = `display: none; opacity: 0;`;
    menu.removeAttribute('style');
    header.removeAttribute('style');
    document.body.classList.add('allow-ov');
    document.querySelector(`.header__menu__icon.right`).removeAttribute('style');
    document.querySelector(`#${localStorage.getItem('page')}`).removeAttribute('style');
    document.querySelector(`#${localStorage.getItem('page')}`).classList.add('active');
    
    document.querySelector(`[screen-id="${localStorage.getItem('page')}"]`).classList.add('active');
}


// document.querySelector(`[screen-id="${localStorage.getItem('page')}"]`).classList.add('active');



const links = document.querySelectorAll('.menu__link');
for(let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', ()=> {
        document.querySelector('.menu__link.active').classList.remove('active');
        links[i].classList.add('active');
        console.log(links[i].getAttribute('screen-id'));
        
        fadeOut(document.querySelector(`.screen.active`),document.querySelector(`#${links[i].getAttribute('screen-id')}`));
        document.querySelector(`.screen.active`).classList.remove('active');
        document.querySelector(`#${links[i].getAttribute('screen-id')}`).classList.add('active');

        localStorage.setItem('page',links[i].getAttribute('screen-id'));
        
    });
}