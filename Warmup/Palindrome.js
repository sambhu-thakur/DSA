let n = 121;
function isPalindrome(n) {

   
    let num = n  // To Store Orignal number to compare with the reverse number we store it in num variable.
    let rev = 0;
    while (n > 0) {
       let  rem = n % 10;
        n = Math.floor(n / 10)
        rev =  (10*rev) + rem; // multipy rev with 10  to add number in rev
        
    }
    // if (rev == num) {
    //     return true;
    // } else {
    //     return false
    // }


    return rev === num; //Short cut for above if else to reutrn true or false
}

let res = isPalindrome(n)

console.log(res)