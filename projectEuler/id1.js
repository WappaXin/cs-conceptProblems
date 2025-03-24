// // the task is to write this in recursion

// function sumOfMultiplesOf3And5(num){
    
//     function step(n){
//         let total = 0;

//         if(n < 10){
//             for(let j = 0 ; j < n ; j++){
//                 if(((n - j)%3 == 0) || ((n - j)%5 == 0)){
//                     total += (n - j);
//                 }
//             }

//             return total;
//         }
    
//         if(n >= 10){
//             for(let i = 0 ; i < 10 ; i++){
//                 if(((n - i)%3 == 0) || ((n - i)%5 == 0)){
//                     total += (n - i);
//                 }
//             }
    
//             return total + step(n - 10);
//         }
//     }

//     let total1 = 0;

//     if(num < 10){
//         for(let j = 1 ; j < num ; j++){
//             if(((num - j)%3 == 0) || ((num - j)%5 == 0)){
//                 total1 += (num - j);
//             }
//         }
//         return total1;
//     }else {
//         return step(num) - num;
//     }
// }

// console.log(sumOfMultiplesOf3And5(10));
// console.log(sumOfMultiplesOf3And5(6));
// console.log(sumOfMultiplesOf3And5(1000));


// Improved version

function sumOfMultiplesOf3And5(baseNum){

    baseNum -= 1;

    function step(baseNum1 , sum = 0){
        // base case
        if(baseNum1 <= 2) return 0;

        // recursive call and return
        return sum + ((baseNum1%3 === 0 || baseNum1%5 === 0 ) ? baseNum1 : 0) + step(baseNum1 - 1, sum = 0);
    }

    return step(baseNum);

}

console.log(sumOfMultiplesOf3And5(1000)); //234168