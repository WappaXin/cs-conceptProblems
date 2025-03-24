// It was a task to solve this recursively

function numberDivisibleByNumbersFrom1Till(m1){
    let m = m1 -1;

    for(let i = m1 ; i%m1 === 0 ; i+= m1){
        if(i%m === 0){
            let returnValue = step(m -1 , i); 
            if(returnValue !== 0) return returnValue;
        }
    }

    function step(divisor , dividend){
        if(dividend%divisor === 0){
            // base case
            if(divisor === 1) return dividend;

            // recursive call
            return step(divisor - 1, dividend)
        }
        return 0;
    }

}

console.log(numberDivisibleByNumbersFrom1Till(21)); //232792560