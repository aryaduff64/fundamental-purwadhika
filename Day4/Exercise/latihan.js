// Exercise

// 1.

{
  function PolaSegitiga(tinggi) {
    let counter = 1;
    //looping untuk membuat tingginya
    for (let i = 1; i <= tinggi; i++) {
      let baris = "";
      //looping untuk membuat lebarnya
      for (j = 1; j <= i; j++) {
        baris += counter.toString().padStart(2, "0") + " ";
        counter++;
      }
      console.log(baris);
    }
  }
  PolaSegitiga(4);
}

// 2.

{
  // var number = 15;
  // for (var i = 1; i <= number; i++) {
  //   if (i % 15 == 0) {
  //     console.log("FizzBuzz");
  //   } else if (i % 3 == 0) {
  //     console.log("Fizz");
  //   } else if (i % 5 == 0) {
  //     console.log("Buzz");
  //   } else {
  //     console.log(i);
  //   }
  // }
}

// 3.

// {
//   function hitungBMI(berat, tinggi) {
//     var bmi = berat / Math.pow(tinggi, 2);
//     var kategori = "";

//     if (bmi < 18.5) {
//       kategori = "berat badan lebih sedikit";
//     } else if (bmi >= 18.5 && bmi <= 24.9) {
//       kategori = "ideal";
//     } else if (bmi >= 25.0 && bmi <= 29.9) {
//       kategori = "kegemukan";
//     } else if (bmi >= 30.0 && bmi <= 39.9) {
//       kategori = "sangat kelebihan berat badan";
//     } else {
//       kategori = "kegemukan";
//     }

//     return kategori;
//   }

//   var berat = 95; // dalam kilogram
//   var tinggi = 1.75; // dalam meter
//   var kategoriBMI = hitungBMI(berat, tinggi);
//   console.log("Kategori BMI:", kategoriBMI);
// }

// 4.

// {
//   function deleteNum(number) {
//     return number.filter((num) => num % 2 === 0);
//   }

//   let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//   let hasil = deleteNum(array);

//   console.log(hasil);
// }

// 5.

// {
//   function helloWorld(param) {
//     let array = param.split(" ");
//     console.log(array);
//   }

//   let string = "Hello World";
//   helloWorld(string);
// }

/////////////////////////////////////////////////////////////////////////////////////

function GenerateTriangle(n) {
  let triangle = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      triangle += "*";
    }
    triangle += "\n";
  }
  return triangle;
}
console.log(GenerateTriangle(4));

///////////////////////////////////////////////////////////////////////////////////

// * * * * *
// * * * * *
// * * * * *
function GenerateBox(w, h) {
  let box = "";
  for (let i = 1; i <= h; i++) {
    for (let j = 1; j <= w; j++) {
      box += "* ";
    }
    box += "\n";
  }
  return box;
}
console.log(GenerateBox(3, 5));

/////////////////////////////////////////////////////////////////////////////////

// * * * * *
// * * * *
// * * *
// * *
// *

function ReverseTriangle(n) {
  // n=5
  let result = "";
  for (let i = n; i >= 1; i--) {
    for (let j = i; j >= 1; j--) {
      result += "*";
    }
    result += "\n";
  }
  return result;
}
console.log(ReverseTriangle(5));

////////////////////////////////////////////////////////////////////////////////

function FizzBuzz(totalLooping) {
  let arrFizzBuzz = [];
  for (let i = 1; i <= totalLooping; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      // TRUE && FALSE
      arrFizzBuzz.push("FizzBuzz");
    } else if (i % 3 === 0) {
      arrFizzBuzz.push("Fizz");
    } else if (i % 5 === 0) {
      arrFizzBuzz.push("Buzz");
    } else {
      arrFizzBuzz.push(i);
    }
  }

  return arrFizzBuzz;
}
FizzBuzz(15);

////////////////////////////////////////////////////////////////////////////

function CalculateBMI(weight, height) {
  const bmi = weight / (height * height);
  if (bmi < 18.5) {
    return "Less Weight";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    // TRUE || FALSE ---> TRUE
    return "Ideal";
  } else if (bmi >= 25 && bmi <= 29.9) {
    return "Overweight";
  } else if (bmi >= 30 && bmi <= 39.9) {
    return "Very Overweight";
  } else {
    return "Obesity";
  }
}
console.log(CalculateBMI(75, 1.7));

///////////////////////////////////////////////////////////////////////////

function RemoveOddNumbers(arrNumbers) {
  // const result = arrNumbers.filter(number => number % 2 === 0)

  // return result
  const arrEvenNumbers = [];
  arrNumbers.forEach((number) => {
    if (number % 2 === 0) {
      arrEvenNumbers.push(number);
    }
  });

  return arrEvenNumbers;
}
console.log(RemoveOddNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

////////////////////////////////////////////////////////////////////

function SplitWord(text) {
  return text.split(" ");
}
penampung1 = []; // ['Hello', 'World']
penampung2 = ""; //Hello ---> ''
console.log(SplitWord("Hello World!"));
