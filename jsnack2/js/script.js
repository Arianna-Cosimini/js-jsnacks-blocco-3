// // Snack 2:
// // Scrivi una funzione che fonda due array presi come parametri
//  (date per scontato che abbiano lo stesso numero di elementi) 
//  prendendo alternativamente gli elementi da uno e dall’altro
// es. [a,b,c], [1,2,3] → [a,1,b,2,c,3].
// const buttonElement = document.querySelector("button");
// buttonElement.addEventListener("click", function () {

//     // creo array nomi
//     const userName = document.querySelector("#userName").value;
//     const nameList = [];
//     // ["Arianna","Nicolò","Emenuele"];

//     // creo array numeri
//     const userNumber = document.querySelector("#userNumber").value;
//     const numberList = [];


//     for (let i = 0; i < nameList.length; i++) {
//         nameList.push(userName[i])
//         console.log(nameList)
//     }

//     for (let i = 0; i < numberList.length; i++) {
//         numberList.push(userNumber[i])
//         console.log(numberList)
//     }




//    




// })

const nameList = ["Arianna","Nicolò","Emenuele"];

document.querySelector(".names").innerHTML = `Lista di nomi: <br> ${nameList}`

const numberList = ["27", "33","5"]
document.querySelector(".numbers").innerHTML = `Lista di numeri: <br> ${numberList}`


function betweenArray(nameList, numberList) {
    const numberPlusNameList = [];


   
        for (let i = 0; i < numberList.length; i++) {

            numberPlusNameList.push(nameList[i])
            numberPlusNameList.push(numberList[i])

            console.log(numberPlusNameList)
        }



    return numberPlusNameList;
}

    let result = betweenArray(nameList, numberList);
    document.querySelector(".result").innerHTML = `Lista di nomi alternata a lista di numeri: <br> ${result}`

