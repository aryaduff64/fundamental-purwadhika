// 1.
// MultiplicationTable

{
  function multiplicationTable(number) {
    console.log(`Number → ${number}`);
    for (let i = 1; i <= 10; i++) {
      console.log(`${number} x ${i}`);
    }
  }

  const number = 9;
  if (!isNaN(number)) {
    multiplicationTable(number);
  } else {
    console.log("Invalid input. Please enter a valid number.");
  }
}

// 2.
// Palindrome

{
  const inputString = "madam";
  let palindrome = inputString.split("").reverse().join("");
  if (inputString === palindrome) {
    console.log(`${inputString} → The input string is a palindrome.`);
  } else {
    console.log("The input string is not a palindrome.");
  }
}

// 3.
// Convert centimeter to kilometer

let centimeter;
const kilometer = (centimeter = 100000);
const result = centimeter / centimeter;
console.log(`${result} km`);

// 4.
// Format number as currency

{
  const number = 1000;
  let formattedIdr = number.toLocaleString("id-ID", {
    style: "currency",
    currency: "IDR",
  });

  console.log(formattedIdr);
}

// 5.
// RemoveString

{
  let string = "Hello world";
  const searchString = "ell";

  removeString = string.replace(searchString, "");

  console.log(removeString);
}

// 6.
// Capitalize String

{
  let string = "hello world";

  const words = string.split(" ");

  for (let i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    console.log(words[i]);
  }

  let capitalizedString = words.join(" ");

  console.log(capitalizedString);
}

// 7.
// Reverse String

{
  let string = "hello";
  const reversed = string.split("").reverse().join("");

  console.log(reversed);
}

// 8.
//

{
  let str = "The QuiCk BrOwN Fox";
  let swappedStr = "";

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (char === char.toUpperCase()) {
      swappedStr += char.toLowerCase();
    } else {
      swappedStr += char.toUpperCase();
    }
  }

  console.log(swappedStr);
}

// 9.
//

{
  const angka1 = 42;
  const angka2 = 27;

  let largest;

  if (angka1 > angka2) {
    largest = angka1;
  } else {
    largest = angka2;
  }

  console.log(largest); // Hasil: 42
}

// 10.
//
{
  let a = 42;
  let b = 27;
  let c = 18;

  if (a > b && a < c) {
    if (b > c) {
      console.log(`${a},${b},${c}`);
    } else {
      console.log(`${a},${c},${b}`);
    }
  } else if (b > a || c > a) {
    if (c > b) {
      console.log(`${b},${c},${a}`);
    } else {
      console.log(`${b},${a},${c}`);
    }
  } else {
    if (a > b) {
      console.log(`${c},${b},${a}`);
    } else {
      console.log(`${c},${a},${b}`);
    }
  }
}

// 11.
//

{
  let string;
  let angka;
  let nll = null;

  if (typeof string === "string") {
    console.log(`${string} → 1`);
  } else if (typeof angka === "number") {
    console.log(`${angka} → 2`);
  } else {
    console.log(`${nll} → 3`);
  }
}

// 12.
//

{
  const inputStr = "An apple a day keeps the doctor away";
  let modifiedStr = "";

  for (let i = 0; i < inputStr.length; i++) {
    if (inputStr[i].toLowerCase() === "a") {
      modifiedStr += "*";
    } else {
      modifiedStr += inputStr[i];
    }
  }
  console.log(modifiedStr);
}
