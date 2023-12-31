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

function loginUserMessage(username = "Sam") {
  //we can also pass the default value
  if (!username) {
    //"!" convert true to false and vica versa
    console.log("Please enter your username");
    return;
  }
  return `${username} just logged in`;
}

console.log(loginUserMessage());
console.log(loginUserMessage("Sumit"));

//for shopping cart

function calculateCartPrice(...num1) {
  //"..." is used in both rest and spread operator .. spread use to concat multiple array or object on the otherhand rest is used if we wamt to bundle up the  multiple input like in shopping cart
  return num1;
}

// console.log(calculateCartPrice(100, 200, 3000, 43534));

const user = {
  userName: "Sumit Patel",
  price: 500,
};

function handleObject(anyobject) {
  // pass anyobject if we want object as parameters
  console.log(
    `UserName is ${anyobject.userName} amd price is ${anyobject.price}`
  );
}

handleObject(user);

//also pass the object like this
handleObject({
  userName: "Sumit Patel",
  price: 500,
});

const myArray = [200, 400, 500, 700];

function findSecondValue(getArray) {
  console.log(getArray[1]);
}

findSecondValue(myArray);
