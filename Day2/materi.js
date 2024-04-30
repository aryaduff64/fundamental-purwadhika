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

// ====================================================
// LOOP STATEMENT
// statement 1 : menginisialisasi variable dari looping itu sendiri
// statement 1 : mendifine kondisi dari looping tersebut
// statement 1 : kode yang di eksekusi di akhir setiap iterasi

// melakukan 3 kali perulangan
// for (let i = 0; i < 3; i++) {
//   console.log("hello world");
// }

// WHILE LOOP ===================================

// let i = 1;

// while (i < 10) {
//   console.log("halo");
//   i++;
// }

// DO WHILE LOOP =================================

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
for (let i = 1; i <= 5; i++) {
  if (i === 3 || i === 4) {
    continue;
  }
  console.log("iterasi : " + i);
}
