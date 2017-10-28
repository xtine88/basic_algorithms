// REVERSING A STRING

function reverseString(str){
 var a = str.split("");
 var b = a.reverse();
 var c = b.join("");
 console.log(c);
}

reverseString("hello")
reverseString("hello world")
reverseString("Greetings from Earth")
