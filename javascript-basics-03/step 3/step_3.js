const colors = document.querySelectorAll('.color')
const text = document.querySelector('#text')

colors.forEach((element) =>{
    element.addEventListener('click', (e) =>{
        text.style.color = e.target.classList[1]
    })
})