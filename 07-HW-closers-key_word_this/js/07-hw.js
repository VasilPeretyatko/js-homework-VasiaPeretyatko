const ukraine = {
  country: "Ukraine",
  tax: 0.195,
  middleSalary: 1789,
  vacancies: 11476,
};
const latvia = {
  country: "Latvia",
  tax: 0.25,
  middleSalary: 1586,
  vacancies: 3921,
};
const litva = {
  country: "Litva",
  tax: 0.15,
  middleSalary: 1509,
  vacancies: 1114,
};

//1
function getMyTaxes(salary) {
  const taxSum = parseFloat((this.tax * salary).toFixed(2));
  return `Ваш податок в країні ${this.country} складе: ${taxSum}. Ваша зарплата ${salary}`;
}

const resultGetMyTaxes = getMyTaxes.call(ukraine, 5643);
console.log(
  "🚀 ~ file: 07-hw.js ~ line 22 ~ resultGetMyTaxes",
  resultGetMyTaxes
);

//2
function getMiddleTaxes() {
  const avaregeTaxSum = parseFloat((this.tax * this.middleSalary).toFixed(2));
  return `Середній податок в країні ${this.country} складе: ${avaregeTaxSum}`;
}

const resultGetMiddleTaxes = getMiddleTaxes.call(litva);
console.log(
  "🚀 ~ file: 07-hw.js ~ line 34 ~ resultGetMiddleTaxes",
  resultGetMiddleTaxes
);

//3
function getTotalTaxes() {
  const totalTaxSum = parseFloat(
    (this.tax * this.middleSalary * this.vacancies).toFixed(2)
  );
  return `Загальна сума податку ІТ сектору в країні ${this.country} складе: ${totalTaxSum}`;
}

const resultGetTotalTaxes = getTotalTaxes.call(litva);
console.log(
  "🚀 ~ file: 07-hw.js ~ line 46 ~ resultGetTotalTaxes",
  resultGetTotalTaxes
);

//4
function getMySalary() {
  const min = 1500;
  const max = 2500;
  const randomSalary = Math.floor(Math.random() * (max - min + 1) + min);
  let taxes = parseFloat((randomSalary * this.tax).toFixed(2));
  let profit = parseFloat((randomSalary - taxes).toFixed(2));
  const showSalary = { randomSalary, taxes, profit };
  return showSalary;
}

const showResultGetMySalary = setInterval(() => {
  let resultGetMySalary = getMySalary.call(litva);
  console.log(resultGetMySalary);
}, 10000);
