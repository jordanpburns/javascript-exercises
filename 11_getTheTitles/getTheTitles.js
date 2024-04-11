const getTheTitles = function(books) {
    let titleArray = [];
    for (book of books) {
        titleArray.push(book.title)
    }
    return titleArray;
};

// Do not edit below this line
module.exports = getTheTitles;
