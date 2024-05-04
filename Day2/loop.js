//////////////////////////
// Drawing Horizontal Line
//////////////////////////

/////////////////////////////////////
// Menjumlahkan 0 + 1 + 2 + 3 + 4 + 5
/////////////////////////////////////

// Variabel yang akan menyimpan hasil penjumlahan
// var number = 0;
// // Loop sebanyak lima kali dengan menyediakan angka 1 - 5
// for (var i = 1; i <= 5; i++) {
//   // Menjumlahkan nilai terakhir 'number' dengan nilai 'i'
//   number += i;
// }

// // Menampilkan hasil penjumlahan
// console.log(number);

///////////////////////////
// Membuat Garis Horizontal
///////////////////////////

// *****

// Variabel yang akan menampung hasil akhir
// var stars = "";
// // Loop sebanyak Lima kali
// for (var i = 0; i < 5; i++) {
//   // Akan menambahkan nilai terakhir pada variabel stars dengan satu bintang
//   stars += "*";
// }

// // Menampilkan hasil akhir dari variabel stars
// console.log(stars);

//////////////////////////
// Drawing Vertical Line
//////////////////////////

// * * * * *

// * \n * \n * \n * \n *

// var stars = "";
// // Loop sebanyak Lima kali
// for (var i = 0; i < 5; i++) {
//   // Setiap Loop akan menambahkan '*' dan '\n' (new line)
//   stars += "*" + "\n";
// }

// // Menampilkan hasil akhirnya (garis vertikal)
// console.log(stars);

//////////
// SQUARE
//////////

/*

    * * *\n
    * * *\n
    * * *\n
 */

// var stars = "";
// var rows = 3;

// // Loop i untuk membuat baris
// // Banyaknya Loop i ditentukan dari variabel rows
// for (var i = 0; i < rows; i++) {
//   // Loop j untuk menambahkan bintang per baris
//   // Banyaknya bintang setiap baris = jumlah baris
//   for (var j = 0; j < rows; j++) {
//     // Menambahkan satu bintang dari nilai sebelumnya
//     stars += "*";
//   }

//   // Menambahkan new line setiap selesai membuat satu baris bintang (Horizontal Line)
//   stars += "\n";
// }

// console.log(stars);

///////////////////////////////
// RIGHT TRIANGLE (siku - siku)
///////////////////////////////

// Persegi : Jumlah bintang perbaris ditentukan dari jumlah total baris
// Segitiga siku2 : Jumlah bintang perbaris ditentukan dari 'posisi baris' nya.

// baris ke 1 : *
// baris ke 2 : * *
// baris ke 3 : * * *
// baris ke 4 : * * * *
// baris ke 5 : * * * * *

// var stars = "";
// var rows = 5;

// // i : 1 - 5
// // Loop i digunakan untuk menentukan banyaknya baris
// for (var i = 1; i <= rows; i++) {
//   // Loop j digunakan untuk menentukan banyak bintang per baris
//   for (var j = 1; j <= i; j++) {
//     stars += " * ";
//   }

//   stars += "\n";
// }

// console.log(stars);

//////////////////////////////////////////
// RIGHT TRIANGLE - UPSIDE DOWN (Terbalik)
//////////////////////////////////////////

// baris ke 1 : *
// baris ke 2 : * *
// baris ke 3 : * * *
// baris ke 4 : * * * *
// baris ke 5 : * * * * *

// baris ke 5 : * * * * *
// baris ke 4 : * * * *
// baris ke 3 : * * *
// baris ke 2 : * *
// baris ke 1 : *

// var stars = "";
// var rows = 5;

// // i = 5 - 1
// // Loop i menentukan basnyaknya baris
// for (var i = rows; i >= 1; i--) {
//   // Loop j digunakan untuk menentukan banyak bintang per baris
//   for (var j = 1; j <= i; j++) {
//     // Menambahkan satu bintang dari nilai sebelumnya
//     stars += " * ";
//   }
//   // Menambahkan satu new-line dari nilai sebelumnya
//   stars += "\n";
// }

// // Menampilkan hasil akhirnya
// console.log(stars);

////////////////////////
// DOUBLE RIGHT TRIANGLE
////////////////////////

// baris ke 5 : * * * * *
// baris ke 4 : * * * *
// baris ke 3 : * * *
// baris ke 2 : * *
// baris ke 1 : *

// var stars = "";
// var rows = 5;

// for (var i = rows; i >= 1; i--) {
//   for (var j = 1; j <= i; j++) {
//     stars += " * ";
//   }

//   stars += "\n";
// }

