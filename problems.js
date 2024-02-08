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

// function password(obj){
//     const sizeOfYear = obj.birthYear.toString().length;

//     if((!Object.hasOwn(obj, 'name')) || (!Object.hasOwn(obj, 'siteName')) || (!Object.hasOwn(obj, 'birthYear')) || (sizeOfYear !== 4)){
//         return "invalid";
//     }

//     const capitalizeSiteName = obj.siteName.charAt(0).toUpperCase() + obj.siteName.substring(1);

//     const generatedPassword = capitalizeSiteName + "#" + obj.name + "@" + obj.birthYear;
//     return generatedPassword;
// }

// const passwordInfo = { name: "maisha", birthYear: 2002 }  ;

// const result = password(passwordInfo);
// console.log(result);

function monthlySavings(arr , livingCost){

    if(!Array.isArray(arr) && (typeof livingCost !== 'number')){
        return "invalid input";
    }

    let sum = 0;

    for (const payment of arr) {
        if(payment >= 3000){
            const tax = 20/100;
            const amountLeft = payment - (payment*tax);
            sum += amountLeft;
        }
        else{
            sum = sum + payment; 
        }
    }
    const savings = sum - livingCost;
    if(savings >= 0){
        return savings;
    }
    else{
        return "earn more";
    }
}

const result = monthlySavings(100, [ 900 , 2700 , 3400]);
console.log(result);