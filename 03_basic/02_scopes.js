//the scope is nothing just an things written inside "{ }" ..don't get confuse in object the {} in object is to declare object they are not scope..... we find scope in functions and loops

// so the data or value is written or declare inside the scope can't be accessable outside the scope . ex-

//written outside block scope is global scope

let a = 3000;

if (true) {
  //block scope
  let a = 10;
  const b = 20;

  console.log("INNER :", a);
}

console.log(a); // we find error in this
// console.log(b);// error
// console.log(c); // c is declared using var and var do not care about block scope -  thats why we font use var keyword

//****************imp *********************** */

//the global scope is window/ browser is different than nodeJs environment  scope

//the global scope in window become methods and properties of window a

//nested scope

//let me explain with the help of example-" A small child, if asking for ice cream from their parents, would feel good, but if parents ask for ice cream from that small child, it wouldn't be nice, right?- so in here parent in function one and children is function two"

function one() {
  const userName = "Sumit";

  //child function can access parent variable but parent function can't access children variable
  function two() {
    const website = "youtube";
    console.log(userName);
  }
  // console.log(website);

  two();
}

one();

//************ intresting **************/ concept of hoisting

//hoisting means when then variable and function call before the initialization of variable and function ex-
console.log(addOne(5));
function addOne(num) {
  return num + 1;
}
// //
// console.log(addTWo(5));// show error because this function is bounded inside the variable and we cant access variable before initialisation

const addTWo = function (num) {
  return num + 2;
};
