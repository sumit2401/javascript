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
