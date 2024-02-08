// Problem-3
function deleteInvalids(array){
    if(!Array.isArray(array)){
        return "Invalid Array";
    }
    const numbers = [];
    for (const element of array) {
        if(typeof element === 'number' && !isNaN(element)){
            numbers.push(element);
        }
    }
    return numbers;
}

const result = deleteInvalids([1 , null, undefined, 18, -19, NaN, "12", [1, 2], { ob: "lala" }]);
// const result = deleteInvalids("1" , {num:2} , NaN ]);
// const result = deleteInvalids([ 1 , 2 , -3 ]);
// const result = deleteInvalids({num: [ 1 , 2 , 3 ]});
console.log(result);