function Raindrops() {};

Raindrops.prototype.convert = function(number) {
  var answer = "";

  if (number % 3 === 0) { answer += "Pling"; }
  if (number % 5 === 0) { answer += "Plang"; }
  if (number % 7 === 0) { answer += "Plong"; }
  if (answer === "") {
    return number.toString();
  } else {
    return answer;
  }
};

module.exports = Raindrops;
