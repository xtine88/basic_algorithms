// REVERSING A STRING 28Oct2017

function reverseString(str){
 var a = str.split("");
 var b = a.reverse();
 var c = b.join("");
 console.log(c);
}

reverseString("hello")
reverseString("hello world")
reverseString("Greetings from Earth")

// REFACTORED VERSION

function reverseString(str){
  console.log(str.split("").reverse().join(""));
}

reverseString("This is my string")
reverseString("Christine")
