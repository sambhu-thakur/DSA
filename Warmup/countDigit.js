let n = 123456789
function countDigit(n) {
  
    let count = 0;

    while (n > 0) {
 //Handling to remove digit after decimail Math.floor
        n = Math.floor(n /10); 
        count++
    }
    return count
}

let res = countDigit(n);
console.log(res)


// cornre cases when number = 0

let num = 0

function countDigiit2(n) {
    // if number is 0 we will just rturn 1
    if (n == 0) return 1
    let count = 0;

    while (n > 0) {
        n = Math.floor(n / 10) 
        count++;
    }
    return count

}

let res2 = countDigiit2(num);
console.log(res2)

// cas when number is negative

let numNeg = -1234
function countDigitCaseNegative(n) {
    //convert negativenumber to positive
    n = Math.abs(n)

    let count = 0;
    while (n > 0) {
        n = Math.floor(n / 10);

        count++
    }
    return count;
    
}

let res3 = countDigitCaseNegative(numNeg)
console.log(res3)