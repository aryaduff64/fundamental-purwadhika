// 1.
let length = 3;
let width = 5;
const area = width * length;
console.log(`area = ${area}`);

// 2.

let length2 = 5;
let width2 = 3;

const perimeter = 2 * (length2 + width2);
console.log(`perimiter = ${perimeter}`);

// 3.
function circleProperties(radius) {
  var diameter = 2 * radius;
  var circumference = 2 * Math.PI * radius;
  var area = Math.PI * Math.pow(radius, 2);

  return { diameter: diameter, circumference: circumference, area: area };
}

var radius = 5;

var properties = circleProperties(radius);

console.log("Diameter of the circle:", properties.diameter);
console.log(
  "Circumference of the circle:",
  properties.circumference.toFixed(4)
);
console.log("Area of the circle:", properties.area.toFixed(4));

// 4.
let a = 80;
let b = 65;

let angle3 = 180;

const findThirdAngle = angle3 - (a + b);
console.log(`The third angle = ${findThirdAngle}`);

// 5.
// Write a code to get difference between dates in days.

const date1 = new Date("2023-10-05");
const date2 = new Date("2023-10-20");
const bedaTanggal = Math.abs(date2 - date1); // math absolute -> hasilnya akan selalu positif

const bedaHari = Math.round(bedaTanggal / (1000 * 3600 * 24)); // membulatkan angka
console.log("Perbedaan hari : " + bedaHari);

// 6.
const hari = 400;
const tahun = Math.floor(hari / 365);
const bulan = Math.floor((hari % 365) / 30);
const tanggal = Math.floor((hari % 365) % 30);

console.log(tahun + " tahun " + bulan + " bulan " + tanggal + " hari");
