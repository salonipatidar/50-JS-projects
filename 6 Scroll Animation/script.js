const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll',checkBoxes)

checkBoxes()

function checkBoxes(){
    // console.log(window.innerHeight / 5 * 4)
//divide  by 5 *4  to get trigger point which is less than inner height also can't be a fixed number as it will keep changing 
    const triggerBottom = window.innerHeight / 5 * 4

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top// will give top of box 
        if(boxTop < triggerBottom){
            box.classList.add('show')
        } else{
            box.classList.remove('show')
        }

    })    

}

// people use j -query and animate on scroll lib for things like this 