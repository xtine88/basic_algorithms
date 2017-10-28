// FACTORALIZE A NUMBER
function factorialize(num) {
  var x = 1;
  for(var i = num; i > 0; i--) {
    x *= i;

  }
  console.log(x);
}

factorialize(5);

