
// var kubus_a = 8;
// var kubus_b = 3;

// var hitung_v = kubus_a * 3;
// var hitung_v2 = kubus_b * 3;

// var total = hitung_v + hitung_v2;


function MenghitungJmlVolKubus (a, b){
    var total, volume_a, volume_b;

    volume_a = a * a * a;
    volume_b = b * b * b;

    total = volume_a + volume_b;

    return total;
    //arguments merupakan bawaan dari javascript untuk menampung nilai argument yang masuk yang tidak memiliki parameter pada function menjadi array
    return arguments;
}

//contoh memasukkan nilai yang tidak sesuai parameter yang akan disimpan pada arguments
var coba = MenghitungJmlVolKubus(1,1,'T',30,40);

console.log(coba);
console.log(MenghitungJmlVolKubus(5,3));
console.log(MenghitungJmlVolKubus(100,33));
