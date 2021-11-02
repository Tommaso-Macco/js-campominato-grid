// Consegna L’utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata,
// in cui ogni cella contiene un numero tra quelli compresi in un range:
// con difficoltà 1 => tra 1 e 100
// con difficoltà 2 => tra 1 e 81
// con difficoltà 3 => tra 1 e 49
// Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro (o simili, l’importante è dare all’utente il feedback che ha scoperto una casella che rimarrà scoperta, con il numero relativo).

// Collegiamo una variabile all'html
const contBox = document.getElementById("containerbox")
console.log(contBox);

// Chiediamo all'utente a quale difficoltà vorrà giocare

let difficulty = prompt("Decidi la difficoltà(Facile - Media - Difficile)")
console.log(difficulty);

// dopo che l'utente ha deciso la difficoltà facciamo creare al computer la tabella con i quadrati per la difficoltà eseguita

if (difficulty == "Facile") {
    for (let i = 0; i < 100; i++) {
        contBox.innerHTML += `<div class="square"></div>`   
    }
}else if (difficulty == "Media") {
    for (let i = 0; i < 81; i++) {
        contBox.innerHTML += `<div class="square"></div>`   
    }
}else {
    for (let i = 0; i < 49; i++) {
        contBox.innerHTML += `<div class="square"></div>`   
    }
}