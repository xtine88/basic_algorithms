// FACTORALIZE A NUMBER 28Oct17
function factorialize(num) {
  if(num === 0){
    return 1;
  }
  return num*factorialize(num-1);
}

factorialize(5);
