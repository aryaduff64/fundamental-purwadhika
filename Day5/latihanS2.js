////////////////
// Exercise
// Slide - 02
////////////////

// 01
const oddNumberRemover = (array = []) => {
  let evenNumber = [];
  array.forEach((e) => {
    e % 2 === 0 ? evenNumber.push(e) : "";
  });

  return evenNumber;
};
console.log(oddNumberRemover([1, 2, 3, 4, 5, 6]));
console.log("");

// 02

function SliceArrayBasedOnMaxSize(maxSize, ...numbers) {
  return numbers.slice(0, maxSize);
}

console.log(SliceArrayBasedOnMaxSize(5, 10, 3, 7, 100, 25, 55));

// 03

function CombineTwoArray(arr1, arr2) {
  return [...arr1, ...arr2];
}

console.log(CombineTwoArray([1, 2, 3], [4, 5, 6]));

// 04

function FindDuplicate(arrNumbers) {
  const arrResult = [];
  arrNumbers.forEach((number) => {
    if (arrNumbers.indexOf(number) !== arrNumbers.lastIndexOf(number)) {
      if (!arrResult.includes(number)) {
        arrResult.push(number);
      }
    }
  });
  return arrResult;
}

console.log(FindDuplicate([1, 2, 2, 3, 3]));

// 05

function FindDifferenceElementInTwoArray(arr1, arr2) {
  const differentElement = [];

  arr1.forEach((number) => {
    if (!arr2.includes(number)) {
      if (!differentElement.includes(number)) {
        differentElement.push(number);
      }
    }
  });

  arr2.forEach((number) => {
    if (!arr1.includes(number)) {
      if (!differentElement.includes(number)) {
        differentElement.push(number);
      }
    }
  });

  return differentElement;
}

console.log(FindDifferenceElementInTwoArray([1, 3, 5], [2, 4, 5]));
