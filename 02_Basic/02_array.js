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


const anotherArray = [1,2,3,4,[1,2,3]6]
