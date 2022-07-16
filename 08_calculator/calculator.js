const add = function(a,b) {
	return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(array) {
  return array.reduce((total, current) => total + current, 0);
  };

const multiply = function(array) {
 return array.reduce((total, item) => total * item, 1);
};

const power = function(a, b) {
	return a**b;
};

const factorial = function(n) {
  if (n === 0) return 1;
	for (let i = 1; i < n; i++){
    n *=i;
  }
  return n;
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
