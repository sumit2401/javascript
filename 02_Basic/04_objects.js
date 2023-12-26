const user = new Object(); //singleton object

//non singleton object
const tinderUser = {};

tinderUser.id = "123abc";
tinderUser.name = "Sumit";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
  emaill: "some@gmail.com",
  fullname: {
    userFullName: {
      firstName: "Sumit",
      lastName: "Patel",
    },
  },
};

// console.log(regularUser.fullname.userFullName.firstName); //for accessing the nested object data

const obj1 = {
  1: "a",
  2: "b",
};

const obj2 = {
  3: "c",
  4: "d",
};

//merging two object
// const obj3 = Object.assign(obj1, obj2); //merge two object

// const obj3 = Object.assign({}, obj1, obj2); //second way to merge
//the first object is target that means all the other object element move to obj 1... but if we are create new object then why not move all the obj element into the new one that's why use  we create an object as a target object "{}"

const obj3 = { ...obj1, ...obj2 }; //spread *most used*
// console.log(obj3);

//how to access object data if the object is inside the array

const arrayObj = [
  {
    id: 1,
    email: "some@gmail.com",
  },
  {
    id: 2,
    email: "some@gmail.com",
  },
  {
    id: 3,
    email: "some@gmail.com",
  },
  {
    id: 4,
    email: "some@gmail.com",
  },
  {
    id: 5,
    email: "some@gmail.com",
  },
];

//now if we want to access the value of object then

const output = arrayObj[1].id;

// console.log(output);

// console.log(Object.keys(tinderUser)); //if we want keys
// console.log(Object.values(tinderUser));

// console.log(tinderUser.hasOwnProperty("isLoggedIn")); //if we want to check this key is in the object or not

//**********de-Structuring of object*******************

const course = {
  courseName: "js in hindi",
  price: "999",
  courseInstructor: "sumit",
};

//destructure

const { courseInstructor } = course; //give the value of courseinstructor from course

//suppose you find this courseinstructor name too big so we can also write this as

const { courseInstructor: instructor } = course;

console.log(instructor);

console.log(courseInstructor);
