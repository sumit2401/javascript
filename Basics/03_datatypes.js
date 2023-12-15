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

let score222= true
 //if we convert this bollean value into number than the ouput will be "1" 
 // so for true=> 1/ false=>0
 console.log(typeof(score222))
 console.log(Number(score222))


//now convert into the boolean

 let number= 1320
 let isBoolean= Boolean(number)
 console.log(isBoolean)

 /*
so if we convert number or string into boolean then the outputs are

1=>true
0=>false
""=> false
"sumit"=>true
but if the value is null then it can't be able to convert into the boolean

 */
