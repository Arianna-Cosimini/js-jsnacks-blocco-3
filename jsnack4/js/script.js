// Snack 4 (bonus):
// Scrivi una funzione  che accetti una stringa come parametro
//  e restituisca la stringa con i caratteri ordinati alfabeticamente
// Es: riordina("webmaster") :freccia_destra: "abeemrstw"

// Chiedo all'uteente di inserire una parola
let userChoice = prompt("inserisci una parola");

// Creao funzione per iterare le lettere della parola inserita dall'utente
function getRename(userChoice) {
    const changeOrder = [];

    for (let i = 0; i < userChoice.length; i++) {

        changeOrder.push(userChoice[i]);
    }

    return changeOrder;
    
}

// dichiaro funzione
const result = getRename(userChoice);

// stampo il risultato in pagina 
document.querySelector(".result").innerHTML = ( "Il nome che hai inserito con le lettere ordinate alfabeticamente è: <br>" + result.sort().join(""));


