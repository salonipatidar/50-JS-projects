const tagsEl = document.getElementById('tags')
const textarea = document.getElementById('textarea')

textarea.focus()//will automatically put the cursor inside the text area as soon as we go to the page 

textarea.addEventListener('keyup',(e) =>{
    createTags(e.target.value)
    //console.log(e.target.value)
    if(e.key === 'Enter'){
        setTimeout(()=> {
            e.target.value = ''
        },10)
        randomSelect()
    }
})

function createTags(input) {
    const tags = input.split(',').filter(tag => tag.trim() !=='').map(tag => tag.trim())
    //console.log(tags)

    tagsEl.innerHTML=''

    tags.forEach(tag => {
        const tagEl = document.createElement('span')
        tagEl.classList.add('tag')
        tagEl.innerHTML = tag
        tagsEl.appendChild(tagEl)
    });
}

function randomSelect(){
    const times = 30 //numver of times it will highlight each one before it stops 

    const interval = setInterval(() => {
        const randomTag = pickRandomTag()

        highlightTag(randomTag)

        setTimeout(() => {
            unhighlightTag(randomTag)
        }, 100);
    }, 100);
// to stops else infinite
    setTimeout(() => {
        clearInterval(interval)
        setTimeout(() => {
            const randomTag = pickRandomTag()

            highlightTag(randomTag)
        }, 100);
    }, times * 100);
}

function pickRandomTag(){
    const tags = document.querySelectorAll('.tag')
    return tags[Math.floor(Math.random() * tags.length)]
}

function highlightTag(tag){
    tag.classList.add('highlight')
}

function unhighlightTag(tag){
    tag.classList.remove('highlight')
}