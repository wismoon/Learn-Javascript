

//penggunaan rekursif pada pengulangan angka 10-1
function angka (a){

    //base case (penutup case)
    if (a == 0){
        return;
    }

    console.log(a);
    angka(a-1);

}

angka(10);