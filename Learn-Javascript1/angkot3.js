var angkot = 1;
var jmlangkot = 10;
var angkotberoperasi = 6;


for(angkot; angkot<=jmlangkot; angkot++){
    if(angkot<6 && angkot !== 5){
        console.log('Angkot No.' +angkot+ ' beroperasi dengan baik');
    }else if(angkot==5 || angkot==8 || angkot==10){
        console.log('Angkot No.' +angkot+ ' lembur');
    }else{
        console.log('Angkot No.' +angkot+ ' sedang tidak beroperasi');
    }
}