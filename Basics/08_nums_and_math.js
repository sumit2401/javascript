// const score = 400
// console.log(score)

// const Balance =new Number(100)
// console.log(Balance);

// //now some int methods

// console.log(Balance.toString().length);

// const number = 743.873489
// console.log(number.toFixed(2));//fixed the value of decimal in numbers
// console.log(number.toPrecision(5));//provide the precise(exact) value of number with or without roundind of

// const hunderds=10000000
// console.log(hunderds.toLocaleString("en-IN")); //convert the number according to indian standards

//+++++++++++++++++++++++++++++ MATHS ++++++++++++++++++++++++

console.log(Math.abs(-4));//convert negative number into positive
console.log(Math.acos(0));//return the inverted cos value

console.log(Math.fround(324.32));

console.log(Math.round(23.543));
console.log(Math.ceil(5.2));//roundoff to highest value
console.log(Math.floor(4.9));//roundoff to  lowest value
console.log(Math.min(5,6,2,6));//return min value
console.log(Math.max(5,6,2,6));//return max vallue


console.log(Math.random());//provide random value
console.log((Math.random()*10)+1);//return value between 1 to 9
console.log(Math.floor((Math.random()*10))+1); //when we want to return the smallest value use floor function
const min = 10
const max = 20

//we have simple formula for this

console.log(Math.floor(Math.random()*(max-min+1))+min); //if you get confuse just watch the code written in line 34 they both are same 


