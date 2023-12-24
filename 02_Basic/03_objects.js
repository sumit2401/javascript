/*//we can declare object by using these two type
    -literals
    - constructor

    ---when we create object using literals then we dont get the singleton object(unique)(a single object from the pair)(apne ap me eklauta)

    -but we get singleton object when we use contructor 
    */

//objects literal
//way to decalre symbol(it is an primitive datatype)

let mySmb = Symbol("key1");

//we can define both keys and values in object
const jsUser = {
  name: "Sumit", // in this key=name(the system bydefault set these key type as string so if we want to access by these keys then call them like a string)........ value= sumit
  "full name": "Sumit kr. Patel", //what if key ar define as string then we can't accesss those keys by using jsUser.fullname, not the only way is jsUser["full name"] to access the value

  //way to access symbol inside object is
  [mySmb]: "my Symbol",
  age: 23,
  location: "Ghaziabad",
  mail: "sp1440793@gmail.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Tuesday"],
};

//how to accesss object- there are two ways

console.log(jsUser.mail);
console.log(jsUser["mail"]);

console.log(jsUser["full name"]);

//the only way to return symbol is

console.log(jsUser[mySmb]);

jsUser.mail = "sumitpatel.0272@gmail.com"; //change mail in object

// Object.freeze(jsUser); //for freezinf object--after freezing we cant change anything in object

jsUser.mail = "fdjsahfkjsd@gmail.com";

console.log(jsUser);

//adding function in object

jsUser.greeting = function () {
  console.log("hello js user");
};
jsUser.greetingTwo = function () {
  console.log(`hello js user, ${this["full name"]}`);
};

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());
