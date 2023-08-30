let birthYear = prompt("Birth Year")
let shoeSize = prompt('Shoe Size')
const process = (shoe, birth) =>{
    const result = (shoe * 2 + 5) * 50 - birth + 1766
    return result
}
alert('Result: ' + process(shoeSize, birthYear))