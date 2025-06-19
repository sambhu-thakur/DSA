// (Q1) Write a function that searches for na element in an array and retun the index, if the element is no present then just return -1

let arr = [4, 2, 0, 10, 8, 35,50]
function serachEelement(arr, num) {

    for (let i = 0; i < arr.length; i++){
        if (arr[i] == num)   {
            return i;
        }
        
    
    }   
  return -1

}

// let res = serachEelement(arr, 2)
// console.log(res)

// (Q2) wirte a function that return the number of negative number in array
let arr2 = [4, -2, 0, -10, 8, -30, -50]

function countNegatives(arr) {

    let count = 0
    for (let i = 0; i < arr2.length; i++){

        if (arr[i] < 0) {
            count++
        }
    }

    return count
}
// let res2 = countNegatives(arr2)
// console.log(res2)


// Write  a function that return largest number in an array

function largestNumber() {
    let largest = arr[0]
    for (let i = 0; i < arr.length; i++){
        if (largest < arr[i]){
            largest = arr[i]
        }
    }
    return largest;
}
// let res = largestNumber(arr)
// console.log(res)


let arr3 = [4, 2, 0, 10, 8, 35, 50]

function smallestNumber() {
    let smallestnum =  Infinity
    for (let i = 0; i < arr3.length; i++){
        if (arr3[i] < smallestnum) {
            smallestnum = arr3[i]
        }
    }
    return smallestnum
}
let res = smallestNumber(arr3)
console.log(res)
