const convertToCelsius = function(temp) {
  let tempInCelsius = (temp - 32) * (5 / 9);
  return (Math.round(tempInCelsius * 10) / 10);
};

const convertToFahrenheit = function(temp) {
  let tempInFahrenheit = (9 / 5) * temp + 32;
  return (Math.round(tempInFahrenheit * 10) / 10);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
