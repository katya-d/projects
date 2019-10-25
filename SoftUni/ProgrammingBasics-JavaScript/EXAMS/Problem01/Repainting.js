//УСЛОВИЕ (PROBLEM):
/* Пребоядисване
Румен иска да пребоядиса хола, като за целта е наел майстори. Напишете програма, която изчислява
разходите за ремонта, вземайки предвид следните цени:
• Предпазен найлон - 1.50 лв. за кв.м.
• Боя - 14.50 лв. за литър
• Разредител за боя - 5.00 лв. за литър
За всеки случай, към необходимите материали, Румен иска да добави още 10% от количеството боя и 2 кв.м.
найлон, разбира се и 0.40 лв. за торбички, а сумата, която се заплаща на майсторите за 1 час работа, е равна
на 30% от сбора на всички разходи за материали.
Вход
Входът се чете от конзолата и съдържа точно 4 реда:
1. Необходимо количество найлон (в кв.м.) - цяло число в интервала [1... 100]
2. Необходимо количество боя (в литри) - цяло число в интервала [1…100]
3. Количество разредител (в литри) - цяло число в интервала [1…30]
4. Часовете, за които майсторите ще свършат работата - цяло число в интервала [1…9]
Изход
Да се отпечата на конзолата един ред:
• "Total expenses: {сумата на всички разходи} lv."
Резултатът трябва да е форматиран до втората цифра след десетичния знак. */

function repainting(input){
    let nylonQuantity = Number(input.shift());
    let paintQuantity = Number(input.shift());
    let diluentQuantity = Number(input.shift());
    let hoursWork = Number(input.shift());

    let paintAdditionaly = (paintQuantity * 0.10) * 14.50;

    let nylonTotalPrice = (nylonQuantity * 1.50) + 3;
    let paintTotalPrice = (paintQuantity * 14.50) + paintAdditionaly;
    let diluentTotalPrice = diluentQuantity * 5;

    let totalCosts = nylonTotalPrice + paintTotalPrice + diluentTotalPrice + 0.40;
    let workPrice = totalCosts*0.30;
    let totalWorkCosts = workPrice * hoursWork;

    let moneyCosts = totalWorkCosts + totalCosts;

    console.log(`Total expenses: ${moneyCosts.toFixed(2)} lv.`);
}

repainting(["10", "11", "4", "8"]);
repainting(["5", "10", "10", "1"]);
repainting(["90", "99", "28", "9"]);