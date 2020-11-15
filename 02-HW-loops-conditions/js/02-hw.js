//Code was Formatted by Prettier
//Мой вариант
let userNumberN = Math.round(+prompt("Введіть ваше число (one)", 0));
let userNumberM = Math.round(+prompt("Введіть ваше число (two)", 0));
let sumTotal = 0;
let qust = null;
let isWithEven = null;

while (userNumberM <= userNumberN) {
  alert("Введіть друге число більше за перше");
  userNumberN = +prompt("Введіть ваше число (N)", 0);
  userNumberM = +prompt("Введіть ваше число (M)", 0);
  qust = confirm("Пропускати парні числа");
  isWithEven = qust ? "без врахування парних" : "разом з парними";
}

while (Number.isNaN(userNumberN && userNumberM)) {
  alert("Потрібно ввести число");
  const isUserContinue = confirm("Ви хочeте повторити спробу?");
  if (isUserContinue === false) {
    alert("Good Luck");
    break;
  } else {
    userNumberN = +prompt("Введіть ваше число (N)", 0);
    userNumberM = +prompt("Введіть ваше число (M)", 0);
  }
}

for (let i = userNumberN; i <= userNumberM; i++) {
  if (qust) {
    if (i % 2 == 0) continue;
    sumTotal += i;
  } else {
    sumTotal += i;
  }
}

console.log(`
Перше число: ${userNumberN}
Друге число: ${userNumberM}
Сума всіх чисел (${isWithEven}): ${sumTotal}
`);
