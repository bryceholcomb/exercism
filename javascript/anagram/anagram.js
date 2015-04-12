var Anagram = function(subject) {
  return {
    matches: function(words) {
      var matches = [];
      words.forEach(function(ele, index, array) {
        console.log(ele);
      });
    }
  };
};

module.exports = Anagram;
