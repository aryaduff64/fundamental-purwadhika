// IF STATEMENT ==============================

// const age = 20;

// if (age >= 17) {
//   console.log("ini di dalam if statement");
// }

// ELSE STATEMENT ==============================
// backup plan dari if statement
const age = 20;

// if (age >= 17) {
//   console.log("ini di dalam if statement");
// } else {
//   console.log("ini di dalam else statement");
// }

// ELSE IF STATEMENT ==============================
// const grade = "A";

// if (grade === "A") {
//   console.log("Nilai Bagus");
// } else if (grade === "B") {
//   console.log("Nilai Lumayan");
// } else if (grade === "C") {
//   console.log("Nilai Buruk");
// } else if (grade === "D") {
//   console.log("Nilai Sangat Buruk");
// } else {
//   console.log("Nilai yang dimasukkan salah");
// }

// SWITCH CASE ==============================
// const day = "Senin";

// switch (day) {
//   case "Senin":
//     console.log("hari senin");
//     break;
//   case "Selasa":
//     console.log("hari senin");
//     break;
//   case "Rabu":
//     console.log("hari senin");
//     break;

//   default:
//     console.log("hari tidak ditemukan");
// }

// LOGICAL OPERATOR -> &&, ||, ! ==============================

// const car = "MERCY";
// // OR -> jika salah satu saja ada yang nilainya true => true
// if (car === "BMW" || car === "MERCY") {
//   console.log("mobil german");
// } else {
//   console.log("mobil jepang");
// }

// AND -> wajib seluruh kondisi yang ada itu harus true => true
// const umur = 12;
// const punyaSim = true;

// if (umur >= 18 && punyaSim === true) {
//   console.log("boleh bawa kendaraan");
// } else {
//   console.log("belum boleh bawa kendaraan");
// }

// NOT -> membalikkan sebuah nilai boolean

// const isSunny = true;

// console.log(!isSunny);

// const user = "Joko";

// if (!user) {
//   console.log("user gak ada");
// } else {
//   console.log("user ada");
// }

// ===================================================================

// TERNARY OPERATOR -> shortcut dari if else statement

// const str = "javascript";

// if (str === "javascript") {
//   console.log("Javascript");
// } else {
//   console.log("Not Javascript");
// }

// // rumus =>>>>> kondisi ? "true" : "false"
// console.log(str === "javascript" ? "Javascript" : "Not Javascript");

// =================================================================================
// LOOP STATEMENT
// statement 1 : menginisialisasi variable dari looping itu sendiri
// statement 1 : mendifine kondisi dari looping tersebut
// statement 1 : kode yang di eksekusi di akhir setiap iterasi

// melakukan 3 kali perulangan
// for (let i = 0; i < 3; i++) {
//   console.log("hello world");
// }

// WHILE LOOP ======================================================================

/*
      Alur Proses While Loop

      1. Membuat variabel dengan nilai awal, digunakan sebagai acuan Loop (init)
      2. Mengevaluasi condition (condition)
          a. condition : true, memproses taks yang ada
          b. condition : false, keluar dari block Loop
      3. Setelah menyelesaikan task yang ada di dalam block Loop, memodifikasi nilai pada variabel init (modification)
      4. Kembali ke langkah 2
*/

// Init
// let number = 1;
// // Condition
// while (number <= 5) {
//   // task
//   console.log(`Number : ${number}`);

//   number++;
// }
// console.log("Selesai Loop");

/////////////
// Dua Langkah
/////////////

// Membuat variabel init
// let number = 1;
// // Mengevaluasi conditon
// while (number <= 10) {
//   // Menampilkan informasi pada terminal / console
//   console.log(`Number : ${number}`);

//   // Menjumlahkan 'number' dengan dua
//   number += 2;

//   // Kembali mengevaluasi condition
// }
// // Dijalankan setelah keluar dari Loop
// console.log("Selesai Loop");

//////////////////////////
// Menampilkan nilai Genap
/////////////////////////

// nilai genap adalah nilai yang 'habis' dibagi dua.
// jika di modulus dua, hasilnya adalah nol

// init
// var number = 0;
// // condition
// while (number <= 10) {
//   // Evaluasi nilai, apakah merupakan bilangan genap
//   // jika setelah dimoduluskan 2 menghasilkan nol, maka nilai tsb termasuk bilangan genap
//   if (number % 2 == 0) {
//     // Menampilkan bilangan genap pada console / terminal
//     console.log(`${number} adalah bilangan genap`);
//   }
//   // modification
//   // Menjumlah 'number' dengan satu
//   number++;
// }

// // Dijalankan setelah keluar dari loop
// console.log("Selesai Loop");

//////////////////////////
// Menampilkan nilai Ganjil
/////////////////////////

// nilai ganjil adalah nilai yang sisa satu saat dibagi dua.
// jika di modulus dua, hasilnya adalah satu

// init
// var number = 0;
// // condition
// while (number <= 10) {
//   // Evaluasi nilai, apakah merupakan bilangan genap
//   // jika setelah dimoduluskan 2 menghasilkan nol, maka nilai tsb termasuk bilangan genap
//   if (number % 2 == 1) {
//     // Menampilkan bilangan genap pada console / terminal
//     console.log(`${number} adalah bilangan ganjil`);
//   }
//   // modification
//   // Menjumlah 'number' dengan satu
//   number++;
// }

// // Dijalankan setelah keluar dari loop
// console.log("Selesai Loop");

/////////////////////////////////////
// Menampilkan nilai Ganjil dan Genap
/////////////////////////////////////

// Membuat variabel acuan (init)
var number = 1;
// Mengevaluasi condition (condition)
while (number <= 5) {
  // Jika menghasilkan 1 setelah dimodulus 2
  if (number % 2 == 1) {
    console.log(`${number} adalah ganjil`);
    // Jika menghasilkan 0 setelah dimodulus 2
  } else {
    console.log(`${number} adalah genap`);
  }
  // Menambahkan satu nilai terhadap nilai yang disimpan di variabel number
  number++;
}
// // Dijalankan setelah keluar dari loop
// console.log("Selesai Loop");

// let i = 1;

// while (i < 10) {
//   console.log("halo");
//   i++;
// }

// DO WHILE LOOP ====================================================================

// let count = 6;
// do {
//   console.log("ini iterasi ke : " + count);
//   count++;
// } while (count <= 5);

// BREAK =======================================
// menghentikan looping
// let sum = 0;

// while (true) {
//   console.log("sum : " + sum);

//   if (sum >= 5) return;

//   sum += 1;
// }

// CONTINUE =======================================
// melakukan skip pada lopping
// for (let i = 1; i <= 5; i++) {
//   if (i === 3 || i === 4) {
//     continue;
//   }
//   console.log("iterasi : " + i);
// }
