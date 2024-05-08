//////////////////////
// Exercise
// Slide - 03
//////////////////////

/////////
// 01
/////////

function ShowPrimitiveData(arrRandom) {
  const arrPrimitiveData = [];
  arrRandom.forEach((data) => {
    if (typeof data !== "object") arrPrimitiveData.push(data);
  });
  return arrPrimitiveData;
}
console.log(ShowPrimitiveData([1, [], undefined, , {}, "string", {}, {}]));

////////////
// 02
////////////

function FindSecondSmallest(arrNumbers) {
  const sortedArrNumbers = arrNumbers.sort((low, high) => low - high);
  return sortedArrNumbers[1];
}
console.log(FindSecondSmallest([10, 5, 100, 25, 3, 1, 5, 1000]));

//////////
// 03
//////////

function SumTypeOfNumber(arrData) {
  let result = 0;

  arrData.forEach((data) => {
    if (typeof data === "number") result += data;
  });

  return result;
}
console.log(SumTypeOfNumber(["3", 1, "hello", null, false, undefined, 2]));

//////////
// 04
//////////

const sumOfDuplicateArrayValue = (array = []) => {
  let duplicateNum = [];
  let flag = 0;
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (j !== i) {
        if (!duplicateNum.includes(array[j])) {
          if (array[i] === array[j]) {
            duplicateNum.push(array[j]);
          }
        }
      }
    }
  }
  array.forEach((e) => {
    if (e === duplicateNum[0]) {
      flag++;
    }
  });
  return duplicateNum[0] * flag;
};
console.log(sumOfDuplicateArrayValue([10, 20, 40, 10, 50, 30, 10, 60, 10]));

///////////
// 05
//////////

const RPSGame = (userChoice = "") => {
  const Choice = ["Rock", "Paper", "Scissors"];

  // result user win/lose status
  const rule = (theChoice) => {
    switch (theChoice) {
      case "Rock":
        return { Paper: "Lose", Scissors: "Win", Rock: "Draw" };
      case "Paper":
        return { Paper: "Draw", Scissors: "Lose", Rock: "Win" };
      case "Scissors":
        return { Paper: "Win", Scissors: "Draw", Rock: "Lose" };
      default:
        return { Paper: "Unknown", Scissors: "Unknown", Rock: "Unknown" };
    }
  };

  let opponent = Choice[Math.floor(Math.random() * 3)];
  let user = "";
  Choice.forEach((e) => (e === userChoice ? (user = e) : ""));
  console.log(`User : ${user} | Opponent : ${opponent}, User (win/lose) : `);
  return rule(user)[opponent];
};
console.log(RPSGame("Rock"));
