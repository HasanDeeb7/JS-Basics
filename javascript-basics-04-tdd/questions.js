
const stringSize = (text) => {
    return text.length
}
const replaceCharacterE = (text) => {
    return text.replace('e',' ')
}
const concatString = (text1, text2) => {
    return text1 + text2
}
const showChar5 = (text) => {
return text[4]
}
const showChar9 = (text) => {
return text.slice(0, 9)
}
const toCapitals = (text) => {
return text.toUpperCase()
}
const toLowerCase = (text) => {
return text.toLowerCase()
}
const removeSpaces = (text) => {
return text.trim()
}
const IsString = (text) => {
return typeof text === 'string'
}

const getExtension = (text) => {
return text.slice(-3)
}
const countSpaces = (text) => {
    let count = 0
for (i = 0 ; i < text.length ; i++){
    if (text[i] === ' '){
        count+=1
    }
}
return count;
}
const InverseString = (text) => {
    return text.split('').reverse().join('')
}

const power = (x, y) => {
return x**y
}
const absoluteValue = (num) => {
return Math.abs(num)
}
const absoluteValueArray = (array) => {
return array.map((item) => Math.abs(item))
}
const circleSurface = (radius) => {
    return Math.ceil(Math.PI * radius ** 2)
}
const hypothenuse = (ab, ac) => {
return Math.hypot(ab, ac)
}
const BMI = (weight, height) => {
return parseFloat((weight / height ** 2).toFixed(2))
}

const createLanguagesArray = () => {
return ['Html', 'CSS', 'Java', 'PHP']
}

const createNumbersArray = () => {
return [0, 1, 2, 3, 4, 5]
}

const replaceElement = (languages) => {
languages[2] = "Javascript"
return languages
}

const addElement = (languages) => {
    languages.push("Ruby", "Python")
    return languages
}

const addNumberElement = (numbers) => {
numbers.unshift(-2, -1)
return numbers
}

const removeFirst = (languages) => {
languages.shift()
return languages
}

const removeLast = (languages) => {
languages.pop()
return languages
}

const convertStrToArr = (social_arr) => {
return social_arr.split(',')
}

const convertArrToStr = (languages) => {
return languages.join(',')
}

const sortArr = (social_arr) => {
return social_arr.sort()
}

const invertArr = (social_arr) => {
return social_arr.reverse()
}