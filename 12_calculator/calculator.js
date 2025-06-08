const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	return arr.reduce((acc, curr) => {return acc + curr}, 0);
};

const multiply = function(arr) {
  return arr.reduce((acc, curr) => {return acc * curr}, 1);
};

const power = function(a, b) {
	return Math.pow(a, b);
};

const factorial = function(num) {
  if (num === 0) return 1;

	const result = [];
  for (let i = num; i >= 1; i--) {
    result.push(i);
  }
  return multiply(result);
  
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
