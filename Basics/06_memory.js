//there are two kind of memeory allocation stack and heap
//stack memory usually use in primitve datatype and heap memory use in non primitive

//ex-1


let name= "sumit"
let name1=name;
name1="sumit patel"

console.log(name) //o/p- sumit
console.log(name1); //o/p-sumit patel
/*
In the above example we can see there are the variable who have primitve datatype, so by this the value of this variable is store in stack memory... 
so when the other variable say "name1" call "name" then the stack memory give the copy of the real value to "name1".
thats why when we change the value of "name1" then there will be no effect in the original value .
*/

//ex-2

let userOne={
    name:"sumit",
    mobile:8509348903
}

let userTwo= userOne
userTwo.name="sumit patel"

console.log(userOne);//o/p-{ name: 'sumit patel', mobile: 8509348903 }
console.log(userTwo);//o/p-{ name: 'sumit patel', mobile: 8509348903 }

/*
In the example above, we create an object named "userOne," and as we know, object types are non-primitive, so their values are stored in the heap memory. The heap memory provides the actual value when someone calls it; it doesn't provide a copy of that value like stack memory does.

Therefore, when userTwo calls userOne, the memory provides the real value of userOne. If we change the value in userTwo, the value of userOne also changes.
*/

//example of array

let userOnee = ["sumit", 8509348903];
let userTwoo = userOnee; // Assigning the reference, not a copy

userTwoo[0] = "sumit patel"; // Modifying userTwo

console.log(userOnee); // Output: ["sumit patel", 8509348903]
console.log(userTwoo); // Output: ["sumit patel", 8509348903]
