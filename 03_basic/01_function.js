//function is actually a package of data which is accessable just by execution of funtion

function callMyName() {
  console.log("S");
  console.log("u");
  console.log("m");
  console.log("i");
  console.log("t");
}

//accessing function

// callMyName();

// function addTwoNumbers(num1, num2) {
//   //the value we pass while defininig the function is parameters
//   console.log(num1 + num2);
// }

function addTwoNumbers(num1, num2) {
  //   let result = num1 + num2;
  //   return result;

  return num1 + num2;
  //the code the value which is written below return then it will not count in function
}
const result = addTwoNumbers(2, 2);
// console.log("Result: ", result); //the value we pass while calling function is argument.
//ex- (num1,num2) are parameters and (2,2) is arguments

function loginUserMessage(username) {
  return `${username} just logged in`;
}

console.log(loginUserMessage("Sumit"));
