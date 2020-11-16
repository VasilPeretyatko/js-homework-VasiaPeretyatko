//Code was Formatted by Prettier
// Варіант 2

let userNumberRandomFirst = "";
let userNumberRandomSecond = "";
let sumTotal = 0;
let isWithEven = null;

do {
  userNumberRandomFirst = Math.round(+prompt("Введіть ваше число (First)", 0));
  userNumberRandomSecond = Math.round(
    +prompt("Введіть ваше число (Second)", 0)
  );

  if (userNumberRandomSecond <= userNumberRandomFirst) {
    alert("Введіть друге число (Second) більше за перше (First)");
  } else if (userNumberRandomSecond > userNumberRandomFirst) {
    const questionWithEven = confirm("Пропускати парні числа");
    isWithEven = questionWithEven
      ? "без врахування парних чисел"
      : "разом з парними числами";

    for (let i = userNumberRandomFirst; i <= userNumberRandomSecond; i++) {
      if (questionWithEven) {
        if (i % 2 == 0) continue;
        sumTotal += i;
      } else {
        sumTotal += i;
      }
    }
  } else {
    alert("Потрібно ввести число");
    const isUserContinue = confirm("Ви хочeте повторити спробу?");
    if (isUserContinue === false) {
      alert("Good Luck");
      break;
    }
  }
} while (
  !Number.isFinite(userNumberRandomFirst) ||
  !Number.isFinite(userNumberRandomSecond) ||
  userNumberRandomSecond <= userNumberRandomFirst
);

console.log(`
Перше число: ${userNumberRandomFirst}
Друге число: ${userNumberRandomSecond}
Сума всіх чисел (${isWithEven}): ${sumTotal}
`);
