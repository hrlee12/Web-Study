console.log("connected?");
console.log(new Date());
console.log(new Date(2021, 11, 6));
console.log(new Date("2021-12-06T03:24:00"));

console.log(new Date().getTimezoneOffset());
console.log(new Date().getTime());

var date = new Date();
var utc = date.getTime() + date.getTimezoneOffset() * 60 * 1000;
var kstGap = 9 * 60 * 60 * 1000;
var today = new Date(utc + kstGap);
console.log("-------------------------------");
console.log(today);
