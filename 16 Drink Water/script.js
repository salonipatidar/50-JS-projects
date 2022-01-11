const smallCups = document.querySelectorAll('.cup-small')
const liters = document.getElementById('liters')
const percentage = document.getElementById('percentage')
const remained = document.getElementById('remained')

//want to call when application loads
updateBigCup()

smallCups.forEach((cup,idx) => {
    cup.addEventListener('click',() => highlightCups(idx))
})

function highlightCups(idx){
    //incase full and is the last one and we are clicking , kind of toggling the last one 
    if(smallCups[idx].classList.contains('full')&& !smallCups[idx].nextElementSibling.classList.contains('full')){
        idx--
    }
    smallCups.forEach((cup,idx2) => {
        if(idx2 <= idx){
            cup.classList.add('full')
        }else{
            cup.classList.remove('full')
        }
    })

    updateBigCup()
}

function updateBigCup(){
    const fullCups = document.querySelectorAll('.cup-small.full').length
    const totalCups = smallCups.length

    //hide the percentage if empty i.e no full cups

    if(fullCups == 0){
        percentage.style.visibility = 'hidden'
        percentage.style.height = 0
    }else{
        percentage.style.visibility = 'visible'
        percentage.style.height = `${fullCups/totalCups * 330}px` //330px is the totalheight of big cup here
        percentage.innerText =`${fullCups/totalCups * 100}%`
    }

    //not wanna show remained if full 

    if(fullCups == totalCups){
        remained.style.visibility = 'hidden'
        remained.style.height = 0
    } else {
        remained.style.visibility = 'visible'
        liters.innerText = `${2 - (250 * fullCups /1000)}L`
    }
}