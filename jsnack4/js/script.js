// Snack 4 (bonus):
// Scrivi una funzione  che accetti una stringa come parametro
//  e restituisca la stringa con i caratteri ordinati alfabeticamente
// Es: riordina("webmaster") :freccia_destra: "abeemrstw"


let userChoice = prompt("inserisci una parola");

function getRename(userChoice) {
    const changeOrder = [];

    for (let i = 0; i < userChoice.length; i++) {

        changeOrder.push(userChoice[i]);
    }

    return changeOrder;
    
}

const result = getRename(userChoice);
document.querySelector(".result").innerHTML = ( "Il nome che hai inserito con le lettere ordinate alfabeticamente è: <br>" + result.sort().join(""));


