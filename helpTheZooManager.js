// Problem-1:
function calculateMoney(ticketSale) {
    if(ticketSale<0){
        return "Invalid Number";
    }
    const moneyLeft = ( ticketSale * 120) - ( 500 + (8 * 50) );
    return moneyLeft;
}
const result = calculateMoney(10);
// const result = calculateMoney(1055);
// const result = calculateMoney(93);
// const result = calculateMoney(-130);
console.log(result);