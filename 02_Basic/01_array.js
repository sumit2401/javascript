//array
/*
    -JavaScript arrays are resizable and can contain a mix of different data types.

    - JavaScript arrays are not associative arrays and so, array elements cannot be accessed using arbitrary strings as indexes. ex- myArray['element1']= 'sumit'.. this is not acceptable

    -JavaScript arrays are zero-indexed: the first element of an array is at index 0, the second is at index 1

    -JavaScript array-copy operations create shallow copies(shares the same reference point(means if we change the element of copied array then the original array get also change)).
    
    */

const myArray = [1, 2, 3, 4, 5];

const myArr = ["batman", "spider man", "superman", "ironman"];

console.log(myArray[1]); // accessing using normal index

console.log(myArr);

// console.log(myArray["one"]);// accessing using arbitrary string indexes------- not acceptable

//array methods

myArr.push("thor"); //add element in the array
myArr.pop(); //remove the last elements from the array

myArr.unshift(0); //insert element in the starting point.. thats why this method is not good for optimisation. but we can use when the want the data in the begining

myArr.shift(); //remove element fromt the start
console.log(myArr.includes("batman")); //tell if the element is in the array or not

console.log(myArr.indexOf("batman")); //gives index

const newArr = myArr.join(); //add all the elements of array in string
console.log(myArr);
console.log(newArr);
console.log(typeof newArr);

// slice and splice

// slice operation slice the array without manipulating the array and if the range of the slice is say (1,3) then it only print 2 element

const myArr1 = myArray.slice(1, 2);
console.log(myArr1);
console.log(myArray);

// splice operation slice the array but it manipulate the array like, if the splice between the range(0,2) then the array do slice but it also change the original array which cause us the split of real array and when we print the real array then it give the remaining array after slice
// if in this the last range is also included in the output
const myArr2 = myArray.splice(1, 3);
console.log(myArr2);
console.log(myArray);
