// Find the second Largest number in an array

            //Approch 1
            
let arr = [10,20,20,5,4,3]

function secondLargesNumber(arr) {

    let largest = -Infinity
    let secondLargest = -Infinity

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i]
        }

    }
    for (let i = 0; i < arr.length; i++){
        if ((largest !== arr[i]) && (arr[i] > secondLargest)) {
            secondLargest = arr[i]
        }
    }
    return secondLargest;
}

let res = secondLargesNumber(arr);
console.log(res)

// Find the second Largest number in an array

            //Approch 2


function secondLargest(arr){
    let firstlargest = -Infinity;
    let secondLargest = -Infinity;

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] > firstlargest) {

            secondLargest = firstlargest;
            firstlargest = arr[i];
        }
       else if (arr[i] > secondLargest && arr[i]!=firstlargest) {
            secondLargest = arr[i];
        }

    }
    return secondLargest;
} 
let res2 = secondLargest(arr);
console.log(res2)