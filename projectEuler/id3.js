// this was done recursively as a task

function largestPrimeFactorOf(num){

    let array = [];
    let currentPrimeNum = 2;
        
    function nextPrimeFactor(currentPrimeNum1){
        searchForNextPrimeNum: for(let i = currentPrimeNum1 + 1 ; i > currentPrimeNum1 ; i++ ){
            for(let j = 2 ; j < i ; j++){
                if(i%j === 0){
                    continue searchForNextPrimeNum; 
                }
            }
            currentPrimeNum = i;
            break searchForNextPrimeNum;
        }
        return currentPrimeNum;
    }

    function recursiveCall(primeNum){
        array.push(primeNum);
        array.push(largestPrimeFactorOf(num / primeNum));
        array.sort((a,b) => {return a - b});
        array.shift();
        return array[0];
    }

    // base case
    if(num <= 1){array.push(1); return array;}
    
    // recursive call
    if(num%2 === 0){
        return recursiveCall(2);
    }else {
        nextPrimeFactor(currentPrimeNum);
        while(num%currentPrimeNum !== 0){
            nextPrimeFactor(currentPrimeNum);
        }

        if(num%currentPrimeNum === 0){
            return recursiveCall(currentPrimeNum);
        }

    }
}

console.log(largestPrimeFactorOf(13195)); //29
console.log(largestPrimeFactorOf(600851475143)); //6857