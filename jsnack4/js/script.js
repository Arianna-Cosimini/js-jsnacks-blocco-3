// Snack 4 (bonus):
// Scrivi una funzione  che accetti una stringa come parametro
//  e restituisca la stringa con i caratteri ordinati alfabeticamente
// Es: riordina("webmaster") :freccia_destra: "abeemrstw"


let userChoice = prompt("inserisci una parola");


const result = [];
for(let i = 0; i < userChoice.length; i++){

    result.push(userChoice[i])
    console.log(result.sort())
}