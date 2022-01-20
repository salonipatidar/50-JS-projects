const loveMe = document.querySelector('.loveMe')
const times = document.querySelector('#times')

// loveMe.addEventListener('dblclick',(e) => {
//     console.log(123)
// })can do easily with dblclick event but will create our double click from single click

let clickTime =0 
let timesClicked = 0

loveMe.addEventListener('click',(e)=>{
    if(clickTime === 0){
        clickTime = new Date().getTime()
        //console.log(clickTime)
    }else{
        if((new Date().getTime() - clickTime)< 800){
            //console.log(123)
            createHeart(e)
            clickTime = 0
        }else{
            clickTime = new Date().getTime()
        }
    }
})

const createHeart = (e) => {
    const heart = document.createElement('i')
    heart.classList.add('fas')
    heart.classList.add('fa-heart')

    const x = e.clientX
    const y = e.clientY

    //e is only for the element but we need offset from top and left and can subtract

    const leftOffset = e.target.offsetLeft
    const topOffset = e.target.offsetTop

    const xInside = x- leftOffset
    const yInside= y - topOffset

    heart.style.top = `${yInside}px`
    heart.style.left = `${xInside}px`

    loveMe.appendChild(heart)

    times.innerHTML = ++timesClicked

   // console.log(x,y)

   // to delete the element from the dom because alyhough they fade away as opacity is 0 but they are in the dom so we need to remove them 

   setTimeout(() => heart.remove() ,1000)
}
