// function calculateMoney(ticketSale) {
//     if(ticketSale<0){
//         return "Invalid Number";
//     }
//     const moneyLeft = ( ticketSale * 120) - ( 500 + (8 * 50) );
//     return moneyLeft;
// }

// const result = calculateMoney(93);
// console.log(result);

// function checkName(name) {
//   if (typeof name !== "string") {
//     return "invalid";
//   }
//   const nameSize = name.length;
//   const lastChar = name[nameSize - 1].toLowerCase();
//   const characters = ["A", "y", "i", "e", "o", "u", "w"];
//   if (characters.includes(lastChar)) {
//     return "Good Name";
//   } else {
//     return "Bad Name";
//   }
// }

// const result = checkName(199);
// console.log(result);

function deleteInvalids(array){
    const numbers = [];
    // for (const element of array) {
    //     if(typeof element === 'number' && element !== 'NaN'){
    //         numbers.push(element);
    //     }
    //     // console.log(typeof iterator);
    // }
    array.includes()
    console.log(numbers);
}

deleteInvalids([ NaN, 1,12,0 ,-1 , undefined ]);
// console.log(result);
