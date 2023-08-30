let div = document.createElement('div')
let input = document.querySelector("#name")
let form = document.getElementsByTagName('form')

div.innerText = 'Click outside of the element to see the result'

form[0].appendChild(div)
input.addEventListener('change', (e) =>{
    div.innerText =  e.target.value
})