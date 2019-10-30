//УСЛОВИЕ (PROBLEM)
/*Сафари
Симона и Светлин ще ходят на почивка в Африка и искат да отидат на сафари. Понеже за делничните дни вече
имат планове, решават, че ще отидат събота или неделя. Напишете програма, която изчислява колко ще им
струва ходенето на сафари и дали бюджетът им ще им стигне да отидат, като имате предвид следното:
• Цената на един литър гориво е 2.10 лв.
• Цената за екскурзовод е 100лв.
• В зависимост от деня има отстъпки от общата цена - за събота 10%, а за неделя 20%
Вход
От конзолата се четат 3 реда:
• Бюджет – реално число в интервала [0.00… 10000.00]
• Колко литра гориво ще са им нужни – реално число в интервала [1.00… 50.00]
• Ден от седмицата – текст с възможности "Saturday" и "Sunday"
Изход
Да се отпечата на конзолата един ред:
• Ако бюджетът е достатъчен:
"Safari time! Money left: {колко пари са им останали} lv. "
• Ако бюджетът не е достатъчен:
"Not enough money! Money needed: {колко пари не им достигат} lv."
Сумите трябва да са форматирани до втория знак след десетичната запетая. */

function safari(input) {
    let budget = Number(input.shift());
    let litersFuel = Number(input.shift());
    let weekDay = input.shift();

    let fuelPrice = litersFuel * 2.10;
    let totalCosts = fuelPrice + 100;

    if (weekDay == "Saturday") {
       let endSum = totalCosts - (totalCosts * 0.10);
        
        if (endSum <= budget) {
            let moneyLeft = budget - endSum;
            console.log(`Safari time! Money left: ${moneyLeft.toFixed(2)} lv.`);

        } else if (endSum > budget) {
            let notEnoughMoney = endSum - budget;
            console.log(`Not enough money! Money needed: ${notEnoughMoney.toFixed(2)} lv.`);
        }

    }else if(weekDay == "Sunday") {
        let endSum = totalCosts - (totalCosts * 0.20);

        if (endSum <= budget) {
            let moneyLeft = budget - endSum;
            console.log(`Safari time! Money left: ${moneyLeft.toFixed(2)} lv.`);

        } else if (endSum > budget) {
            let notEnoughMoney = endSum - budget;
            console.log(`Not enough money! Money needed: ${notEnoughMoney.toFixed(2)} lv.`);
        }
    }
}

safari(["1000", "10", "Sunday"]);
safari(["120", "30", "Saturday"]);
safari(["105.20", "15", "Sunday"]);