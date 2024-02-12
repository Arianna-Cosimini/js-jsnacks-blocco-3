// Snack 1:
// Scrivi una funzione che accetti una stringa come argomento e la restituisca girata (es. "Ciao" -> "oaiC")

const buttonElement = document.querySelector("button").addEventListener("click", function () {

    let userChoice = document.querySelector("#userChoice").value;
    console.log(userChoice);



    // creo funzione per ripercorrere la parola inserita dall'utente
    function getReverseWord(userChoice) {

        // array per memorizzare le lettere della parola inserita dall'utente
        const reverseLetters = [];

        // ciclo per poter ripercorrere in senso contrario le lettere inserite dall'utente 
        for (let i = userChoice.length - 1; i >= 0; i--) {
            reverseLetters.push(userChoice[i]);
        }

        // valore che mi rende la funzione con metodo join, ovvero unire gli elemeni di un array in una stringa
        return reverseLetters.join('');
        
    }

    // variabile per la memorizzazione dell'array con parola invertita
    const reverseWords = getReverseWord(userChoice);

    // stampo risultato in pagina
    let result = document.querySelector(".result").innerHTML = `La parola che hai inserito con le lettere invertite è: <br> ${reverseWords}`

    // Reset dei valori
    document.querySelector("#userChoice").value = "";
    
});