const ftoc = function(fahrenheit) {
  celsius = (fahrenheit-32) * (5/9)
  return roundToOneDecimal(celsius);
};

const ctof = function(celsius) {
  fahrenheit = celsius*(9/5) + 32
  return roundToOneDecimal(fahrenheit);
};

function roundToOneDecimal(float){
  return Math.round(float * 10) / 10;
}

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
