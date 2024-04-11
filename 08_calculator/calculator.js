const add = function(addend1, addend2) {
	return parseInt(addend1) + parseInt(addend2);
};

const subtract = function(num1, num2) {
	return parseInt(num1) - parseInt(num2);
};

const sum = function(array) {
	return array.reduce((a, b) => a + b, 0);
};

const multiply = function() {
  const args = Array.from(arguments);
  let answer = 1;
  for (num of args) {
    answer *= num;
  }
  return answer;
};

const power = function(base, exponent) {
	let answer = 1;
  for (i = 0; i < exponent; i += 1) {
    answer = answer * base;
  }
  return answer;
};

const factorial = function(num) {
	let answer = 1;
  for (i = 1; i <= num; i += 1) {
    answer *= i;
  }
  return answer;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
