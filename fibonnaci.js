function fib(n){
    let array1 = [0 , 1];

    for(let i = 2 ; i <= n ; i++){
        array1.push(array1[i - 1] + array1[i - 2]);
    }

    return array1;
}

function recursiveFib(n){
    if(n < 1) return [];
    if(n == 1) return [0];
    if(n == 2) return [0 , 1];


    let fibNum = recursiveFib(n - 1);
    fibNum.push(fibNum[fibNum.length - 1] + fibNum[fibNum.length - 2]);
    return fibNum;
}

console.log(recursiveFib(8));
