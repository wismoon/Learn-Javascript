//1
let date = new Date(2010, 10, 1, 12, 1);
let result = date.toLocaleDateString("en-US", {year: "numeric", month:"2-digit", day:"2-digit"})
let day = date.getDate();
let week = date.getDay();
let month = (date.getMonth()+1).toString().padStart(2, '0');
let year = date.getFullYear();
let hour = date.getHours().toString().padStart(2, '0');
let minutes = date.getMinutes().toString().padStart(2, '0');

console.log(result);
console.log(`${day}-${month}-${year} ${hour}:${minutes}`);