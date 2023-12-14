let name = "sumit kr patel"
let classid= 21357

console.log(typeof(name))
console.log(typeof(classid))

/*

in js there are two type of datatype first is primitive and non primitive

primitve=>
1-number(int)
2-bigInt
3-string- "written inside these double inverted commas "
4-boolean- true/false


non-primitve- 

object

*/
//for furthur details read the ecma standard files

//covvert from one datatype to other
 let score = "33"
 let scoreinnumber = Number(score)
 console.log(scoreinnumber)
 console.log(typeof scoreinnumber)

 let score11="33aa"
 let score11innumber = Number(score11)
 console.log(typeof score11innumber)
 console.log(score11innumber) // => this will give you NaN that means not a number

 //if the value is null then the datatype will be object
 let score1= null
 console.log(typeof score1);

 //if the value is undefined then the datatype is also undefined
 let score2;
 console.log(typeof score2)


