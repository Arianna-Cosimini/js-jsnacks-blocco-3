// // Snack 2:
// // Scrivi una funzione che fonda due array presi come parametri
//  (date per scontato che abbiano lo stesso numero di elementi) 
//  prendendo alternativamente gli elementi da uno e dall’altro
// es. [a,b,c], [1,2,3] → [a,1,b,2,c,3].

// creo array nomi
const nameList = ["Arianna","Nicolò","Emenuele"];
console.log(nameList)

// creo array numeri
const numberList = ["27","33","5"]
console.log(numberList)


function betweenArray (nameList, numberList){
    const numberPlusNameList = [];
    for (let i = 0  ; i <  numberList.length; i++ ){
        numberPlusNameList.push(nameList[i])
        numberPlusNameList.push(numberList[i])
        console.log(numberPlusNameList)
    }
}

betweenArray (nameList,numberList);
// console.log(betweenArray)
// console.log(nameList.length[i] + 1)