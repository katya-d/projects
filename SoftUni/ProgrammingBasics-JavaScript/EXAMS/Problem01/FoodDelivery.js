//УСЛОВИЕ (PROBLEM):
/* Доставка на храна
Ресторант отваря врати и предлага няколко менюта на преференциални цени:
• Пилешко меню – 10.35 лв.
• Меню с риба – 12.40 лв.
• Вегетарианско меню – 8.15 лв.
Напишете програма, която изчислява колко ще струва на група хора да си поръчат храна за вкъщи.
Групата ще си поръча и десерт, чиято цена е равна на 20 процента от общата сметка (без доставката). Цената
на доставка е 2.50лв и се начислява най-накрая.
Вход
От конзолата се четат 3 реда:
• Брой пилешки менюта – цяло число в интервала [0… 99]
• Брой менюта с риба - цяло число в интервала [0… 99]
• Брой вегетариански менюта - цяло число в интервала [0… 99]
Изход
Да се отпечата на конзолата един ред: "Total: {цена на поръчката}"
Сумата да е форматирана до втория знак след десетичната запетая. */

function foodDelivery(input) {
    let chickenNum = Number(input.shift());
    let fishNum = Number(input.shift());
    let veganNum = Number(input.shift());

    let chickenPrice = chickenNum * 10.35;
    let fishPrice = fishNum * 12.40;
    let veganPrice = veganNum * 8.15;

    let foodPrice = chickenPrice + fishPrice + veganPrice;
    let desert = foodPrice*0.20;

    let totalSum = foodPrice + desert + 2.50;

    console.log(`Total: ${totalSum.toFixed(2)}`);
}

    foodDelivery(["2", "4", "3"]);
    foodDelivery(["10", "0", "6"]);
    foodDelivery(["1", "1", "1"]);