// // baris ke 2 : * *
// // baris ke 3 : * * *
// // baris ke 4 : * * * *
// // baris ke 5 : * * * * *
// for (var i = 2; i <= rows; i++) {
//   for (var j = 1; j <= i; j++) {
//     stars += " * ";
//   }

//   stars += "\n";
// }

// console.log(stars);

///////////////////
// PYRAMID TRIANGLE
///////////////////

// 1. s s s s  *
// 2. s s s  * * *
// 3. s s * * * * *
// 4. s * * * * * * *
// 5. * * * * * * * * *

// rows                  : 5
// posisi baris ( i )    : 1 2 3 4 5
// jumlah spasi ( j )    : 4 3 2 1  ( rows - i)
// jumlah bintang ( k )  : 1 3 5 7 9 ?

// rows: 5
// ( i ) ( form ) ( * ) ==> (i - 1) * 2 + 1
//   1    0 1 0     1
//   2    1 1 1     3
//   3    2 1 2     6
//   4    3 1 3     7
//   5    4 1 4     9

// var stars = "";
// var rows = 5;

// // Loop i untuk membuat baris
// // Loop sebanyak nilai yang disimpan pada 'rows'
// for (var i = 1; i <= rows; i++) {
//   // Loop j untuk menambahkan spasi setiap baris
//   for (var j = rows - i; j >= 1; j--) {
//     stars += "   ";
//   }

//   // Loop k untuk menambahkan bintang setiap baris
//   for (var k = 1; k <= (i - 1) * 2 + 1; k++) {
//     stars += " * ";
//   }

//   // Menambahkan new line
//   stars += "\n";
// }
// // Menampilkan hasi akhir
// console.log(stars);

///////////////////////////////
// PYRAMID TRIANGLE UPSIDE DOWN
///////////////////////////////

// 5. * * * * * * * * *
// 4. s * * * * * * *
// 3. s s * * * * *
// 2. s s s * * *
// 1. s s s s *

// Jumlah spasi ( j ) = rows - i
// Jumlah bintang ( k ) = (i - 1) * 2 + 1

// var stars = "";
// var rows = 5;

// // Loop i untuk membuat baris
// // Loop sebanyak nilai yang disimpan pada 'rows'
// for (var i = rows; i >= 1; i--) {
//   // Loop j untuk menambahkan spasi setiap baris
//   for (var j = rows - i; j >= 1; j--) {
//     stars += "   ";
//   }

//   // Loop k untuk menambahkan bintang setiap baris
//   for (var k = 1; k <= (i - 1) * 2 + 1; k++) {
//     stars += " * ";
//   }

//   // Menambahkan new line
//   stars += "\n";
// }
// // Menampilkan hasi akhir
// console.log(stars);

///////////////////////////
// DOUBLE PYRAMID TRIANGLE
//////////////////////////

// 1. s s s s  *
// 2. s s s  * * *
// 3. s s * * * * *
// 4. s * * * * * * *
// 5. * * * * * * * * *

// var stars = "";
// var rows = 5;

// for (var i = 1; i <= rows; i++) {
//   // Spasi per baris
//   for (var j = rows - i; j >= 1; j--) {
//     stars += "   ";
//   }

//   // Bintang per baris
//   for (var k = 1; k <= (i - 1) * 2 + 1; k++) {
//     stars += " * ";
//   }

//   // New Line per baris
//   stars += "\n";
// }

// 5. * * * * * * * * *
// 4. s * * * * * * *
// 3. s s * * * * *
// 2. s s s * * *
// 1. s s s s *

// for (var i = rows; i >= 1; i--) {
//   // Spasi per baris
//   for (var j = rows - i; j >= 1; j--) {
//     stars += "   ";
//   }

//   // Bintang per baris
//   for (var k = 1; k <= (i - 1) * 2 + 1; k++) {
//     stars += " * ";
//   }

//   // New Line per baris
//   stars += "\n";
// }

// console.log(stars);

/////////////
// FIZZ BUZZ
////////////

/*
    Jika suatu angka dapat dibagi 3. Gantikan dengan kata Fizz

    Jika suatu angka dapat dibagi 5. Gantikan dengan kata Buzz

    Jika suatu angka dapat dibagi 3 dan 5. Gantikan dengan kata FizzBuzz

    Jika kita ingin mencari nilai yang dapat dibagi oleh dua angka tertentu, maka bagilah dengan angka hasil perkalian dari dua nilai tersebut

    FizzBuzz akan muncul saat suatu angka dapat dibagi 15.
*/

var number = 45;

for (var i = 1; i <= number; i++) {
  if (i % 15 == 0) {
    console.log("FizzBuzz");
  } else if (i % 3 == 0) {
    console.log("Fizz");
  } else if (i % 5 == 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}
