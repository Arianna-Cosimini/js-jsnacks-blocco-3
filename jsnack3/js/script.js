// Snack 3:
// Scrivi una funzione che accetti tre argomenti:
// un array e due numeri (“a” più piccolo di “b” e “b” grande al massimo quanto il numero di elementi dell’array).
// Es:
// abbiamo un array così: arrayNumeri = [0, 1, 2, 3, 4, 5, 6]
// La nostra funzione viene dichiarata ad esempio così function tagliaArray(array, posizioneMin, posizioneMax)
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra “posizioneMin” e “posizioneMax”
// Nel nostro caso, se la chiamassimo così tagliaArray(arrayNumeri, 2, 4) ci restituirebbe un array così composto:
// [2, 3, 4]

// Array di numeri
const numbers = ["0","1","2","3","4","5","6","7","8","9","10"];
document.querySelector(".numbers").innerHTML ="Lista di numeri <br>" + numbers;
console.log(numbers)

// Posizione minima da cui far partire l'array
let minPosition = 3;
document.querySelector(".minPosition").innerHTML = "Numero da cui partire <br>" + minPosition; 
console.log(minPosition)

// Posizione massima in cui far arrivare l'array
let maxPosition = 8;
document.querySelector(".maxPosition").innerHTML = "Numero dove finire <br>" + maxPosition; 
console.log(maxPosition)


// funzione per vedere con ciclo for quali numeri di numbers sono compresi tra 3 e 8 
function getArray (numbers, minPosition, maxPosition){
const betweenNumbers = [];


for (let i = minPosition; i <= maxPosition; i++) {


    betweenNumbers.push(numbers[i])
    console.log(betweenNumbers)




}
return betweenNumbers;
};

// dichiaro la funzione
const result = getArray(numbers,minPosition,maxPosition)

// stampo in pagina il risultato
document.querySelector(".result").innerHTML = "Numeri compresi tra 3 e 8 <br>" + result;
