const removeFromArray = function(...args) {
    arr = args[0];

    toRemove = []
    if (args.length > 1) {
        for (i = 1; i < args.length; i++) {
            toRemove.push(args[i]);
        }
    }

    toReturn = []
    for (i = 0; i < arr.length; i++) {
        if (toRemove.includes(arr[i])) {
            continue;
        }
        toReturn.push(arr[i]);
    }

    return toReturn;
};

// Do not edit below this line
module.exports = removeFromArray;
