// Exercise

// 1.

{
  function PolaSegitiga(tinggi) {
    let counter = 1;
    for (let i = 1; i <= tinggi; i++) {
      let baris = "";
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
  var number = 15;

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
}

// 3.

{
  function hitungBMI(berat, tinggi) {
    var bmi = berat / Math.pow(tinggi, 2);
    var kategori = "";

    if (bmi < 18.5) {
      kategori = "berat badan lebih sedikit";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      kategori = "ideal";
    } else if (bmi >= 25.0 && bmi <= 29.9) {
      kategori = "kegemukan";
    } else if (bmi >= 30.0 && bmi <= 39.9) {
      kategori = "sangat kelebihan berat badan";
    } else {
      kategori = "kegemukan";
    }

    return kategori;
  }

  var berat = 95; // dalam kilogram
  var tinggi = 1.75; // dalam meter
  var kategoriBMI = hitungBMI(berat, tinggi);
  console.log("Kategori BMI:", kategoriBMI);
}

// 4.

{
  function deleteNum(number) {
    return number.filter((num) => num % 2 === 0);
  }

  let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let hasil = deleteNum(array);

  console.log(hasil);
}

// 5.

{
  function helloWorld(param) {
    let array = param.split(" ");
    console.log(array);
  }

  let string = "Hello World";
  helloWorld(string);
}
