//*******IMMEDIATELY INVOKED FUNCTION EXPRESSION (IIFE) */

//This pattern helps create a local scope for variables, preventing them from polluting the global scope...
//iife function immediately execute after the declaration
// semicolon";" at the end of syntax is mandatory
//syntax
(function () {
  console.log(`DB CONNECTED`);
})();

//first () for declaration of function and the second () for executiom
