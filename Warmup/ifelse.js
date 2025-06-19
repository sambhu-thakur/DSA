function eligibleVoter(name, age) {
    if (age < 0) {
        console.log('invalid input')
    }
   else if (age > 17) {
        console.log(name + 'is eligible to vote')
    } else {
        console.log(name + 'is not elgible for vote')
    }
}

function evenOdd(num) {
    if (num % 2 == 0) {
        console.log('even')
    } else {
        console.log('oddd')
    }
}
eligibleVoter('shambu', 17)
eligibleVoter('shambu', 26)
eligibleVoter('shambu', -1)

evenOdd(6)
evenOdd(99)