//1. Create a separate countries.js file and store the countries array in to this file, 
// create a separate file web_techs.js and store the webTechs array in to this file. Access both file in main.js file

//common import export js
import {webTechs} from './src/web_techs.js';
import {countries} from './src/countries.js';

// console.log(webTechs);
// console.log(countries);

//2. First remove all the punctuations and change the string to array and count the number of words in the array
// let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.';

// //using regex ^(gonna matches to all within data set), \W(this mean it will negate all that not a char), /g(mean global)
// let  newText = text.match(/[^_\W]+/g).join(' ');

// console.log(newText)
// console.log(newText.length)

//3. In the following shopping cart add, remove, edit items
// const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
// // - add 'Meat' in the beginning of your shopping cart if it has not been already added
// // - add Sugar at the end of you shopping cart if it has not been already added
// // - remove 'Honey' if you are allergic to honey
// // - modify Tea to 'Green Tea'

// shoppingCart.unshift('Meat')
// shoppingCart.push('Sugar')
// console.log(shoppingCart)
// shoppingCart.splice(4,1)
// console.log(shoppingCart)

//4. In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.
// let check = countries.indexOf('Ethiopia');
// let check2 = countries.includes('Ethiopia');
// for (let i = 0; i < countries.length; i++)
// {
//     if(i == check){
//         console.log('Yes')
//         console.log(countries[i].toLocaleUpperCase());    
//     }else if(check2 == false){
//         console.log('No')
//         countries.push('Ethiopia')
//     }
// }

//5. In the webTechs array check if Sass exists in the array  and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.
// let check = webTechs.indexOf('Sass');
// let check2 = webTechs.includes('Sass');
// let text = ' is a CSS preprocess';
// for (let i = 0; i < webTechs.length; i++)
// {
//     if(i == check){
//         console.log('Yes')
//         console.log(webTechs[i].join(text));    
//     }else if(check2 == false){
//         console.log('No')
//         webTechs.push('Sass')
//         break;
//     }

// }
// console.log(webTechs)

//6. Concatenate the following two variables and store it in a fullStack variable.
// const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
// const backEnd = ['Node','Express', 'MongoDB']
// let fullStack = '';
// console.log(fullStack.concat(frontEnd, backEnd))

//

