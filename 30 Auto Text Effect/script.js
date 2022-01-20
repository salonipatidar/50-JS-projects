const textEl = document.getElementById('text')
const speedEl = document.getElementById('speed')
const text = 'We Love Programming!'
let idx =1 //where we are in text
let speed = 300 / speedEl.value

writeText()

function writeText(){
    textEl.innerText = text.slice(0,idx)

    idx++

    if(idx> text.length){
        idx = 1
    }

    setTimeout(writeText, speed)//to keep calling
}

speedEl.addEventListener('input' , (e) => speed = 300/e.target.value)
