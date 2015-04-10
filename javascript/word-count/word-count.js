var words = function (phrase) {
  function emptyStrings(element) {
    return element !== ""
  }

  var wordCount = {}
  var splitPhrase = phrase.split(/\s/).filter(emptyStrings)
  splitPhrase.forEach(function(phrase) {
    if (!wordCount[phrase] || phrase === "toString") {
      wordCount[phrase] = 1
    } else {
      wordCount[phrase]++
    }
  });
  return wordCount
}

module.exports = words;
