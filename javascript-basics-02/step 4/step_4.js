let inputs = document.querySelectorAll('input')
let resetBtn = document.querySelector('button')

resetBtn.addEventListener('click', () => {
    inputs.forEach((item) => item.value = '');
})