const labels = document.querySelectorAll('.form-control label')

labels.forEach(label => {
    label.innerHTML = label.innerText
    .split('') // array with letters
    .map((letter,idx) => `<span style="transition-delay:${idx * 50}ms">${letter}</span>`) // to turn into array of letters with a span (mapping it ) with transition delay equivalent to the comment in html 
    .join('') //turn the array back to string 
})