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

// function deleteInvalids(array){
//     if(!Array.isArray(array)){
//         return "Invalid Array";
//     }
//     const numbers = [];
//     for (const element of array) {
//         if(typeof element === 'number' && !isNaN(element)){
//             numbers.push(element);
//         }
//     }
//     return numbers;
// }

// const result = deleteInvalids({num: [ 1 , 2 , 3 ]});
// console.log(result);


