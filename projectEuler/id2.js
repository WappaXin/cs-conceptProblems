// non-recursive

// function sumOfEvenFactorials(limit){
//     let array = [0,1];
//     while((array[array.length - 1] + array[array.length -2]) < limit){
//         array.push(array[array.length - 1] + array[array.length -2]);
//     }

//     function fiterFunc(num){
//         return num%2 !== 0 ;
//     }

//     function reduceFunc(total , num){
//         return total += num ;
//     }

//     let array1 = array.filter(fiterFunc); 
//     return array1.reduce( reduceFunc , 0 );
// }

// function sumOfEvenFactorials(limit){
//     let array = [0,1];
//     while((array[array.length - 1] + array[array.length -2]) < limit){
//         array.push(array[array.length - 1] + array[array.length -2]);
//     }

//     return array.filter((num) => {return num%2 != 0 })
//                 .reduce((total , num) => {return total += num} , 0 );
// }

// console.log(sumOfEvenFactorials(4000000)); //4613732

// recursively

function sumOfEvenFactorialsRecursive(a , b, limit){
    // base case
    if(a > limit) return 0;

    // recursive call and return
    return ((a%2 === 0) ? a : 0) + sumOfEvenFactorialsRecursive(b , a + b, limit);
}

console.log(sumOfEvenFactorialsRecursive(1 , 2, 4000000)); //4613732