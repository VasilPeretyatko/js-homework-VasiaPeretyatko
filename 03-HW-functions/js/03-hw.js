// #1 Найбільша цифра в числі
const getMaxDigit = function (...enteredNumbers) {
  let arrayDigitSTR = String(...enteredNumbers).split("");
  arrayDigitSTR = Math.max(...arrayDigitSTR.map(Number));
  return arrayDigitSTR;
};

// #3.1  Форматує ім'я
// (Arrow Function)
const firstLetterUpper = (nameUser = "unname") =>
  nameUser[0].toLocaleUpperCase() + nameUser.slice(1).toLocaleLowerCase();

// #3.2 Форматує ім'я
// Function Expression
const firstLetterUpper2 = function (nameUser = "unname") {
  if (Number.isInteger(nameUser)) return nameUser;
  return (nameFirstLetterUppe =
    nameUser[0].toLocaleUpperCase() + nameUser.slice(1).toLocaleLowerCase());
};

// #4 Сума зарплати після оплати податку
const clearSalary = function (staffSalary = "Введіть вашу зарплату") {
  const taxPDFO = 0.18;
  const taxMR = 0.015;

  if (!!staffSalary && staffSalary === "" && staffSalary === 0)
    return `Введіть вашу зарплату`;
  return Number(
    (staffSalary = staffSalary - (taxPDFO + taxMR) * staffSalary).toFixed(2)
  );
};

// #5 Рандомне ціле число в діапазоні від Н до М
const getRandomNumber = function (min = 0, max = 1) {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

// #6 Рахує  повторення заданої букви
const countLetter = function (letterToCount, yourWord) {
  let count = 0;
  letterToCount = letterToCount.toLocaleLowerCase();
  yourWord = yourWord.toLocaleLowerCase();

  for (let i = 0; i < yourWord.length; i++) {
    const letter = yourWord.charAt(i);
    if (letter === letterToCount) {
      count++;
    }
  }
  return count;
};

// #7 Обмін валюти
const currencyExchange = function (currency) {
  const DOLLAR_SIGN = "$";
  const UAH_SIGN = "грн.";
  const currencySum = parseFloat(currency);
  const dollarToGryvnaRate = 0.035;
  const gryvnaToDollarRate = 28.89;
  const errorMassege = "This currency is not available at this moment";
  let currencyResultShowUser = "Валюта не вибрана";
  let currencyExchangeSum = 0;

  if (currency.toLocaleLowerCase().includes("$")) {
    currencyExchangeSum = Number((currencySum * gryvnaToDollarRate).toFixed(2));
    currencyResultShowUser = `${currencyExchangeSum + " " + UAH_SIGN}`;
  } else if (
    currency.toLocaleLowerCase().includes("uah") ||
    currency.toLocaleLowerCase().includes("грн")
  ) {
    currencyExchangeSum = Number((currencySum * dollarToGryvnaRate).toFixed(2));
    currencyResultShowUser = `${currencyExchangeSum + " " + DOLLAR_SIGN}`;
  } else {
    return errorMassege;
  }
  return currencyResultShowUser;
};

// #8 Випадковий пароль (довжину встановлює користувач)
let getRandomPassWord = (lengthPass = 8) => {
  let generatePassword = [];
  generatePassword.length = lengthPass;
  const maxDigits = 10;
  const generateRandomNumbers = () => Math.floor(Math.random() * maxDigits);
  for (let i = 0; i < generatePassword.length; i++) {
    generatePassword[i] = generateRandomNumbers();
  }

  return Number(generatePassword.join(""));
};

//#9 Видалення заданної букви в слові
let deleteLetters = (letterToDelete, wordFromUser) => {
  // const WorldWithoutLetter = String(wordFromUser.replace(letterToDelete, "")); видаляє тільки перше входження
  let WorldWithoutLetter = [];
  for (let i = 0; i < wordFromUser.length; i++) {
    if (
      wordFromUser[i].toLocaleLowerCase() !== letterToDelete.toLocaleLowerCase()
    ) {
      WorldWithoutLetter += wordFromUser[i];
    }
  }
  return WorldWithoutLetter;
};

console.log(`Функція №1: ${getMaxDigit(688)}`);
console.log(`Функція №3: ${firstLetterUpper("vAsyA")}`);
console.log(`Функція №4: ${clearSalary(10)}`);
console.log(`Функція №5: ${getRandomNumber(9, 12)}`);
console.log(`Функція №6: ${countLetter("а", "Асталавіста")}`);
console.log(`Функція №7: ${currencyExchange("2000 грн")}`);
console.log(`Функція №8: ${getRandomPassWord(10)}`);
console.log(`Функція №9: ${deleteLetters("f", "microsoft softserve")}`);
