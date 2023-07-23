"use strict";

//inputs
const inputField = document.querySelector('#user-input');

const guessButton = document.body.querySelector('#guess-button')

const roundselection = document.body.querySelectorAll('[name="rounds"]');
const roundenauswahlSection = document.body.querySelector('.round-selection')
const spielverlauf = document.body.querySelector('.spielverlauf');

//outputs
const outputField = document.querySelector('.output-section')

// variable für die runden anzahl
let maxRunden = 0;
let rundenZähler = 0;


// function zum Begrenzen der Rundenanzahl
roundselection.forEach(rounds => {
    rounds.addEventListener('click', () => {
        maxRunden = Number(rounds.id);
        console.log('die ausgewählte Rundenzahl ist:', maxRunden)
    });
});
//funtionen
// Arrow-Funktion für die Computer-Auswahl
    const computerTake = () => {
        const randomNumber = Math.floor(Math.random() * 100);
        return randomNumber;
    }
let computerNummer = computerTake();

// Arrow-Funktion für die Benutzer-Auswahl
    const userTake = () => {
        const userNummer = Number(inputField.value);
        return userNummer
    }
    //Haupspiel funtion
    const spielstart = () =>{
        // zählen der versuche
        let userNummer = userTake();
        // Vergleichehn der Zahlen
        if (maxRunden === 0){
            outputField.innerHTML = `<p>lege eine Runden zahl fest</p>`
            return
        } 
        if (userNummer === 0) {
            outputField.innerHTML = `<p>Bitte gib eine Zahl ein</p>`
            return
        } 
        rundenZähler++;
        spielverlauf.innerHTML =`<p>${rundenZähler} / ${maxRunden}</p>`;
        if(rundenZähler === 1){
            roundenauswahlSection.classList.add('unsichtbar')
            spielverlauf.classList.remove('unsichtbar')
        }
        if (userNummer === computerNummer) {
        outputField.textContent = `dein tipp: ${userNummer} ist richtig du hast es erraten`;
        guessButton.removeEventListener('click', spielstart);
        guessButton.textContent = 'Neustart';
        guessButton.addEventListener('click', neustartSpiel);
        return
        } else if (userNummer < computerNummer) {
            outputField.innerHTML = `<p>versuch ${rundenZähler} dein tipp ist: ${userNummer}</p><p>versuch es höher</p>`;
        } else if (userNummer > computerNummer) {
            outputField.innerHTML = `<p>versuch ${rundenZähler} dein tipp ist: ${userNummer}</p><p>versuch es tiefer</p>`;
        } 
    console.log('die com nummer im spiel ist:', computerNummer);
    console.log('Zahl die eingegben worden ist: ' ,userNummer);
    // if Funktion für die Runden begrenzung
    if (rundenZähler === maxRunden) {
        outputField.innerHTML = `<p>versuch ${rundenZähler} schade die zahl war: ${computerNummer}</p><p>vielleicht beim nächsten mal</p>`;
        guessButton.removeEventListener('click', spielstart);
        guessButton.textContent = 'Neustart';
        guessButton.addEventListener('click', neustartSpiel);
        return
    }
}
//funtion zum zurück setzen des spiels
const neustartSpiel = () => {
    maxRunden = 0;
    rundenZähler = 0
    computerNummer = computerTake()
    guessButton.textContent = 'guess';
    inputField.value=''
    outputField.textContent =''
    roundenauswahlSection.classList.remove('unsichtbar')
    spielverlauf.classList.add('unsichtbar')
    guessButton.addEventListener('click', spielstart);
    guessButton.removeEventListener('click',neustartSpiel)
    roundselection.forEach(rounds => {
        rounds.checked = false;
    });

}

//eventlistener
guessButton.addEventListener('click',spielstart);

//Custom-wert per extra input-feld hinzufügen