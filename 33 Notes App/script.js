const addBtn = document.getElementById('add')

// to show to dom from ls will parse from string 

const notes = JSON.parse(localStorage.getItem('notes'))

if(notes){
    notes.forEach(note => addNewNote(note))
}

addBtn.addEventListener('click',() => addNewNote())

function addNewNote(text = ''){
    const note = document.createElement('div')
    note.classList.add('note')

    console.log("hi")

    note.innerHTML = `
    <div class="tools">
      <button class="edit">
        <i class="fas fa-edit"></i>
      </button>
      <button class="delete">
        <i class="fas fa-trash-alt"></i>
      </button>
    </div>
    <div class="main ${text?"":"hidden"}"></div>
    <textarea class=" ${text?"hidden":""}"></textarea>
    `
    const editBtn = note.querySelector('.edit')
    const deleteBtn = note.querySelector('.delete')
    const main = note.querySelector('.main')
    const textArea = note.querySelector('textarea')

    //to see if text pased in

    textArea.value = text
    main.innerHTML = marked(text)

    deleteBtn.addEventListener('click',() => {
        note.remove() //removed from dom 
        updateLS()
    })

    //edit toggle main and hidden

    editBtn.addEventListener('click' , () =>{
        main.classList.toggle('hidden')
        textArea.classList.toggle('hidden')
    })
//saving value from text area to main in marked format

    textArea.addEventListener('input',(e) => {
        const{value} = e.target

        main.innerHTML = marked(value)

        updateLS()
    })

    document.body.appendChild(note)
}

function updateLS(){
    const notesText = document.querySelectorAll('textarea')

    const notes = []

    notesText.forEach(note => notes.push(note.value))

    //want to store the array in local storage can't do as it is need to do json to stringify

    localStorage.setItem('notes',JSON.stringify(notes))

    //console.log(notes)
}