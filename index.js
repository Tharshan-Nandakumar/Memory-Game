const cardArray = [
    {
        name: 'heart',
        img: 'Images/Heart.png',
    },
    {
        name: 'egg',
        img: 'Images/Egg.png',
    },
    {
        name: 'flower',
        img: 'Images/Flower.png',
    },
    {
        name: 'cloud',
        img: 'Images/Cloud.png',
    },
    {
        name: 'ice-cream',
        img: 'Images/Ice-cream.png',
    },
    {
        name: 'mushroom',
        img: 'Images/Mushroom.png',
    },
    {
        name: 'rainbow',
        img: 'Images/Rainbow.png',
    },
    {
        name: 'sun',
        img: 'Images/Sun.png',
    },
    {
        name: 'heart',
        img: 'Images/Heart.png',
    },
    {
        name: 'egg',
        img: 'Images/Egg.png',
    },
    {
        name: 'flower',
        img: 'Images/Flower.png',
    },
    {
        name: 'cloud',
        img: 'Images/Cloud.png',
    },
    {
        name: 'ice-cream',
        img: 'Images/Ice-cream.png',
    },
    {
        name: 'mushroom',
        img: 'Images/Mushroom.png',
    },
    {
        name: 'rainbow',
        img: 'Images/Rainbow.png',
    },
    {
        name: 'sun',
        img: 'Images/Sun.png',
    }
]

cardArray.sort(() => 0.5 - Math.random())

const grid = document.getElementById('grid')
const result = document.getElementById('result')
let cardsChosen = []
let cardsChosenIds = []
const cardsWon = []

function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', 'Images/back.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        grid.append(card)
    }
}

createBoard()

function checkMatch() {
    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenIds[0]
    const optionTwoId = cardsChosenIds[1]

    if (optionOneId === optionTwoId) {
        cards[optionOneId].setAttribute('src', 'Images/back.png')
        cards[optionTwoId].setAttribute('src', 'Images/back.png')
        alert('You picked the same card')
    }

    if (cardsChosen[0] === cardsChosen[1] && optionOneId !== optionTwoId) {
        cards[optionOneId].setAttribute('src', 'Images/White.png')
        cards[optionTwoId].setAttribute('src', 'Images/White.png')
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        cardsWon.push(cardsChosen)
    } else {
        cards[optionOneId].setAttribute('src', 'Images/back.png')
        cards[optionTwoId].setAttribute('src', 'Images/back.png')
    }
    result.innerHTML = cardsWon.length
    cardsChosen = []
    cardsChosenIds = []

    if (cardsWon.length === (cardArray.length/2)) {
        result.innerHTML = 'Congratulations you have found them all'
    } 
}

function flipCard() {
    const cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenIds.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length === 2) {
        setTimeout(checkMatch, 500)
    }
}