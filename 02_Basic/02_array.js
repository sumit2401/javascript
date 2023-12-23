const marvel_heroes = ["thor", "captain america", "ironman"];
const dc_heores = ["batman", "superman", "flash"];

//not the better way to write the code
marvel_heroes.push(dc_heores); //push the whole array inside the array which makes the second array as an single element of main array

//ex-[index-element]
// [1-"thor", 2-"captain america", 3-"ironman", 4-[1-"batman", 2-"superman", 3-"flash"]];

console.log(marvel_heroes);
console.log(marvel_heroes[3]);
//if we want say "superman then we should use like this"

console.log(marvel_heroes[3][1]);

//use concat instead if we want to merge arrays

marvel_heroes.concat(dc_heores);
console.log(marvel_heroes);
