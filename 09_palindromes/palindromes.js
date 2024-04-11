const palindromes = function (word) {
    word = word.replace(/[^\w]/g, "");
    word = word.toLowerCase(); 
    for (i = 0; i < word.length; i += 1) {
        if (word[i] != word[word.length - i - 1]) {
            return false;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
