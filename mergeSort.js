function merge(arrayA , arrayB){
    //we are using variable's(i,j) instead of a loop to keep track of the number of elements filled in the sorted array
    let i = 0; 
    let j = 0;
    const array = [];

    let numberOfLoops = arrayA.length + arrayB.length;

    for(let a = 0 ; a <= numberOfLoops ; a++){

        // if all arrayA elements are filled
        if(i >= arrayA.length){
            for(let b = j ; b < arrayB.length ; b++){
                array.push(arrayB[b]);
                j++;
            }
        }

        // if all arrayB elements are filled
        if(j >= arrayB.length){
            for(let c = i ; c < arrayA.length ; c++){
                array.push(arrayA[c]);
                i++;
            }
        }

        // if array contains all elements then return
        if(array.length == arrayA.length + arrayB.length) return array;

        if(arrayA[i] < arrayB[j]){
            array.push(arrayA[i++]);
        }else if(arrayA[i] > arrayB[j]){
            array.push(arrayB[j++]);
        }else if(arrayA[i] === arrayB[j]){
            array.push(arrayA[i++]);
            array.push(arrayB[j++]);
        }
    }

    return array;
}

function mergeSort(unsortedArray){
    let low = 1;
    let high = unsortedArray.length;

    if(low < high){
        if(high%2 == 0) {high -= 1};
        let mid = (low + high)/2;

        let arrayA = mergeSort(unsortedArray.slice(0 , mid));
        let arrayB = mergeSort(unsortedArray.slice(mid));
        let mergedArray = merge(arrayA , arrayB);
        return mergedArray;
    }

    // this is our base case for recursion
    if(low === high) return unsortedArray;
}

let sampleArray = [3, 2, 1, 13, 8, 5, 0, 1];
let sampleArray1 = [105, 79, 100, 110];

console.log(mergeSort(sampleArray));
console.log(mergeSort(sampleArray1));