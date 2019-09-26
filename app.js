console.log ('worked');

const regularPurchases = 1000;
const increasedPurchases = 10000;
const specialPurchases = 10000;

const purchaseAmount = regularPurchases + increasedPurchases + specialPurchases;

const valueCashbackRegular = 0.01;
const valueCashbackIncrease = 0.05;
const valueCashbackspecial = 0.3;

const cashback = regularPurchases * valueCashbackRegular + increasedPurchases * valueCashbackIncrease + specialPurchases * valueCashbackspecial;
const maxCashback = 3000;
let resultCashback = cashback;
if (cashback > maxCashback) {
    resultCashback = maxCashback;
}
console.log ('Сумма покупки составила ' + purchaseAmount + ' руб.' )
console.log ('Кэшбэк составляет ' + resultCashback + ' руб.');


