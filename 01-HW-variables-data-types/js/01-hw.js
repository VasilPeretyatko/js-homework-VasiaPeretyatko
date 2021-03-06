//Base

const tariffPlanYahoo = 15.678;
const tariffPlanGoogle = 90.2345;
const tariffPlanApple = 123.965;
const moneyPay = 500;

const maxTariffPlan = Math.max(
  tariffPlanYahoo,
  tariffPlanGoogle,
  tariffPlanApple
);
console.log(maxTariffPlan);

const minTariffPlan = Math.min(
  tariffPlanYahoo,
  tariffPlanGoogle,
  tariffPlanApple
);
console.log(minTariffPlan);

const sumTariffPlan = tariffPlanApple + tariffPlanGoogle + tariffPlanYahoo;
console.log(sumTariffPlan);

const sumTariffPlanWithoutCoins =
  Math.floor(tariffPlanYahoo) +
  Math.floor(tariffPlanGoogle) +
  Math.floor(tariffPlanApple);
console.log(sumTariffPlanWithoutCoins);

const sumTariffPlanRoundToHundredths =
  Math.round(
    (Math.floor(tariffPlanYahoo) +
      Math.floor(tariffPlanGoogle) +
      Math.floor(tariffPlanApple)) /
      100
  ) * 100;
console.log(sumTariffPlanRoundToHundredths);

const sumTariffPlanIsAnEven =
  sumTariffPlanWithoutCoins % 2 === 0 ? true : false;
console.log(sumTariffPlanIsAnEven);

const tariffPlanChangeMoney = moneyPay - sumTariffPlan;
console.log(tariffPlanChangeMoney);

const tariffPlanAverage = Number((sumTariffPlan / 3).toFixed(2));
console.log(tariffPlanAverage);

const max = 99;
const min = 1;
const discountRandom = Math.floor(Math.random() * (max - min + 1) + min) / 100;
const discountPercent = `${discountRandom * 100} %`;
console.log(discountRandom);
console.log(discountPercent);

const tariffPlanWithDiscount = Number(
  (sumTariffPlan - sumTariffPlan * discountRandom).toFixed(2)
);
console.log(tariffPlanWithDiscount);

const netProfit = Number(
  (sumTariffPlan / 2 - sumTariffPlan * discountRandom).toFixed(2)
);

console.log(netProfit);

//Advanced
const resultInfo = `
Максимальна ціна: ${maxTariffPlan}
Мінімальна ціна: ${minTariffPlan}
Сума покупки: ${sumTariffPlan}
Сума покупки без копійок: ${sumTariffPlanWithoutCoins}
Округлення суми покупки до сотень: ${sumTariffPlanRoundToHundredths}
Сума всіх товарів - парне число: ${sumTariffPlanIsAnEven}
Здача : ${tariffPlanChangeMoney}
Середнє значення ціни товару: ${tariffPlanAverage}
Знижка: ${discountPercent} 
Сума знижки: ${(sumTariffPlan * discountRandom).toFixed(2)} 
Сума до оплати зі знижкою: ${tariffPlanWithDiscount}
Чистий прибуток : ${netProfit}
`;
console.log(resultInfo);
