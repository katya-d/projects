//УСЛОВИЕ (PROBLEM):
/*Великденска пекарна
Великденските празници наближават и местната пекарна започва да набавя продуктите, които ще са ѝ нужни
за изработка на великденските сладкиши. Вашата задача е да напишете програма, която да изчислява
нужната сума за закупуване на продуктите. Нужните продукти са: брашно, захар, яйца и мая. От конзолата
се въвежда цената на брашното за килограм, нужните килограми брашно, килограмите захар, броя на
корите с яйца и пакетите мая.
• цената на килограм захар е с 25% по-ниска от тази на килограм брашно
• цената на една кора с яйца е с 10% по-висока от цената на килограм брашно
• цената на един пакет мая е с 80% по-ниска от цената на килограм захар
Вход
От конзолата се четат 5 реда:
1.Цена на брашното за един килограм – реално число в интервала [0.00 … 10000.00]
2.Килограми на брашното – реално число в интервала [0.00 … 10000.00]
3.Килограми на захарта – реално число в интервала [0.00 … 10000.00]
4.Брой кори с яйца – цяло число в интервала [0 … 10000]
5.Пакети мая – цяло число в интервала [0 … 10000] 
Изход
Да се отпечата на конзолата едно число:
• Сумата, която ще им е необходима, форматирана до втория знак след десетичната запетая*/

function easterBackery(input) {
    let flourPrice = Number(input.shift());
    let flourKgs = Number(input.shift());
    let sugarKgs = Number(input.shift());
    let eggsBarksNum = Number(input.shift());
    let breadYeastNum = Number(input.shift());

    //Prices of products calculation
    let sugarPrice = flourPrice - (flourPrice*0.25);
    let eggsPrice = flourPrice + (flourPrice*0.10);
    let breadYeastPrice = sugarPrice - (sugarPrice*0.80);

    //Let calculate the totalPrice for products.

    let flourTotal = flourKgs*flourPrice;
    let sugarTotal = sugarKgs*sugarPrice;
    let eggsTotal = eggsBarksNum*eggsPrice;
    let breadYeastTotal = breadYeastNum*breadYeastPrice;

    let totalSum = flourTotal + sugarTotal + eggsTotal + breadYeastTotal;

    console.log(totalSum.toFixed(2));
}

    easterBackery(["50", "10", "3.5", "6", "1"]);
    easterBackery(["63.44", "3.57", "6.35", "8", "2"]);
    