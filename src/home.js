let slideArticle = document.querySelector('.slide-article');
let slideImg = document.querySelector('.slide');
let cardsArticle = document.querySelector('.cards-article')

let i = 0;
let time = 5000;
let images = [
    '../assets/images/images/eucerin2.jpg',
    '../assets/images/images/niveahd2.jpg',
    '../assets/images/images/dove 7.jpg'
];

function changeImg(){
    slideImg.src = images[i]

    if(i < images.length -1) {
        i++
    }else{
        i = 0
    }

    setTimeout(changeImg, time)
}

slideArticle.onload = changeImg()

let cards = [
    {
        avatar: '../assets/images/images/dove_logo.png',
        title: 'DOVE'
    },
    {
        avatar: '../assets/images/images/nivea_logo.png',
        title: 'NIVEA'
    },
    {
        avatar: '../assets/images/images/palmolive_logo2.png',
        title: 'palmolive'
    },
    {
        avatar: '../assets/images/images/blendamed_logo.png',
        title: 'blendamed'
    },
    {   avatar: '../assets/images/images/Perwoll_Logo.png',
        title: 'perwoll'
    },
    {   avatar: '../assets/images/images/dermomed.png',
        title: 'dermomed'
    }
]
const renderCards=()=>{
  
    cards.forEach((el)=>{
        let card = document.createElement('div');
        card.className = 'div-card'

        let cardImg = document.createElement('img');
        cardImg.src = el.avatar
        let cardTitle = document.createElement('h3');
        cardTitle.innerText = el.title
        card.append(cardImg, cardTitle)
        cardsArticle.append(card)
    })

}

renderCards()