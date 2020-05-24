const nav = document.querySelector('.nav--mob');
const main = document.querySelector('.main');
const footer = document.querySelector('.footer');
const holderNavMob = document.querySelector('.holder__nav--mob');
const dataYear = document.querySelector('.date')

const meniNav = document.querySelector('.menu')
.addEventListener('click', ()=>{
    // holderNavMob.style.height = '100vh'
    nav.classList.toggle('display');
    main.classList.toggle('display_none');
    footer.classList.toggle('display_none')
} )

 dataYear.innerHTML = new Date().getFullYear() 