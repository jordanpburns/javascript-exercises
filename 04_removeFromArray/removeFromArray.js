const removeFromArray = function(array) {
    const args = Array.from(arguments);
    const toRemove = args.slice(1);
    for (itemToRemove of toRemove) {
        array = array.filter((item) => item !== itemToRemove);
    }
return array
};

// Do not edit below this line
module.exports = removeFromArray;
