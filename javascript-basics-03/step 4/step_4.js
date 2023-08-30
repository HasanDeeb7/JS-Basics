const pass = document.querySelector('#password')
const confirmation = document.querySelector('#confirmation')
const testBtn = document.querySelector('button')

testBtn.addEventListener('click', (e) =>{
    if( !pass.value || !confirmation.value ){
        return
    }else if( pass.value != confirmation.value ){
        pass.style.borderColor = 'red'
        confirmation.style.borderColor = 'red'
    }
})