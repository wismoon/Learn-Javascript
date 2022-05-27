//1
let sentence = "The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.";
console.log(sentence);

//2
let sentence2 = "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.";
let plus = ' - quote by Mother Teresa.';
console.log(sentence2.concat(plus));

//3
let nums = '10';
console.log(nums == 10);

//4
let nums3 = '9.8';
console.log(Math.ceil(nums3) == 10);

//5
let p = 'phyton and jargon';
let s = /on/g
console.log(p.match(s));

//6
let sen = 'I hope this course is not full of jargon';
console.log(sen.match('jargon'));

//7
let num = Math.floor(Math.random() * 100 + 1);
console.log(num);

//8
let num1 = Math.floor(Math.random() * 100 + 50);
console.log(num1);

//9
let num2 = Math.floor(Math.random() * 255 + 1);
console.log(num2);

//10
let string = Math.random().toString(36).slice(2);
console.log(string);

//11
console.log('1 1 1 1 1 \n2 1 2 4 8 \n3 1 3 9 27 \n4 1 4 16 64 \n5 1 5 25 125');

//12
let set = 'You cannot end a sentence with because because because is a conjunction';
console.log(set.slice(31, 54));