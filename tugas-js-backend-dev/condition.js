let angka = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let genap = [];
let ganjil = [];

//if else genap atau ganjil
for (let i = 0; i <= angka.length; i++) {

    if (angka[i] % 2 == 0) {
        genap.push(angka[i]);
    } else {
        ganjil.push(angka[i]);
    }

}
console.log(genap + " adalah bilangan genap.");
console.log(ganjil + " adalah bilangan ganjil.");

// switch mencetak nama hari
let nomorHari = 5;
let namaHari;

switch (nomorHari) {
    case 1:
        namaHari = "Senin";
        break;
    case 2:
        namaHari = "Selasa";
        break;
    case 3:
        namaHari = "Rabu";
        break;
    case 4:
        namaHari = "Kamis";
        break;
    case 5:
        namaHari = "Jumat";
        break;
    case 6:
        namaHari = "Sabtu";
        break;
    case 7:
        namaHari = "Minggu";
        break;
    default:
        namaHari = "Hari tidak terdaftar";
}

console.log(namaHari);
