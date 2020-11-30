// 1. Функція – яка повертає масив випадкових цілих чисел.
const getRandomArray = (length = 1, min = 0, max = 10) => {
  const randomNumber = (min, max) =>
    Math.floor(Math.random() * (max - min + 1)) + min;
  return new Array(length).fill(1).map(() => randomNumber(min, max));
};
const resultGetRandomArray = getRandomArray(10, 5, 95);
console.log(
  "🚀 ~ file: 05-hw.js ~ line 20 ~ resultGetRandomArray",
  resultGetRandomArray
);

const getRandomArray1 = function (length = 1, min = 0, max = 10) {
  const randomNumber1 = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  return new Array(length).fill(1).map(() => randomNumber1(min, max));
};

const resultGetRandomArray1 = getRandomArray1(10, 5, 95);
console.log(
  "🚀 ~ file: 05-hw.js ~ line 20 ~ resultGetRandomArray1",
  resultGetRandomArray1
);

//2. Створіть функцію  – яка рахує середнє арифметичне всіх переданих в неї аргументів. НЕЦІЛІ ЧИСЛА ІГНОРУЮТЬСЯ
const getAverage = function (...numbers) {
  const numbersBox = [...numbers]
    .filter((number) => Number.isInteger(number))
    .sort((a, b) => a - b);
  const numberAverage = Math.round(
    numbersBox.reduce(function (total, number) {
      return total + number;
    }, 0) / numbersBox.length
  );
  return numberAverage;
};

const resultGetAverage = getAverage(98, 57, 56, 57, 53, 59, 6.35, 1000, "sdf");
console.log(resultGetAverage);

//5. Створіть функцію  – яка фільтрує парні числа передані як аргументи функції
const filterEvenNumbers = function (...numbers) {
  const oddNumbers = [...numbers].filter((number) => number % 2 === 1);
  return oddNumbers;
};

const resultFilterEvenNumbers = filterEvenNumbers(1, 2, 3, 4, 5, 6, 96, 97);
console.log(
  "🚀 ~ file: 05-hw.js ~ line 51 ~ resultFilterEvenNumbers",
  resultFilterEvenNumbers
);

//6. Створіть функцію – яка порахує кількість чисел більших 0
const countPositiveNumbers = function (...numbers) {
  const positiveNumbers = [...numbers].filter((number) => number > 0);
  return positiveNumbers.length;
};

const resultCountPositiveNumbers = countPositiveNumbers(1, -2, 3, -4, -5, 6);
console.log(
  "🚀 ~ file: 05-hw.js ~ line 63 ~ resultCountPositiveNumbers",
  resultCountPositiveNumbers
);

//7. Створіть функцію getDividedByFive(...numbers) – яка відфільтрує усі елементи в масиві та залишить тільки ті, які діляться на ціло на 5
const getDividedByFive = (...numbers) =>
  numbers.filter((number) => number % 5 === 0);
const resultGetDividedByFive = getDividedByFive(
  6,
  2,
  55,
  11,
  78,
  2,
  55,
  77,
  57,
  87,
  23,
  2,
  56,
  3,
  2
);

console.log(
  "🚀 ~ file: 05-hw.js ~ line 71 ~ resultGetDividedByFive",
  resultGetDividedByFive
);

//8. Створіть функцію – яка:
//1) розіб'є фразу на слова.
//2) замінить погані слова на зірочки (*).
const replaceBadWords = (...usersMessages) =>
  usersMessages.join(" ").replace(/fuck|shit|bitch|asshole|creep/gi, "***");

const resultReplaceBadWords = replaceBadWords(
  "Are you fucking kidding?",
  "No, bitches",
  "Shut up, asshole",
  "Dude, stop being a creepy"
);
console.log(
  "🚀 ~ file: 05-hw.js ~ line 103 ~ resultReplaceBadWords",
  resultReplaceBadWords
);
