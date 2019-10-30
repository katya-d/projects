//УСЛОВИЕ (PROBLEM):
/*Семейна почивка
Семейство Иванови планират семейната си почивка. Вашата задача е да напишете програма, която да
изчислява дали предвидения от тях бюджет ще им стигне, като знаете колко нощувки са планирали, каква е
цената за нощувка и колко процента от бюджета са предвидили за допълнителни разходи. Трябва да се има
предвид, че ако броят на нощувките е по-голям от 7, цената за нощувка се намаля с 5%.
Вход
От конзолата се четат 4 реда:
• Бюджетът, с който разполагат – реално число в интервала [1.00 … 10000.00]
• Брой нощувки – цяло число в интервала [0 … 1000]
• Цена за нощувка – реално число в интервала [1.00 … 500.00]
• Процент за допълнителни разходи – цяло число в интервала [0 … 100]
Изход
Отпечатването на конзолата зависи от резултата:
• Ако сумата е достатъчна:
o "Ivanovi will be left with {останали пари след почивката} leva after
vacation."
• Ако НЕ е достигната сумата:
o "{парите нужни до достигане на целта} leva needed."
Сума трябва да се форматира до втората цифра след десетичния знак.
 */

function familyTrip(input) {
    let budget = Number(input.shift());
    let nightsNum = Number(input.shift());
    let nightPrice = Number(input.shift());
    let costsPercent = Number(input.shift());

    let nightsTotalPrice = nightPrice * nightsNum;
    let otherCosts = budget * (costsPercent / 100);

    let totalSum = nightsTotalPrice + otherCosts;
    
    if (nightsNum > 7) {
        let nightWithDiscount = nightPrice - (nightPrice*0.05);
        let nightsTotalSum = nightsNum * nightWithDiscount;

        let totalCosts = nightsTotalSum + otherCosts;

        if (budget >= totalCosts) {
           let leftMoney = (Math.abs(budget - totalCosts)).toFixed(2);
           console.log(`Ivanovi will be left with ${leftMoney} leva after vacation.`);
        }else {
            let notEnoughMoney = (Math.abs(budget - totalCosts)).toFixed(2);
            console.log(`${notEnoughMoney} leva needed.`);
        }

    }else {
       if (budget >= totalSum) {
           let leftMoney = (Math.abs(budget - totalSum)).toFixed(2);
           console.log(`Ivanovi will be left with ${leftMoney} leva after vacation.`);
        }else {
            let notEnoughMoney = (Math.abs(budget - totalSum)).toFixed(2);
            console.log(`${notEnoughMoney} leva needed.`);
        }
    }
}

 familyTrip(["800.50", "8", "100", "2"]);
 familyTrip(["500", "7", "66", "15"]);