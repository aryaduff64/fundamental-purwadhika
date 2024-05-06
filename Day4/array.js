// ARRAY
// Case. List Student JCWD = Aboy, Inmanuel, Wulan
// const studentJCWD1 = "Aboy";
// const studentJCWD2 = "Immanuel";
// const studentJCWD3 = "Wulan";

// CRUD (Create, Read, Update, Delete)
// Create Array
// const studentJCWDArray = ["Aboy", "Immanuel", "Wulan"];
//                          0         1          2
// Read Array
// console.log(studentJCWDArray[2]);
// console.log(studentJCWDArray[0]);
// console.log(`${studentJCWDArray[0]} ${studentJCWDArray[1]}`);
// Update Array
// studentJCWDArray[1] = "Rayhan";
// console.log(studentJCWDArray);
// Delete Array
// studentJCWDArray[1] = "";
// console.log(studentJCWDArray);

// Method
// .length
// const programInPwd = ["JCWD", "JCDM", "JCDS", "JCUIUX"];
// console.log(programInPwd.length);

// const fruits = ["Jeruk", "Anggur"];
// fruits.push("Durian");
// console.log(fruits);

// .pop: Menghapus data di index paling akhir
// const vegetables = ["Sawi", "Kol"];
// vegetables.pop();
// console.log(vegetables);

// .unshift: Menambahkan data di index paling awal
// const cars = ["Toyota", "Honda"];
// cars.unshift("Wuling");
// console.log(cars);

// .shift: Menghapus data di index paling awal
// const snacks = ["Chitato", "Taro"];
// snacks.shift();
// console.log(snacks);

// .slice
// const foods = ["Pizza", "Mie", "Burger"];
// console.log(foods.slice(0, 2));

// .splice: Menghapus & Menambah Data
// .splice(startIndex, totalToDelete, newData)
// const drinks = ["Haus", "Es Teh Manis Solo", "Fore", "Tomorow"];
// drink.splice(1, 1)
// console.log(drinks);

// drinks.splice(0, 1, 'Janji Jiwa)
// console.log(drinks) // ['Janji Jiwa', 'Es Teh Manis Solo', 'Fore', 'Tomorow']

// drinks.splice(1, 0, 'Kenangan')
// console.log(drinks);

// drinks.splice(0, 1, '')
// console.log(drinks);

// .indexOf
// const brands = ["Indomie", "Supermie", "Mie Sedap Enak"];
// const inputUser = "Enak";
// console.log(brands.indexOf(inputUser.toLowerCase()));

// .includes: true atau false (boolean)
// console.log(brands.includes("Lemonilo"));
// console.log(brands.includes("Indomie"));

// .sort
// const numbers = [5, 100, 1, 10, 3];
// numbers.sort((low, high) => high - low);

// const alphabets = ["bebas", "apa", "ziapa", "ada"];
// alphabets.sort();
// console.log(alphabets);

// ARRAY SPECIAL METHOD FOR LOOPING
// Case. Ingin Menampilkan Angka dari 1-5 Menggunakan console.log()
// for (let start = 1; start <= 5; start++) {
// console.log(start);
// }

// const arrData = ['Abc', 123, undefined, null, {}, 'Bca'] // arrData.length = 6 - 1 = 5
// for(let start=0; start<=arrData.length-1; start++){
//     console.log(arrData[start])
// }

// .forEach: Mirip Seperti Looping For Biasa
// const arr = ["JCWD", "JCDM", "JCDS"];
// arr.forEach((value, idx) => {
// value;
// });

// .map: Menghasilkan Array Baru
// const newArr = arr.map((item, index) => {
// return item;
// });
// console.log(newArr);

// .filter: Menghasilkan Array Baru & Dapat Melakukan Filter
// const arrNumbers = [50, 70, 10, 30, 90];

// const newArrFilter = arrNumbers.filter((item, index) => {
// return item >= 70;
// });
// const newArrMap = arrNumbers.map((item, index) => {
// return item >= 70;
// });
// console.log(newArrFilter);
// console.log(newArrMap);

////////////////////////////////////////////////
// PUSH : Menambahkan value pada index terakhir
// POP  : Menghapus value pada index terakhir
///////////////////////////////////////////////

// var things = ["book", "pen", "clock"];
// console.table(things);

// things.push("jacket", "mouse", "memmory");
// console.table(things);

// things.pop();
// things.pop();
// console.table(things);

/////////////////////////////////////////////////
// UNSHIFT : Menambahkan value pada index pertama
// SHIFT : Menghapus value pada index pertama
/////////////////////////////////////////////////

// var things = ["book", "pen", "clock"];
// console.table(things);

// things.unshift("jacket", "top", "hat");
// console.table(things);

// things.shift();
// things.shift();
// things.shift();
// console.table(things);

//////////////////////////////////////////
// SPLICE : Menghapus dan Menambahkan data
//////////////////////////////////////////

/*

  Syntax

  array.splice(index, amount)

  index : index awal dimulainya operasi (menghapus)
  amount : jumlah data yang ingin dihapus mulai dari 'index'
  new data : data baru yang akan ditambahkan ke array

*/

// var things = ["book", "pen", "clock", "papper"];
// console.table(things);

// things.splice(0, 2);
// console.table(things);

///////////////////////
// Case : Menambah data
///////////////////////

// var things = ["book", "pen", "clock", "papper"];
// console.table(things);

// things.splice(3, 0, "jacket", "top");
// console.table(things);

// things.splice(1, 0, "megazine", 1987);
// console.table(things);

/////////////////////////////////////
// Case : Menambah dan Menghapus data
/////////////////////////////////////

// var things = ["book", "pen", "clock", "papper"];

// console.table(things);

// things.splice(2, 1, "door");
// console.table(things);

// things.splice(0, 3, "jacket", "top");
// console.table(things);

//////////////////////////////////////////////////////////////
// Delete : Menghapus data, dan indexnya akan berisi undefined
//////////////////////////////////////////////////////////////

// var things = ["book", "pen", "clock", "papper"];
// console.log(things);

// delete things[0];
// console.log(things);

// delete things[2];
// console.log(things);

////////////////////////////////
// SLICE : Copy value dari array
////////////////////////////////

/*

  Syntax

  array.slice(start index, end index)

  start index : index awal dari data yang akan dicopy
  end index   : index akhir dari data yang akan dicopy (tidak termasuk)

*/

// var fruits = ["apple", "banana", "cherry", "lemon", "watermelon"];
// console.table(fruits);

// copy banana dan cherry
// var banCherry = fruits.slice(1, 3);
// console.table(banCherry);

// copy banana, cherry, dan lemon
// var banCheMon = fruits.slice(2, 5);
// console.table(banCheMon);

/*

  Method yang mengubah nilai asli:
  1. push
  2. pop
  3. shift
  4. unshift
  5. splice

  Method yang tidak mengubah nilai asli (hasil operasinya disimpan ke variabel baru)
  1. slice
  2.includes
  3.indexOf

*/

////////////////////////////////////////////////////////////////////
// INCLUDES : Memeriksa apakah suatu array mengandung value tertentu
////////////////////////////////////////////////////////////////////

// var colors = ["black", "grey", "white", "red", "green", "blue"];
// console.log(colors);

// var colRed = colors.includes("red");
// console.log(colRed);

// var colPurple = colors.includes("purple");
// console.log(colPurple);

// var colRedCapital = colors.includes("Red");
// console.log(colRedCapital);
