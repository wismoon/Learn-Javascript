var p = '';


// *
// **
// ***
// ****
// *****
// ******
// *******
// ********
// *********
// **********

for( var i = 0; i <= 10; i++){
    for(var j = 0; j < i; j++){

        p += '*';

    }

    p += '\n';

}
console.log(p)


// **********
// *********
// ********
// *******
// ******
// *****
// ****
// ***
// **
// *

// for( var i = 10; i > 0; i-- ){
//     for( var j = 0; j < i; j++ ){

//         p += '*';

//     }

//     p += '\n';

// }
// console.log(p)

// **********
// *********
//  ********
//   *******
//    ******
//     *****
//      ****
//       ***
//        **
//         *

// for( var i = 1; i <= 10; i++ ){
//     for( var j = 0; j < i; j++ ){
//         p += ' ';
//     }
//     for( var k = 10; k >= j; k--){
//         p += '*';
//     }
//     p += '\n';
// }
// console.log(p)

//          *
//         ***
//        *****
//       *******
//      *********
//     ***********
//    *************
//   ***************
//  *****************
// *******************

// for (var i = 1; i < 10; i++) {
//   for (var j = 10; j > i ; j--) {
//     p += "1";
//   }
//   for (let k = 0; k < 2 * i-1; k++) {
//     p += "*";
//   }
//   p += "\n";
// }
// console.log(p);

// *****************
// ***************
//  *************
//   ***********
//    *********
//     *******
//      *****
//       ***
//        *

// for (var i = 1; i < 10; i++) {
//   for (var j = 0; j < i ; j++) {
//     p += " ";
//   }
//   for (let k = 0; k < 2 * (10-i) -1; k++) {
//     p += "*";
//   }
//   p += "\n";
// }
// console.log(p);

//          *
//         ***
//        *****
//       *******
//      *********
//     ***********
//    *************
//   ***************
//  *****************
//  *****************
//   ***************
//    *************
//     ***********
//      *********
//       *******
//        *****
//         ***
//          *

// for (var i = 1; i < 10; i++) {
//   for (var j = 10; j > i ; j--) {
//     p += " ";
//   }
//   for (let k = 0; k < 2 * i-1; k++) {
//     p += "*";
//   }
//   p += "\n";
// }
// for (var i = 1; i < 10; i++) {
//   for (var j = 0; j < i ; j++) {
//     p += " ";
//   }
//   for (let k = 0; k < 2 * (10-i) -1; k++) {
//     p += "*";
//   }
//   p += "\n";
// }
// console.log(p);

// function buildTriangle(rows) {
//     let result = []
//     for(let row = 0; row < rows; row++){
//       let rowData = []
//       for(let col = 0; col <= row; col ++){
//         rowData.push(pascalTriangle(row, col))
//       }
//       result.push(rowData)
//     }
//      return result;
//     }
   
   
   
//    function pascalTriangle(row, col) {
//        if (col === 0) {
//            return 1;
//        } else if (row === 0) {
//            return 0;
//        } else {
//            return pascalTriangle(row - 1, col) + pascalTriangle(row - 1, col - 1);
//        }
//    }
//    console.log(buildTriangle(6).join('\n'))