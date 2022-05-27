var kesempatan = 3;
//pernyataan bermain
alert('Aturan main adalah anda diwajibkan menebak angka mulai dari 1-10 Dengan kesempatan sebanyak 3 kali!!')
while (kesempatan != 0) {
    
    //memasukkan angka dari user
    var user = prompt('masukkan angka pilihan anda antara 1-10!!')

    //computer
    //mengeluarkan angka komputer
    var comp = Math.floor(Math.random() * 2 + 1);
    // console.log(comp);

    //peraturan main
    var hasil = '';

    if (user == comp){
        hasil = 'Benar';
    }else if (user < comp){
        hasil = 'Angka anda terlalu kecil';
    }else if (user > comp){
        hasil = 'Angka anda terlalu besar';
    }else {
        hasil = 'Angka yang anda masukkan tidak sesuai aturan';
    }
    // console.log(hasil);    

    
    console.log(kesempatan);
    //tampilan hasil tanding
    if (hasil == 'Benar'){
        kesempatan -= 3;
        alert('Anda menebak '+user+ ' dan hasilnya adalah '+hasil+ ' angkanya adalah '+comp);
        
    }else {
        alert('Anda menebak '+user+ ' dan hasilnya adalah '+hasil+ ' angkanya adalah '+comp+ ' kesempatan anda tinggal '+kesempatan);
        kesempatan--;
    }
    
}
alert('Terimakasih telah bermain')