// largest palidrome formed using the product of two 3 digit numbers recursively

function largestPalindrome(i = 100 , j = 100){
    let array1 = [];

outerLoop: for(i ; i <= 999 ; i++ , j = 100){
        for(j ; j <= 999 ; j++){
            let product = i*j;
            const array = product.toString().split("");
            
            if(array[0] === array[array.length - 1]){
                if(product === +(array.reverse().join(""))){
                    array1.push(product);
                    break outerLoop;
                }
                
            }
        }
        if((i === 999) && (j === 1000)){return 1}
        if(i < 999) {j = 100}
    }

    array1.push(largestPalindrome(i, j + 1));
    array1.sort((a,b) => a - b);
    array1.shift();
    return array1[0];
}

console.log(largestPalindrome()); //906609

// another aproach would be to go from backwards that is both i and j from 999 to 100
// you just have to find the first palindrome from the backwards
// you have found the largest one lol
// after writing the above solution and finding out about this solution
// is kind of a funny joke on myself