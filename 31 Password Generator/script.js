const resultEl = document.getElementById('result')
const lengthEl = document.getElementById('length')
const uppercaseEl = document.getElementById('uppercase')
const lowercaseEl = document.getElementById('lowercase')
const numbersEl = document.getElementById('numbers')
const symbolsEl = document.getElementById('symbols')
const generateEl = document.getElementById('generate')
const clipboardEl = document.getElementById('clipboard')

const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
}

clipboardEl.addEventListener('click',()=>{
    const textarea = document.createElement('textarea')
    const password = resultEl.innerText

    if(!password){return}

    textarea.value = password

    document.body.appendChild(textarea)
    textarea.select()
    document.execCommand('copy')
    textarea.remove()
    alert('Password copied to clipboard!')

})

generateEl.addEventListener('click',()=>{
    const length = +lengthEl.value //value because input and adding + to parse it to number without that string by default 
    const hasLower = lowercaseEl.checked // true or false based on checked or not 
    const hasUpper = uppercaseEl.checked
    const hasNumber = numbersEl.checked
    const hasSymbol = symbolsEl.checked

    resultEl.innerText = generatePassword(hasLower,hasUpper,hasNumber,hasSymbol,length)
})

function generatePassword(lower , upper , number , symbol , length){
    let generatedPassword = ''
    const typesCount = lower + upper + number + symbol//gives the count of checked 
    const typesArr= [{lower},{upper},{number},{symbol}].filter(item => Object.values(item)[0]) // will be true or false based on checked  therefore we filter
    if(typesCount === 0){
        return '' // if nothing is checked
    }

    for(let i =0 ; i<length;i+= typesCount){
        typesArr.forEach(type => {
            const funcName = Object.keys(type)[0]
            generatedPassword += randomFunc[funcName]()
        })
    }

    console.log(generatedPassword)

    const finalPassword = generatedPassword.slice(0,length)

    return finalPassword
}

function getRandomLower(){
    return String.fromCharCode( Math.floor(Math.random()*26) + 97) //ascii and 27 numbers
}

function getRandomUpper(){
    return String.fromCharCode( Math.floor(Math.random()*26) + 65) //for uppercase
}

function getRandomNumber(){
    return String.fromCharCode( Math.floor(Math.random()* 10) + 48) //code 0f 0 is 48
}

function getRandomSymbol(){
        const symbols = '!@#$%^&*(){}[]=<>/,.'
    return symbols[Math.floor(Math.random() * symbols.length)] 
}