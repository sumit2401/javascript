const marvel_heroes = ["thor", "captain america", "ironman"];
const dc_heores = ["batman", "superman", "flash"];
const ind_heroes = ["shaktiman", "krrish"];

//not the better way to write the code
// marvel_heroes.push(dc_heores); //push the whole array inside the array which makes the second array as an single element of main array

//ex-[index-element]
// [1-"thor", 2-"captain america", 3-"ironman", 4-[1-"batman", 2-"superman", 3-"flash"]];

// console.log(marvel_heroes);
// console.log(marvel_heroes[3]);
// //if we want say "superman then we should use like this"

// console.log(marvel_heroes[3][1]);

//concat method is use to merge two or more arrays into one mew array

// const heroes = marvel_heroes.concat(dc_heores);
// console.log(heroes);

//if we have more than two arrays then we can use spread method

const allHerose = [...marvel_heroes, ...dc_heores, ...ind_heroes];
console.log(allHerose);

//we can also use concat to merge these arrays but spread is recommended

// concat example

const allHerose1 = marvel_heroes.concat(dc_heores, ind_heroes);
console.log(allHerose1);

const anotherArray = [1, 2, 3, 4, [1, 2, 3], 6, 7, [1, 2, [1, 2, 3], 4], 8];

const real_another_array = anotherArray.flat(Infinity); //The flat() method of Array creates a new array with all sub-array elements concatenated into it recursively up to the specified depth(mean it can goes very deep like infinity).

console.log(real_another_array);

console.log(Array.isArray("Sumit")); //isArray tells us if the given data is array or not
console.log(Array.from("Sumit")); //from method convert anything(object and  string) into the array

console.log(Array.from(124213442)); //it can't directly change this value into array thats why it give us an empty array as an output

let score1 = 100;
let score2 = 200;
let score3 = 300;

// now if we want to convert these set of elements into array then instead of from we use "of" method

console.log(Array.of(score1, score2, score3));
