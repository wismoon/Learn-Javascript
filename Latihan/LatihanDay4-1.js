//1
// let age = 18;
// let age1 = 15;

// if(age => 18){
//     console.log("umur anda cukup untuk berkendara")
// }else{
//     console.log("umur anda tidak cukup")
// }


//2
// let yourAge = prompt('masukkan umur anda ');
// let myAge = 22;
// let tanya = true;
// while (tanya){
//     let count = Math.abs(myAge - yourAge);
//     if(count > myAge){
//         confirm('umur anda lebih tua dari saya yaitu beda ' + count)
//     }else{

//         confirm('umur anda lebih muda dari saya yaitu beda '+count)
//     }

//     tanya = false;
// }

//3
// let a = 2;
// let b = 3;
// let noBig = a > b ? console.log("a lebih besar dari b") : console.log("b lebih besar dari a");

//4
let  tanya = true;
while (tanya){
    let num = prompt('masukkan angka')
    if(num % 2 == 0){
        confirm(num+' bilangan genap')
    }else{
        confirm(num+' bilangan ganjil')
    }

    tanya = confirm('anda mau ulang angka ?')
}