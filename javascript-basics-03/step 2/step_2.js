const showBtn = document.querySelector('#show')
const hideBtn = document.querySelector('#hide')
const text = document.querySelector('#texte')

const toggleText = (e) =>{
    if(e.target == hideBtn){
    text.style.display = 'none'        
    }else if(e.target == showBtn){
        text.style.display = 'block'
    }
}
showBtn.addEventListener('click', toggleText)
hideBtn.addEventListener('click', toggleText)

// another way...

// const toggleBtns = document.querySelectorAll('#show, #hide')
// const text = document.querySelector('#texte')


// toggleBtns.forEach((element) =>{
//     element.addEventListener('click', (e) =>{
//         if(e.target.id === 'hide'){
//             text.style.display = 'none'        
//             }else if(e.target.id === 'show'){
//                 text.style.display = 'block'
//             }
//     })
// }) 