const canvas = document.getElementById('canvas')
const increseBtn = document.getElementById('increase')
const decreaseBtn = document.getElementById('decrease')
const sizeEl = document.getElementById('size')
const colorEl = document.getElementById('color')
const clear = document.getElementById('clear')

const ctx = canvas.getContext('2d')

let size = 10 
let isPressed = false
let color = 'black'
let x
let y

canvas.addEventListener('mousedown',(e) =>{
    isPressed = true

    x= e.offsetX
    y=e.offsetY

    // console.log(isPressed,x,y)
})

canvas.addEventListener('mouseup',(e) =>{
    isPressed = false

    x= undefined
    y= undefined
})

canvas.addEventListener('mousemove',(e) =>{
    if(isPressed){
        const x2= e.offsetX
        const y2 = e.offsetY

        drawCircle(x2,y2)// this will draw continues circles but if we draw too fast then we can see gaps 
        drawLine(x,y,x2,y2)//therefore lines

        x = x2
        y=y2

    }
    
})

function drawCircle(x,y){
    ctx.beginPath()
    ctx.arc(x,y,size,0,Math.PI*2)
    ctx.fillStyle = color
    ctx.fill()
}

function drawLine(x1,y1,x2,y2){
    ctx.beginPath()
    ctx.moveTo(x1,y1)
    ctx.lineTo(x2,y2)
    ctx.strokeStyle = color
    ctx.lineWidth = size*2// to make it equal to the width of circle
    ctx.stroke()
}

function updateSizeOnScreen(){
    sizeEl.innerText = size
}

increseBtn.addEventListener('click',()=>{
    size +=5

    if(size > 50){
        size = 50
    }

    updateSizeOnScreen()
})

decreaseBtn.addEventListener('click',()=>{
    size -=5

    if(size < 5){
        size = 5
    }

    updateSizeOnScreen()
})

colorEl.addEventListener('change', (e) => color = e.target.value)

clear.addEventListener('click',() => ctx.clearRect(0,0,canvas.width,canvas.height))

// drawCircle(100,200)
// drawLine(300,300,200,500)