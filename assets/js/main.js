
"use strict";

//inputs
const inputField = document.querySelector('#user-input');
console.log(inputField);
const guessButton = document.body.querySelector('button')
console.log(guessButton);
//outputs
const outputField = document.querySelector('.output-section')
//counter
let counter = 0

//funtionen

//funtion für die computer auswahl
function computerTake() {
    const randomNumber = 9
    console.log('die nummer in der funtion ist:',randomNumber);
    return randomNumber;
}

function spielstart(randomNumber) {
    if (counter < 1){
        randomNumber = computerTake()
    }
    counter++;
    console.log( 'die runden anzahl ist:',counter);
    
    const userTake = Number(inputField.value);
    const userNummer = userTake;
    console.log('der user hat gewählt:', userNummer);
    const computerNumber = randomNumber
    console.log('der Computer hat gewählt:', computerNumber);
    
    
    if (userNummer === computerNumber) {
        outputField.textContent = 'du hast es erraten';
    } if (userNummer < computerNumber){
        outputField.textContent = 'höher!';
    } if (userNummer > computerNumber) {
        outputField.textContent = 'tiefer!';
    }
}


//eventlistener
guessButton.addEventListener('click',spielstart)


