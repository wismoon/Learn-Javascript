var tanya = true;
while (tanya){
    //memasukkan kosa kata dari user
    var kita = prompt('Pilih antara : gajah, semut, orang!');

    //computer
    //mengeluarkan random angka dan mengatur keluaran
    var comp = Math.random();

    if (comp < 0.34) {
        comp = 'gajah';
    }else if (comp >= 0.34 && comp < 0.66){
        comp = 'orang';
    }else {
        comp = 'semut';
    }

    //peraturan permainan
    var hasil = '';

    if (kita == comp){
        hasil = 'SERI'
    }else if (kita == 'gajah'){
        hasil = (comp == 'orang') ? 'MENANG' : 'KALAH';
    }else if (kita == 'orang'){
        hasil = (comp == 'semut') ? 'MENANG' : 'KALAH';
    }else if (kita == 'semut'){
        hasil = (comp == 'gajah') ? 'MENANG' : 'KALAH';
    }else{
        hasil = 'anda salah memilih kata silahkan ulang kembali!!'
    }

    console.log(hasil);
    //tampilan hasil tanding
    alert('Anda memilih '+kita+' dan Computer memilih '+comp+ ' maka yang menang adalah!!! ' +hasil)

    tanya = confirm('apakah anda ingin bermain lagi?');
}

alert('Terimakasih sudah bermain');