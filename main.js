'use strict'

//Getting the elements from the HTML file
const elPw = document.getElementById('pw')
const elLen = document.getElementById('len')
const elUpper = document.getElementById('upper')
const elLower = document.getElementById('lower')
const elGenerate = document.getElementById('generate')
const elSymbol = document.getElementById('symbol')
const elNumber = document.getElementById('number')


const upperLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const lowerLetters = 'abcdefghijklmnopqrstuvwxyz'
const nums = '0123456789'
const symbols = '!@#$%^&*+-'



elGenerate.addEventListener('click', generatePassword) //button click === call generatePassword() 

function generatePassword() {
    var password = ''
    var len = elLen.value //Getting password length
    for (var i = 0; i < len; i++) {
        password += generateX() //Generating random char
    }
    elPw.innerText = password //Printing the password
}


function generateX() {
    var xs = [] //array to save the random letters 

    if (elUpper.checked) {
        xs.push(getRandom(upperLetters))
    }

    if (elLower.checked) {
        xs.push(getRandom(lowerLetters))
    }

    if (elNumber.checked) {
        xs.push(getRandom(nums))
    }

    if (elSymbol.checked) {
        xs.push(getRandom(symbols))
    }
    if (xs.length === 0) return ''
    return xs[Math.floor(Math.random() * xs.length)] //returning one random letter from the array
}

function getRandom(charArray) {
    var length = charArray.length
    return charArray[Math.floor(Math.random() * length)]
}

