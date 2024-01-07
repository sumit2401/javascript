const user = {
  username: "hitesh",
  price: 999,

  welcomeMessage: function () {
    console.log(`${this.username} , welcome to website`);
    console.log(this);
  },
};

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
// }

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }

const chai = () => {
  let username = "hitesh";
  console.log(this);
};

// chai()
//explicit funtion
// const addTwo0 = (num1, num2) => {
//   return num1 + num2;
// };
//if you use curly braces in function then return statement is must

//implicit arrow function .. in implicit function we dont use curly braces so we dont have to write return statement... simply pass the expression
// const addTwo = (num1, num2) => num1 + num2;

// const addTwo2 = (num1, num2) => num1 + num2;

// const addTwo3 = (num1, num2) => ({ username: "hitesh" }); //way to pass object in implicit arrow function

// console.log(addTwo(3, 4));

const myArray = [2, 5, 3, 7, 8];

myArray.forEach((array) => {
  console.log(array);
}); //run loop untill print all the elements of array
