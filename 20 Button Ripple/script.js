const buttons = document.querySelectorAll('.ripple')

buttons.forEach(button =>{
    button.addEventListener('click',function(e){
        const x = e.clientX
        const y = e.clientY

        // console.log(x,y) we get where we clicked on the entire view port not the button
        //get position of button

        const buttonTop = e.target.offsetTop
        const buttonLeft = e.target.offsetLeft

        // console.log(buttonLeft,buttonTop) always same no matter where we click

        const xInside = x - buttonLeft
        const yInside = y - buttonTop

        // console.log(xInside,yInside) where we clicked in button

        const circle = document.createElement('span')
        circle.classList.add('circle')
        circle.style.top = yInside + 'px'
        circle.style.left = xInside + 'px'

        this.appendChild(circle)

        // remove from the dom too else it keeps adding see in console

        setTimeout(()=>circle.remove(),500)//in react and all this is taken care of but in vanilla Js we need to take care of it 
    })
})