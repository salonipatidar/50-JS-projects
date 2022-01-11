const counters = document.querySelectorAll('.counter')

counters.forEach(counter => {
    counter.innerText = '0'

    const updateCounter = () =>{
        const target = +counter.getAttribute('data-target')
        //console.log(typeof target , target) is string will change to no by + sign
        const c = +counter.innerText

        //how much we want to increment depends on us
        const increment = target/200// if we want slow then divide by bigger number

        if(c<target){
            counter.innerText = `${Math.ceil(c+increment)}`
            setTimeout(updateCounter,1)// will run every 1 sec
        }else{
            counter.innerText = target
        }
        
    }

    updateCounter()
})

//allthough the 3 no are diff but they take the same time as we divide by same no and then increment by it think logically 