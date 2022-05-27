//1
// let user_base = prompt('enter base number ');
// let user_height = prompt('enter height number ');
// let triangle = 0.5 * user_base * user_height;

// console.log(triangle);

//2
// let user_a = prompt('enter a number ');
// let user_b = prompt('enter b number ');
// let user_c = prompt('enter c number ');
// let triangle = parseInt(user_a) + parseInt(user_b) + parseInt(user_c);

// console.log(triangle);

//3
// let user_a = prompt('enter length number ');
// let user_b = prompt('enter width number ');
// let perimeter = 2 * (parseInt(user_a) * parseInt(user_b));

// console.log(perimeter);

//4
// let r = prompt('masukkan nilai r ');
// let pi = 3.14;
// let area_circle = pi * parseInt(r) * parseInt(r);
// let cicumtance_circle = 2 * pi * parseInt(r);

// console.log(area_circle);
// console.log(cicumtance_circle);

//5

//6
// let y1 = 2, y2 = 2, x1 = 6, x2 = 10;
// let slope = (y1 - x1)/(y2 - x2);

// console.log(slope);

//7 

//8

//9
// let hour = prompt('masukkan total jam kerja anda ')
// let rate = prompt('masukkan rate per jam anda ')
// let gaji = hour * rate;

// console.log(gaji);

//10

// let pendek = true;
// while(pendek){
//     let nama = prompt('masukkan nama anda');
    
//       if(nama.length > 7){
//           alert('nama anda terlalu panjang silahkan masukkan nama anda kembali');
//       }else{
//           alert('nama anda adalah '+nama);
//           pendek = false;
//       }
    
// }

// for(i=0; i < 10; i++){
//     let nama = prompt('masukkan nama anda');
//     if(nama.length > 7){
//         alert('nama anda terlalu panjang silahkan masukkan nama pendek!');
//     }else{
//         alert('nama anda adalah '+nama);
//         break;
//     }
// }

//11
// let firstname = 'fauzi';
// let lastname = 'wisnu';

// firstname.length > lastname.length
// ? console.log('nama anda '+firstname+' lebih panjang dari nama '+lastname)
// : console.log('nama anda '+firstname+' sama dengan nama '+lastname);

//12
// let myAge = 250;
// let yourAge = 25;

// let count = myAge - yourAge;

// console.log('Iam more older than you by '+Math.abs(count)+' years');

//13
// let year = new Date();
// let drive = true;
// while (drive){
//     let  yourAge = prompt('masukkan tahun kelahiran anda!')

//     let ageCount = year.getUTCFullYear() - parseInt(yourAge);

//     if(ageCount < 18){
//         alert('umur anda '+ageCount+' tidak mencukupin untuk driving');
//     }else{
//         alert('umur anda '+ageCount+' cukup untuk driving');
//         drive = false;
//     }
// }

//14
// let year = new Date("1, 1, 1922");
// let year2 = new Date('5, 14, 2022');
// let lived = new Date();

// console.log((lived.getFullYear()-100)/1000)
// console.log(year2.getTime());
// console.log(Math.abs(year.getTime())/1000);

//15
let date = new Date();
let result = date.toLocaleDateString("en-US", {year: "numeric", month:"2-digit", day:"2-digit"})
let day = date.getDate();
let week = date.getDay();
let month = (date.getMonth()+1).toString().padStart(2, '0');
let year = date.getFullYear();
let hour = date.getHours();
let minutes = date.getMinutes();

console.log(result);
console.log(year+'-'+month+'-'+day+' '+hour+':'+minutes);
console.log(`${day}-${month}-${year} ${hour}:${minutes}`);
console.log(`${day}/${month}/${year} ${hour}:${minutes}`);