//Q1. Explain the difference between hoisting and the Temporal Dead Zone with examples. 
// hoisting is moving variable and functions to the top of the syntax in the compiler and not sure about what is temporal dead zone

//Why does strict equality (===) return false when comparing two reference types with the      same values? 
//strict equality return false beacuse it dosenot c                               declaration and for exmaple if there are two same objects in a let then the return=== is false because these two objects have not the same let 

// Why is const not considered fully immutable? 
//as the const word declares constant and constant means an object which is fully constant so the const is not considered fully immutable

//How do control flow statements affect program execution and readability? 
// control flow statements are (if/else , loops etc ) so the control flow statement runs only when the condition is declared and not run from top to the bottom so it affect program execution and readabiltiy

//Explain how && and || operators perform short-circuit evaluation. 
//not sure about this 





// sayHello();
// function sayHello() {
//        console.log("Hello");
// }
// sayBye(); 
// var sayBye = function () {
//        console.log("Bye");
// }; 
// the first oone works and the other one not because the second one use var instead of declare a function and var hoists only the declaration, not the value. So var sayBye is hoisted to the top as undefined



// for loop from 1 t0 20
//● Prints:
//  ○ "Fizz" if number is divisible by 3  
// ○ "Buzz" if divisible by 5 
//  ○ "FizzBuzz" if divisible by both 
for (let i = 1; i <= 20; i++) {
  if (i%3===0 && i%5===0) {
    console.log("FizzBuzz");
  } else if (i%3===0) {
    console.log("Fizz");
  } else if (i%5===0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}

//JS checks i % 3 === 0 && i % 5 === 0 — is it divisible by both?
// If true prints "FizzBuzz"
// If false moves to i % 3 === 0 — divisible by 3 only?
// If false moves to i % 5 === 0 — divisible by 5 only?
// If all are false falls to else prints the number itself