var angkot = 1;
var jmlangkot = 10;
var angkotberoperasi = 6;

while (angkot<=angkotberoperasi){
    console.log('Angkot No.' +angkot+ ' beroperasi dengan baik')
    angkot++;
}

for (angkotberoperasi; angkotberoperasi<jmlangkot; ){
    ++angkotberoperasi;
    console.log('Angkot No.' +angkotberoperasi+ ' sedang tidak beroperasi')
}