// Exercise
// Slide - 01

//////////
// 01
//////////

function FindLowerstHighestAndAverage(arrNumbers) {
  let lowest = arrNumbers[0];
  let highest = arrNumbers[0];
  let avg = arrNumbers[0];

  arrNumbers.forEach((number) => {
    if (number < lowest) lowest = number;
    if (number > highest) highest = number;
    avg += number;
  });
  return {
    lowest,
    highest,
    avg: avg / arrNumbers.length,
  };
}

console.log(FindLowerstHighestAndAverage([12, 5, 23, 18, 4, 45, 32]));

//////////
// 02
//////////

function ConcateningByCommaAndByAnd(arrStr) {
  return (
    arrStr.slice(0, arrStr.length - 1).join(", ") +
    " and " +
    arrStr[arrStr.length - 1]
  );
}

console.log(ConcateningByCommaAndByAnd(["Banana", "Cherry", "Melon", "Apple"]));

///////////
// 03
///////////

const splitString = (theString = "") => {
  let splitedString = [];
  let temp = "";
  // console.log(theString.length);
  for (let i = 0; i < theString.length; i++) {
    if (theString[i] !== " ") {
      temp += theString[i];
      if (i + 1 === theString.length) {
        splitedString.push(temp);
        temp = "";
      }
    } else {
      // console.log(temp);
      splitedString.push(temp);
      temp = "";
    }
  }
  return splitedString;
};
console.log(splitString("Hello World"));

/////////
// 04
/////////

function SumElementOfTwoArrays(arr1, arr2) {
  const result = [];
  arr1.forEach((number, index) => {
    result.push(number + arr2[index]);
  });
  return result;
}

console.log(SumElementOfTwoArrays([1, 2, 3], [3, 2, 1]));

////////
// 05
////////

function FilteringNewElement(arr, newElement) {
  if (!arr.includes(newElement)) arr.push(newElement);

  return arr;
}

console.log(FilteringNewElement([1, 5, 10, 15], 3));
