const repeatString = function(string, numberOfRepeats) {
    if (numberOfRepeats < 0) {
        return 'ERROR';
    }
    let returnString = ''
    for (i = 0; i < numberOfRepeats; i += 1) {
        returnString += string;
    }
    return returnString
}

// Do not edit below this line
module.exports = repeatString;
