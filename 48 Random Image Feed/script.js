// no fetch api to get random img just random img unsplasg url 

const container = document.querySelector('.container')
const unsplashURL = 'https://source.unsplash.com/random/'

const rows = 5

for(let i =0 ; i< rows*3; i++){//3 images in each
    const img = document.createElement('img')
    img.src = `${unsplashURL}${getRandomSize()}`
    container.appendChild(img)
}

function getRandomSize(){
    return `${getRandomNr()}x${getRandomNr()}`
}

function getRandomNr(){
    return Math.floor(Math.random() * 10) + 300 //will get random no between 300 -310
}
