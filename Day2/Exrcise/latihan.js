// 1.
/////////////////////////////////
// Mengubah Celsius ke Fahrenheit
////////////////////////////////

// Variable
let celsius = 60;
let fahrenheit;

// Condition : Mengecek tipe data variable celsius dan membandingkan (===) degan "number"
if (typeof celsius === "number") {
  // mengubah isi variable fahrenheit dengan menjumlahkan variable celsius (60 * 9) = 540 540 / 5 = 108 108 + 32 = 140
  fahrenheit = (celsius * 9) / 5 + 32;

  // lalu menampilkan hasilnya dengan console
  console.log(`${celsius} Celsius → ${fahrenheit} Fahrenheit`); // Hasil = 60 Celsius → 140 Fahrenheit
} else {
  // menampilkan dengan console
  console.log("Harap berikan angka Celsius yang valid");
}

// 2.
//////////////////////////////////////////
// Memerikasa bilangan ganjil atau genap
//////////////////////////////////////////

{
  // Variable
  let number = 25;

  // Condition : variable number di modulo dan di bandingkan (===) = false
  if (number % 2 === 0) {
    // Menampilkan hasil dengan console
    console.log(number + " adalah bilangan genap.");
  } else {
    // Menampilkan hasil dengan console
    console.log(number + " adalah bilangan ganjil."); // Hasil = 25 adalah bilangan ganjil.
  }

  // Variable
  number = 2;

  // Condition : variable number di modulo dan di bandingkan (===) = true
  if (number % 2 === 0) {
    // Menampilkan hasil dengan console

    console.log(number + " adalah bilangan genap."); // Hasil = 2 adalah bilangan genap.
  } else {
    // Menampilkan hasil dengan console

    console.log(number + " adalah bilangan ganjil.");
  }
}

// 3.
//////////////////////////////////////////////////
// Memeriksa suatu bilangan prima atau bukan
//////////////////////////////////////////////////

{
  // Variable
  let number = 7;
  let isPrime = true;

  // Condition : apakah variable number Kurang Dari Sama Dengan 1 = false
  if (number <= 1) {
    // Mengubah value variable isPrime
    isPrime = false;
  } else {
    /* 
    // Membuat kondisi di dalam else expression dengan for Loop

    Variable i = 2, apakah variable i Kurang Dari Sama Dengan <= variable number
    yang telah di beri method Math.sqrt (Square root) mencari akar dua bilangan (number = 7) = true
    lalu di naikkan angka divariable i nya
    */
    for (let i = 2; i <= Math.sqrt(number); i++) {
      // ada pengecekan lagi apakah variable number di modulo 2 === 0 = false
      if (number % i === 0) {
        isPrime = false;
        break;
      }
    }
  }
  // lalu di cek variable isPrime = true
  if (isPrime) {
    // Menampilkan hasil dengan console
    console.log(`${number} → adalah bilangan prima.`); // Hasil = 7 → adalah bilangan prima.
  } else {
    // Menampilkan hasil dengan console
    console.log(`${number} → bukan bilangan prima.`);
  }

  number = 6;
  isPrime = true;

  if (number <= 1) {
    isPrime = false;
  } else {
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        isPrime = false;
        break;
      }
    }
  }

  if (isPrime) {
    console.log(`${number} → adalah bilangan prima.`);
  } else {
    console.log(`${number} → bukan bilangan prima.`); // Hasil = 6 → bukan bilangan prima.
  }
}

// 4.
/////////////////////////////
// Mencari jumlah bilangan
/////////////////////////////

{
  // Variable
  let number = 5;
  let sum = 0;

  /* 
  Condition : variable i = 1, apakah i kurang dari sama dengan number, lalu di naikkan angka di variable i
  menggunakan Operator Increment
  */
  for (let i = 1; i <= number; i++) {
    // Variable sum += i, variable i yang akan di tambahkan terus nilainya sampai menemukan false
    sum += i;
  }

  // Menampilkan hasi di console.log dengan String template dan memanggil variable
  console.log(`${number} → 1 + 2 + 3 + 4 + 5 = ${sum}`); // Hasil = 5 → 1 + 2 + 3 + 4 + 5 = 15

  number = 3;
  sum = 0;

  for (let i = 1; i <= number; i++) {
    sum += i;
  }

  console.log(`${number} → 1 + 2 + 3 = ${sum}`); // Hasil = 3 → 1 + 2 + 3 = 6
}

// 5.
/////////////////////////////
// mencari faktorial bilangan
/////////////////////////////

{
  // Variable Mendefinisikan nilai awal
  let n = 4;
  let factorial = 1;

  // Menggunakan loop untuk menghitung faktorial
  for (let i = n; i > 0; i--) {
    factorial *= i;
    console.log(i);
  }

  // Menampilkan hasil dengan console
  console.log(`4! → 4 x 3 x 2 x 1 = ${factorial}`); // Hasil = 24
}
{
  // Variable Mendefinisikan nilai awal
  let n = 6;
  let factorial = 1;

  // Menggunakan for Loop untuk menghitung faktorial
  for (let i = n; i > 0; i--) {
    factorial *= i;
    console.log(i);
  }

  // Menampilkan hasil dengan console
  console.log(`6! → 6 x 5 x 4 x 3 x 2 x 1 = ${factorial}`); // Hasil = 720
}

// 6.
//////////////////////////////////////
// Mencetak N bilangan fibonacci
//////////////////////////////////////

{
  // Variable
  let n = 15;
  // Array
  let fibonacci = [1, 1];

  // for Loop
  for (let i = 2; i < n; i++) {
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
  }

  console.log(`${n} → ${fibonacci[n - 1]}`); // Cetak angka Fibonacci ke-N Hasil = 15 → 610
}
