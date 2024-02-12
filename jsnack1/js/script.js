// Snack 1:
// Scrivi una funzione che accetti una stringa come argomento e la restituisca girata (es. "Ciao" -> "oaiC")

const buttonElement = document.querySelector("button").addEventListener("click", function(){

    let userChoice = document.querySelector("#userChoice").value;
    console.log(userChoice);



    function getReverseWord (userChoice){
        const reverseWords = [];
        for (let i = userChoice.lenght -1; i >= 0; i-- ){
            reverseWords.push(userChoice[i]);
        }

        return reverseWords.join('');
    }



});