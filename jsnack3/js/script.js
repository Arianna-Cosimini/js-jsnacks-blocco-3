// Snack 3:
// Scrivi una funzione che accetti tre argomenti:
// un array e due numeri (“a” più piccolo di “b” e “b” grande al massimo quanto il numero di elementi dell’array).
// Es:
// abbiamo un array così: arrayNumeri = [0, 1, 2, 3, 4, 5, 6]
// La nostra funzione viene dichiarata ad esempio così function tagliaArray(array, posizioneMin, posizioneMax)
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra “posizioneMin” e “posizioneMax”
// Nel nostro caso, se la chiamassimo così tagliaArray(arrayNumeri, 2, 4) ci restituirebbe un array così composto:
// [2, 3, 4]

const numbers = ["0" ," 1"," 2"," 3", "4"," 5"," 6", "7", "8", "9", "10"]
console.log(numbers)

let minPosition = 3;
console.log(minPosition)


let maxPosition = 8;
console.log(maxPosition)



// function getArray (numbers, minPosition, maxPosition){
const betweenNumbers = [];
console.log(betweenNumbers)

for(let i = 0; i >= numbers; i ++){

    if(i >= 3 && i <= 8){
        betweenNumbers.push(numbers[i])
        
    }

}


// return betweenNumbers;
// }

// const result = getArray(numbers,minPosition,maxPosition)

