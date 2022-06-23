//1
const currentDate = new Date();


var month;
var currentYear = currentDate.getFullYear();
var currentMonth = currentDate.getMonth();

var currentMonthLastDate = new Date(currentYear, currentMonth, 0).getDate();

console.log(currentMonthLastDate);
// console.log(currentDate.getDate());
