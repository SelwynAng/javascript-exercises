const repeatString = function(str, num) {
    toReturn = '';
    if (num < 0) {
        return "ERROR";
    }
    for (i = 0; i < num; i++) {
        toReturn += str; 
    }

    return toReturn;
};

// Do not edit below this line
module.exports = repeatString;
