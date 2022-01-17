const fill = document.querySelector('.fill')
const empties = document.querySelectorAll('.empty')

fill.addEventListener('dragstart',dragStart) // dragstart(check on mdn docs) is the event name and dragStart is the function which we created
fill.addEventListener('dragend',dragEnd)

for(const empty of empties){
    empty.addEventListener('dragover',dragOver)
    empty.addEventListener('dragenter',dragEnter)
    empty.addEventListener('dragleave',dragLeave)
    empty.addEventListener('drop',dragDrop)
}

function dragStart(){
    this.className += ' hold '//appending the class = will replace += will append
    setTimeout(()=> this.className = 'invisible',0) // it will help hold happen first it will make the box white as no styling for invisible class
   
}

function dragEnd(){
    this.className = 'fill'
}

function dragOver(e){
    e.preventDefault()
}

function dragEnter(e){
    e.preventDefault()
    this.className += ' hovered'
}

function dragLeave(){
    this.className = 'empty'
}

function dragDrop(){
this.className = 'empty'
this.append(fill)
}