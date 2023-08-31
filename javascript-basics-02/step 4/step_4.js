let inputs = document.querySelectorAll('input')
let resetBtn = document.querySelector('button')

resetBtn.addEventListener('click', () => {
    const confirmation = confirm('Are you sure you want to reset all fields? ')
    if(confirmation){
        inputs.forEach((item) => item.value = '');
    }else{
        return
    }
})