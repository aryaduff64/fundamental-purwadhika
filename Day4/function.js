// FUNCTION: Wadah yang digunakan Untuk Menyimpan Baris Kode -> Reusable
// Tahapan Membuat Function
// 1. Create Function
// 2. Call Function

// Type Function:
// 1. Declareative Function
// function Output() {
// console.log("Hello, World!");
// }
// Output();

// 2. Expression Function
// const PrintOutput = function () {
// console.log("Hi, JCWD");
// };
// PrintOutput();

// 3. Arrow Function
// const ShowOutput = () => {
// console.log("Hello, Student");
// };
// ShowOutput();

// FUNCTION with PARAMETER(s)
// function OutputGreeting(param1) {
// console.log(`Hello, ${param1}`);
// }

// OutputGreeting("Student(s)"); // Argument: Value yang dikirimkan Menuju Parameter
// OutputGreeting("Pak Purwa");

// Case. Menampilkan Angka dari 1-5
// function ShowNumbers(number) {
// number = 100;
// for (let i = 1; i <= number; i++) {
// i <= 100;
// console.log(i);
// }
// }
// ShowNumbers(5);

// Menampilkan Angka dari 1-100
// ShowNumbers(100);

// function Penjumlahan(num1, num2) {
// num1 = 10; num2 = 5
// console.log(num1 + num2); // 10 + 5 = 15
// }

// Penjumlahan(10, 5);

// FUNCTION with RETURN
// function Perkalian(num1, num2) {
//   return num1 * num2;
// }

// const resultPerkalian = Perkalian(10, 5) / 5;
// console.log(resultPerkalian);

// Exercise. Buatlah Mini Aplikasi Calculator dengan Menggunakan Function.
//           Fitur: Penjumlahan, Pengurangan, Pembagian dan Perkalian

// const operator = {
//   "+": "+",
//   "-": "-",
//   "/": "/",
//   "*": "*",
// };

// function MiniCalculator({ opt, num2, num1 }) {
//   let hasil = 0;
//   if (operator[opt] === "+") {
//     hasil = num1 + num2;
//   } else if (operator[opt] === "-") {
//     hasil = num1 - num2;
//   } else if (operator[opt] === "/") {
//     hasil = num1 / num2;
//   } else if (operator[opt] === "*") {
//     hasil = num1 * num2;
//   }
//   console.log("hasil", hasil);
// }

// MiniCalculator({ opt: "+", num2: 2, num1: 4 });

// {
//   function MiniCalculator({ num1, opt, num2 }) {
//     let hasil = 0;
//     if (opt === "+") {
//       hasil = num1 + num2;
//     } else if (opt === "-") {
//       hasil = num1 - num2;
//     } else if (opt === "/") {
//       hasil = num1 / num2;
//     } else if (opt === "*") {
//       hasil = num1 * num2;
//     } else if (toString(opt)) {
//       console.log("Masukkan Operator Nya");
//     } else {
//       console.log("Masukkan Angka");
//     }
//     console.log(hasil);
//   }
//   MiniCalculator({ num1: 20, opt: "-", num2: 15 });
// }

{
  const operator = {
    "+": "+",
    "-": "-",
    "/": "/",
    "*": "*",
  };

  function MiniCalculator(opt, num1, num2) {
    let hasil = 0;
    if (operator[opt] === "+") {
      hasil = num1 + num2;
    } else if (operator[opt] === "-") {
      hasil = num1 - num2;
    } else if (operator[opt] === "/") {
      hasil = num1 / num2;
    } else if (operator[opt] === "*") {
      hasil = num1 * num2;
    } else if (toString(opt)) {
      return "Masukkan Operasi";
    } else {
      return "Masukkan Angka";
    }
    console.log(`Hasil : ${hasil}`);
  }
  MiniCalculator("+", 1, 3);
}

// {
//   function MiniCalculator({ opt, num1, num2 }) {
//     let hasil = 0;
//     if (opt === "+") {
//       hasil = num1 + num2;
//     } else if (opt === "-") {
//       hasil = num1 - num2;
//     } else if (opt === "/") {
//       hasil = num1 / num2;
//     } else if (opt === "*") {
//       hasil = num1 * num2;
//     } else if (toString(opt)) {
//       console.log(`Masukkan Operator `);
//     } else {
//       console.log(`Masukkan Angka `);
//     }
//     console.log(`Hasil : ${hasil}`);
//   }
// }
// MiniCalculator({ num2: 15, opt: "*", num1: 78 });

// {
//   function MiniCalculator({ opt, num2, num1 }) {
//     if (opt === "+") {
//       console.log(num1 + num2);
//     } else if (opt === "-") {
//       console.log(num1 - num2);
//     } else if (opt === "/") {
//       console.log(num1 / num2);
//     } else if (opt === "*") {
//       console.log(num1 * num2);
//     }
//   }
// }

// MiniCalculator({ num2: 7, num1: 10, opt: "-" });

// function Calculator(num1, fitur, num2) {
//   switch (fitur) {
//     case "+":
//       console.log(num1 + num2);
//       break;
//     case "-":
//       console.log(num1 - num2);
//       break;
//     case "/":
//       console.log(num1 / num2);
//       break;
//     case "*":
//       console.log(num1 * num2);
//       break;
//     default:
//       console.log("Silahkan Masukkan Angka");
//   }
// }

// Calculator(17, "-", 5);
