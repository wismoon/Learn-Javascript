//1
// let firstname = 'Muhammad';
// let lastname = 'wisnu';
// let country = 'Indonesia';
// let city = 'Riau';
// let age = 22;
// let isMarried = false;
// let year = new Date();

// console.log(typeof(firstname));
// console.log(typeof(age));
// console.log(typeof(isMarried));
// console.log(typeof(year.getFullYear()));


//2
// let num = '10';
// let num2 = 10;

// console.log(num == num2);


//3
// let num = '9.8';
// let num2 = 10;

// console.log(parseInt(num));
// console.log(parseInt(num) == num2);

//4
// let num = 2;
// let num2 = 3;

// console.log(num == num2);
// console.log(num === num2);
// console.log(num > num2);
// console.log(num < num2);
// console.log(num != num2);
// console.log(num < num2 && num != num2);

//5
// let num = 3;
// let num2 = 4;
// let num3 = '4';

// console.log(num2 > num);
// console.log(num2 > num);
// console.log(num2 < num);
// console.log(num2 <= num);
// console.log(num2 == num2);
// console.log(num2 === num2);
// console.log(num2 != num2);
// console.log(num2 !== num2);
// console.log(num2 != num3);
// console.log(num2 == num3);
// console.log(num2 === num3);

//6
// console.log(4 > 3 && 10 < 12);
// console.log(4 > 3 && 10 > 12);
// console.log(4 > 3 || 10 < 12);
// console.log(4 > 3 || 10 > 12);
// console.log(!(4 > 3));
// console.log(!(4 < 3));
// console.log(!(false));
// console.log(!(4 > 3 && 10 < 12));
// console.log(!(4 > 3 && 10 > 12));
// console.log(!(4 === '4'));

//7
const date = new Date;

console.log('whats is the year today '+date.getFullYear());
console.log('whats is the month today as number '+date.getMonth());
console.log('whats is the date today '+date.getDay());
console.log('whats is the date today as number '+date.getDate());
console.log('whats is the hours now '+date.getHours());
console.log('whats is the minutes now '+date.getMinutes());
console.log('find out the numbers of second elapsed from january 1, 1970 to now '+date.getTime());