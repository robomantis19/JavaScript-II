// ==== Challenge 1: Write your own closure ====
// Write a closure of your own creation.
// Keep it simple! Remember a closure is just a function
// that manipulates variables defined in the outer scope.
// The outer scope can be a parent function, or the top level of the script.
const myColor = function(){
  var color = ['red', 'green', 'blue'];
  var rgb = color[Math.floor(Math.random() *3)];
  function myColor1(){
    return `The color we paint with now is ${rgb}`
  }
  return myColor1()
}
let one = myColor();
let two = myColor();
console.log(one);
console.log(one);
console.log(two);



/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Implement a "counter maker" function ====
const counterMaker = () => {
  // IMPLEMENTATION OF counterMaker:
  // 1- Declare a `count` variable with a value of 0. We will be mutating it, so declare it using `let`!
  let count = 0; 
  return function (){
    count += 1;
    return count;
  }
  
  

  // 2- Declare a function `counter`. It should increment and return `count`.
  //      NOTE: This `counter` function, being nested inside `counterMaker`,
  //      "closes over" the `count` variable. It can "see" it in the parent scope!
  // 3- Return the `counter` function.
};
const myCount = counterMaker();
console.log(myCount())
console.log(myCount());
console.log(myCount());

// console.log(counterMaker());

// Example usage: const myCounter = counterMaker();
// myCounter(); // 1
// myCounter(); // 2

// ==== Challenge 3: Make `counterMaker` more sophisticated ====
// It should have a `limit` parameter. Any counters we make with `counterMaker`
// will refuse to go over the limit, and start back at 1.
const TheCounter = function(){
  counter = 0; 
  return function (){
     if(counter < 4){
       counter += 1;
       return counter;
     }else{
       counter = 0;
       return counter;
     }
  }
}
var limiting = TheCounter();
console.log("limiting counter function starting below..");
console.log(limiting());
console.log(limiting());
console.log(limiting());
console.log(limiting());
console.log(limiting());
console.log(limiting());
// ==== Challenge 4: Create a counter function with an object that can increment and decrement ====

console.log('counterFactory below ===========')
const counterFactory = (arg) => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  let counter = 0;
  
  
  if(arg == 'increment'){
    return function (){
      counter += 1;
      return counter;
    }

  }else if (arg=='decrement'){
    return function (){
      counter -= 1; 
      return counter; 
    }
  }
};
var increment = counterFactory('increment');
console.log(increment())
console.log(increment())
let decrement = counterFactory('decrement');
console.log(decrement());
console.log(decrement());