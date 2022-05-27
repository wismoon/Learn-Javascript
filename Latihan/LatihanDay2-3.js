//1
let sentence = 'Love is the best thing in this world. Some found their love and some are still looking for their love.';
console.log(sentence.match(/\love/gi));

//2
let set = 'You cannot end a sentence with because because because is a conjunction';
// console.log(set.split(' '));
console.log(set.match(/because/g));

//3
const sentence1 = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching';
let regEx = /[%, $, %, &, #, @, ;]/g
console.log(sentence1.replace(regEx, ' '));

//4
const sentence2 = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month 100 1000 1000.';
let num = /\d+/g;
console.log(sentence2.match(num));
console.log(sentence2.match(num).reduce((a, c) => a+ +c,0));
