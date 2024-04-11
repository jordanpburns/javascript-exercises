const fibonacci = function(n) {
    if (n < 0) {
        return "OOPS"
    }
    if (n == 1) {
        return 1;
    }
    else if (n == 2) {
        return 1;
    } else {
        return fibonacci(parseInt(n) - 1) + fibonacci(parseInt(n) - 2);
    }
};

// Do not edit below this line
module.exports = fibonacci;
