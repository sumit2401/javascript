const name="sumit"  //const means constant. we generally use const when we dont want to change the value in future

let emailid= "sumit@gmail.com"

var password= 123832 //never use var beacuse var dont knwo what is block scope. scope means "{------}" the value which are written inside these curly brackets 
//var doesn’t respect block scope (i.e., if, for, while blocks) and functional scope, which could lead to confusing code and unintended side effects

city="ghaziabad" // in here city is the global variable... but prefer not to write like this. It's a good practice to explicitly declare variables using const and let.


console.log(name)
console.log(emailid)
console.log(password)
console.log(city)
//now try to change the value of these variables and const

//name=" sumit patel"


emailid = "sumitpatel@gmail.com"

password=897342134739

city="gautambuddha nagar"


// console.log(name) //we will find the error in this line because we can't change the value of name because at the start we assign const(constant) varible to name
console.log(emailid)
console.log(password)
console.log(city)

