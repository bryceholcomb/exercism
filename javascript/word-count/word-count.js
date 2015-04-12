var words = function (phrase) {
  return phrase.split(/\s+/).reduce(addToCount, {});
};

function addToCount(words, word) {
  if (words.hasOwnProperty(word)) {
    words[word]++;
    return words;
  } else {
    words[word] = 1;
    return words;
  }
};

module.exports = words;
