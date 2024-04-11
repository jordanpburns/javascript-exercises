const reverseString = function(string) {
    const stringArray = string.split('');
    let returnString = '';
    for (char of stringArray) {
        returnString = char + returnString;
    }
    return returnString;
};

// Do not edit below this line
module.exports = reverseString;
