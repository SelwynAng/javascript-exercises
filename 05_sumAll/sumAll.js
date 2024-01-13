const sumAll = function(numOne, numTwo) {
    if (typeof numOne != "number" || typeof numTwo != "number") {
        return "ERROR";
    }

    if (numOne < 0 || numTwo < 0) {
        return "ERROR";
    }

    sum = 0;

    if (numOne <= numTwo) {
        for (i = numOne; i < numTwo + 1; i++) {
            sum += i;
        }
    } else {
        for (i = numTwo; i < numOne + 1; i++) {
            sum += i;
        }
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
