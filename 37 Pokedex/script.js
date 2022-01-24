const poke_container = document.getElementById('poke-container')
const poke_count = 150
const colors = {
    fire: '#FDDFDF',
    grass: '#DEFDE0',
	electric: '#FCF7DE',
	water: '#DEF3FD',
	ground: '#f4e7da',
	rock: '#d5d5d4',
	fairy: '#fceaff',
	poison: '#98d7a5',
	bug: '#f8d5a3',
	dragon: '#97b3e6',
	psychic: '#eaeda1',
	flying: '#F5F5F5',
	fighting: '#E6E0D4',
	normal: '#F5F5F5'
}

const main_types = Object.keys(colors)//will get array of all colors with numbered indexes can do console log to see

const fetchPokemons = async() =>{
    for(let i=1;i<= poke_count;i++){
        await getPokemon(i) //not good for big production app as we are fetcho=ing individually but here only for learning purpose
    }
}

const getPokemon= async (id) =>{
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`
    const res = await fetch(url)
    const data = await res.json()
    //console.log(data)
    createPokemonCard(data)
}

const createPokemonCard = (pokemon) =>{
    const pkemonEl = document.createElement('div')
    pkemonEl.classList.add('pokemon')

    const name = pokemon.name[0].toUpperCase()  + pokemon.name.slice(1)//first letter uppercase
    const id = pokemon.id.toString().padStart(3,'0') //to pad with 0s

    //console.log(pokemon.types)//it's an arary with type object and name value

    const poke_types = pokemon.types.map(type=> type.type.name)
    //console.log(poke_types)

    const type = main_types.find(type => poke_types.indexOf(type) > -1 )
    const color = colors[type]

    pkemonEl.style.backgroundColor = color

    const pokemonInnerHtml =`
    <div class="img-container">
          <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png"" alt="${name}">
    </div>
    <div class="info">
          <span class="number">#${id}</span>
          <h3 class="name">${name}</h3>
          <small class="type">Type: <span>${type}</span></small>
    </div>
    `

    pkemonEl.innerHTML =pokemonInnerHtml

    poke_container.appendChild(pkemonEl)
}

fetchPokemons()