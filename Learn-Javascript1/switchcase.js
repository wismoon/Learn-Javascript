var item = prompt('Masukkan nama itemnya : ')

switch(item) {

    case 'gula ':
    case 'garam':
    case 'merica bubuk':
        alert('merupakan bumbu dapur')
        break;
    case 'daging':
    case 'susu':
    case 'tempe':
        alert('merupakan makanan dan minuman')
        break;
    default :
        alert('anda tidak memasukkan sesuai petunjuk')
        break;
}