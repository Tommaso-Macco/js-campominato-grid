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

let difficulty = prompt("Decidi la difficoltà ( Facile - Media - Difficile )")
console.log(difficulty);

// dopo che l'utente ha deciso la difficoltà facciamo creare al computer la tabella con i quadrati per la difficoltà eseguita

if (difficulty == "Facile") {
    for (let i = 0; i < 100; i++) {
        const element = document.createElement('div');
        // Mettiamo che al click li venga data una classe active per il cambio di colore
        element.addEventListener("click",
            function clickActive() {
                element.classList.add("active")
            }
        );
        element.classList.add('square');
        contBox.appendChild(element);
    }
}else if (difficulty == "Media") {
    for (let i = 0; i < 81; i++) {
        const element = document.createElement('div');
        // Mettiamo che al click li venga data una classe active per il cambio di colore
        element.addEventListener("click",
            function clickActive() {
                element.classList.add("active")
            }
        );
        element.classList.add('square');
        contBox.appendChild(element);   
    }
}else {
    for (let i = 0; i < 49; i++) {
        const element = document.createElement('div');
        // Mettiamo che al click li venga data una classe active per il cambio di colore
        element.addEventListener("click",
            function clickActive() {
                element.classList.add("active")
            }
        );
        element.classList.add('square');
        contBox.appendChild(element);
    }
}





/*
function somma(a, b) {
    return a+b;
}

const risultato = somma(2, 4); // 6
*/