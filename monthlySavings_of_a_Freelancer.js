function monthlySavings(arr , livingCost){

    if(!Array.isArray(arr) || (typeof livingCost !== 'number')){
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

// const result = monthlySavings([ 1000 , 2000 , 3000 ] , 5400);
// const result = monthlySavings([ 1000 , 2000 , 2500 ] , 5000);
const result = monthlySavings([ 900 , 2700 , 3400] , 10000);
// const result = monthlySavings(100, [ 900 , 2700 , 3400]);
console.log(result);