// Problem-01:
function calculateMoney(ticketSale) {
    if(ticketSale<0){
        return "Invalid Number";
    }
    const moneyLeft = ( ticketSale * 120) - ( 500 + (8 * 50) );
    return moneyLeft;
}
const result = calculateMoney(93);
console.log(result);