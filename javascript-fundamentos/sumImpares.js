const sumOddUntilLimit = (oddLimitNumber) => {
    let sum = 0;
    for (let i=1; i <= oddLimitNumber; i+=2) {
        //sum = sum + i;
        sum += i;
    }
    return sum;
}

const sumOddFirst = (firstOddNumber) => {
    let sum = 0;
    for (let i = 0; i< firstOddNumber; i++) {
        let nextOddNumber = i * 2 + 1;
        sum += nextOddNumber;
    }
    return sum;
}