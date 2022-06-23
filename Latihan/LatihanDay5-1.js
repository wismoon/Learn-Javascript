//1
// const arr = [1,2,3,4,5];
// console.log(arr);

//2 Declare an array with more than 5 number of elements
// const arr = [1,2,3,4,5];
// console.log(arr);

//3 Find the length of your array
// const arr = [1,2,3,4,5];
// console.log(arr.length);

//4. Get the first item, the middle item and the last item of the array
// const arr = [1,2,3,4,5];
// console.log(arr[0], arr[2], arr[4]);

//5. Declare an array called _mixedDataTypes_, put different data types in the array and find the length of the array. The array size should  be greater than 5
// const _mixedDataTypes_ = [1, 'TOP', '3', true, 9.5, 'Buah'];
// console.log(_mixedDataTypes_.length);

//6. Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
const name = 'Facebook Google Microsoft Apple IBM Oracle and Amazon';
const itCompanies = name.split(' ');
const myArray = itCompanies;
// console.log(itCompanies);

//7. Print the array using _console.log()_
// console.log(itCompanies);

//8. Print the number of companies in the array
// var totallenght = [];
// totallenght = itCompanies.length;
// console.log(totallenght);

//9. Print the first company, middle and last company
// console.log(itCompanies[0], itCompanies[3], itCompanies[6])

//10. Print out each company
// for (i = 0; i < totallenght; i++)
// {
//     console.log(itCompanies[i]);
// }

//11. Change each company name  to uppercase one by one and print them out
// for (i = 0; i < totallenght; i++)
// {
//     console.log(itCompanies[i].toUpperCase());
// }

//12. Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
// const add = ' are big IT companies';
// console.log(name.concat(add));

//13. Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is _not found_
// let check = itCompanies.indexOf('Google');
// for (i = 0; i < totallenght; i++)
// {
//     if(check === 1){
//         console.log('Exists in the itCompanies array of ')
//     }else{
//         console.log('is not found')
//     }
// }

//14. Filter out companies which have more than one 'o' without the filter method
// var search = 'oo';
// var item = [];

// search = myArray.forEach(item1 => {
//             if(item1.indexOf(search) !== -1 ){
//                 item.push(item1);
//                 console.log(item)
//             }
    
// });

//15. Sort the array using _sort()_ method
// var arr = [1,4,3,5,2,3,6,1];
// console.log(arr.sort());

//16. Reverse the array using _reverse()_ method
// console.log(arr.reverse());

//17. Slice out the first 3 companies from the array
// console.log(myArray.slice(3))

//18. Slice out the last 3 companies from the array
// console.log(myArray.slice(0,4))

//19. Slice out the middle IT company or companies from the array
// myArray.splice(3,1)
// console.log(myArray)

//20. Remove the first IT company from the array
// myArray.shift()
// console.log(myArray)

//21. Remove the middle IT company or companies from the array
// myArray.splice(3,1)
// console.log(myArray)

//22. Remove the last IT company from the array
// myArray.pop()
// myArray.pop()
// console.log(myArray)

//23. Remove all IT companies
// console.log(myArray.splice())

