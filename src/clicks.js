const nav = document.querySelector('.nav');
const main = document.querySelector('.main');
const footer = document.querySelector('.footer');
const header = document.querySelector('header');

const meniNav = document.querySelector('.menu')
.addEventListener('click', ()=>{
    header.style.height = '100vh'
    nav.classList.toggle('display');
    main.classList.toggle('display_none');
    footer.classList.toggle('display_none')
} )