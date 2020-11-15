//Code was Formatted by Prettier
// Варіант 2

let userNumberN = "";
let userNumberM = "";
let sumTotal = 0;
let qust = null;
let isWithEven = null;

do {
  userNumberN = Math.round(+prompt("Введіть ваше число (one)", 0));
  userNumberM = Math.round(+prompt("Введіть ваше число (two)", 0));

  if (userNumberM <= userNumberN) {
    alert("Введіть друге число (two) більше за перше (one)");
  } else if (userNumberM > userNumberN) {
    qust = confirm("Пропускати парні числа");
    isWithEven = qust
      ? "без врахування парних чисел"
      : "разом з парними числами";
  } else {
    alert("Потрібно ввести число");
    const isUserContinue = confirm("Ви хочeте повторити спробу?");
    if (isUserContinue === false) {
      alert("Good Luck");
      break;
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
} while (
  !Number.isFinite(userNumberN) ||
  !Number.isFinite(userNumberM) ||
  userNumberM <= userNumberN
);

console.log(`
Перше число: ${userNumberN}
Друге число: ${userNumberM}
Сума всіх чисел (${isWithEven}): ${sumTotal}
`);
