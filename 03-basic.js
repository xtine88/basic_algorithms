function palindrome(str){
  var a = str.replace(/[\W_]/g,"").toLowerCase();
  var b = a.split('').reverse().join('');

  if(a === b){
    console.log(true);
  }else {
    console.log(false);
  }
}

palindrome("race car")

// var a = str.replace(/[\W_]/g," ").toLowerCase();
// var b = a.split(' ').reverse().join(' ');

// if(a === b){
//   return true;
// }else {
//   false
// }
