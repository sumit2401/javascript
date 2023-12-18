let fname="sumit"
let lname="patel"
let email= "sp1440793@gmail.com"
console.log("my name is " +fname+lname+ "and my email is" + email );// but thats not the best way to concat the string and it is also not the best way to write the code

//the best way is

console.log(`Hello my name is ${fname}${lname} and my email id is${email}`);

//second way to declare string by creating the new object
const gameName= new String('sumitkrpatel')
console.log(gameName);




//lets use some string methods now

console.log(gameName.indexOf("p"));
console.log(gameName.replace("kr","kumar"));
console.log(gameName.charAt(2));
console.log(gameName.italics());
console.log(gameName.charCodeAt(3));
console.log(gameName.toUpperCase());
console.log(gameName.substring(0,4));//provide the substring of the main string
console.log(gameName.slice(5,10));//(start,end)-------slice the string 
const anotherstring= "    sumit     "
console.log(anotherstring.trim())//remove extra space from both side of the string
console.log(anotherstring.trimEnd());//remove space from end

