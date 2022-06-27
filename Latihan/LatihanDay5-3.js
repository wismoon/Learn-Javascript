//1. The following is an array of 10 students ages:
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

//     - Sort the array and find the min and max age
//     - Find the median age(one middle item or two middle items divided by two)
//     - Find the average age(all items divided by number of items)
//     - Find the range of the ages(max minus min)
//     - Compare the value of (min - average) and (max - average), use _abs()_ method


console.log(ages)
const median = ages => {
    const sortir = ages.sort((a, b) => a - b)
    const middle = Math.floor(sortir.length /  2)
    if(sortir.length % 2 === 1){
        return console.log((sortir[middle -1] + sortir[middle]) / 2)   
    }
    return console.log(sortir[middle])
}



// function median2(numbers) {
//     const sorted = Array.from(numbers).sort((a, b) => a - b);
//     const middle = Math.floor(sorted.length / 2);

//     if (sorted.length % 2 === 0) {
//         return (sorted[middle - 1] + sorted[middle]) / 2;
//     }

//     return sorted[middle];
// }

// console.log(median([ages]));