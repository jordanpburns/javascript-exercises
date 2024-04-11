const sumAll = function(start, stop) {
    if (typeof start != "number" || typeof stop != "number" || start < 0 || stop < 0) {
        return 'ERROR';
    }
    let sum = 0
    const bounds = [start, stop].sort();
    start = bounds[0];
    stop = bounds[1];
    for (i = start; i <= stop; i += 1) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
