// Descrizione:
// Un alert() espone 5 numeri generati casualmente.
// Da li parte un timer di 30 secondi. Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

var numeriCasuali = [];

var numeriCasualiTotali = 5;

// Generiamo e pushiamo 5 numeri casuali
while(numeriCasuali.length < numeriCasualiTotali) {

    var casuali = numeriCasualiGenerator(1, 101);

    if (numeriCasuali.includes(casuali) == false) {

        numeriCasuali.push(casuali);
    }
}

function numeriCasualiGenerator(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}
console.log("numeri casuali", numeriCasuali);

// Stampo con l'alert, i 5 numeri casuali
alert(numeriCasuali);

// Chiediamo e pusciamo i numeri all'utente
setTimeout(numeriUtente, 3000);

var numeriInseriti = [];


function numeriUtente() {

    while (numeriInseriti.length < numeriCasualiTotali) {
        var numeriUtenteInseriti = parseInt(prompt("Inserisci i numeri che hai visto"));

        if (numeriInseriti.includes(numeriUtenteInseriti) == false) {
            numeriInseriti.push(numeriUtenteInseriti);
        }
    }
    console.log("numeri inseriti dall'utente", numeriInseriti);
}

// Numeri individuati e indovinati
