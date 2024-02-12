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

const numberList = ["27", "33","5"]

function betweenArray(nameList, numberList) {
    const numberPlusNameList = [];


    if (nameList.length < numberList.length) {
        nameList.push(userName)
    } else if (numberList.length < nameList.length) {
        numberList.push(userNumber)
    } else if (nameList.length == numberList.length) {

        for (let i = 0; i < numberList.length; i++) {

            numberPlusNameList.push(nameList[i])
            numberPlusNameList.push(numberList[i])

            console.log(numberPlusNameList)
        }
    }



    return numberPlusNameList;
}

    let result = betweenArray(nameList, numberList);
    console.log(result)


