//Date

const myDate = new Date();

console.log(myDate);
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toLocaleString());
console.log(myDate.toJSON());
console.log(myDate.toTimeString());

let myCreateDate = new Date(2023, 0, 23, 5, 3); //when we write the single digit then the month count as an arrat so jan-0, feb-1, march-2.....
// first three are for date and the other entries are for time

//when we the want the specific format like YYYY-MM-DD
let mySepcificDate = new Date("2023-01-24");
console.log(mySepcificDate.toLocaleString());
console.log(myCreateDate.toLocaleString());

let myTimeStamp = Date.now();
console.log(myTimeStamp);

console.log(mySepcificDate.getTime());

console.log(Math.floor(Date.now() / 1000)); //provide the second from that day

let newDate = new Date();
console.log(newDate);
console.log(newDate.getDate()); //give the date
console.log(newDate.getMinutes()); //give the current minutes.. like if the time is 10:30:00 then the output will be "30"

console.log(newDate.getDay()); //give the weak day number like if there is monday then the output is "1", tuesday-"2", wednesday-"3" etc

console.log(myDate.getHours());
