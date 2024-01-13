const convertToCelsius = function(temp) {
  conv = (temp - 32) / (9 / 5);
  return parseFloat(conv.toFixed(1));
};

const convertToFahrenheit = function(temp) {
  conv = (temp * 9 / 5) + 32;
  return parseFloat(conv.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};