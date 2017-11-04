function findLongestWord(str){
  var words= str.split(' ');
  var wordLength = [];
   for(var i = 0; i < words.length; i++){
    wordLength.push(words[i].length);
    }
    return Math.max(...wordLength);
  }
}

// findLongestWord("The quick brown box jumpted over the lazy dog");

// // Get string and split to an array
// var words= str.split(' ');

// // Do a for loop to iterate through the array
// var wordLength = [];
// for(var i = 0, i < words.length, i++){
//   wordLength.push(words[i].length);
//   console.log(wordLength);
//   return Math.max(...wordLength);
// }
// use the .length method on each iteration

// use the .pop method to return last item in the array



