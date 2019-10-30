//УСЛОВИЕ (PROBLEM)
/*Годзила срещу Конг
Снимките за дългоочаквания филм "Годзила срещу Конг" започват. Сценаристът Адам Уингард ви моли да
напишете програма, която да изчисли, дали предвидените средства са достатъчни за снимането на филма.
За снимките ще бъдат нужни определен брой статисти, облекло за всеки един статист и декор.
Известно е, че:
• Декорът за филма е на стойност 10% от бюджета.
• При повече от 150 статиста, има отстъпка за облеклото на стойност 10%.
Вход
От конзолата се четат 3 реда:
Ред 1. Бюджет за филма – реално число в интервала [1.00 … 1000000.00]
Ред 2. Брой на статистите – цяло число в интервала [1 … 500]
Ред 3. Цена за облекло на един статист – реално число в интервала [1.00 … 1000.00]
Изход
На конзолата трябва да се отпечатат два реда:
• Ако парите за декора и дрехите са повече от бюджета:
o "Not enough money!"
o "Wingard needs {парите недостигащи за филма} leva more."
• Ако парите за декора и дрехите са по малко или равни на бюджета:
o "Action!"
o "Wingard starts filming with {останалите пари} leva left."
Резултатът трябва да е форматиран до втория знак след десетичната запетая. */

function movieMoney(input) {
    let movieBudget = Number(input.shift());
    let walkOnNum = Number(input.shift());
    let clothesPrice = Number(input.shift());

    let decorPrice = movieBudget * 0.10;
    let totalClothesPrice = walkOnNum * clothesPrice;

    let costsMoney = totalClothesPrice + decorPrice;

    if (walkOnNum > 150) {

        let totalClothesPercent = totalClothesPrice * 0.90;
        let totalCosts = totalClothesPercent + decorPrice;

        if (totalCosts > movieBudget) {
            let needsMoney = totalCosts - movieBudget;
            console.log("Not enough money!");
            console.log(`Wingard needs ${needsMoney.toFixed(2)} leva more.`)
        } else if (totalCosts <= movieBudget) {
            let needsMoney = movieBudget - totalCosts;
            console.log("Action!");
            console.log(`Wingard starts filming with ${needsMoney.toFixed(2)} leva left.`);
        }

    }else {
        if (costsMoney > movieBudget) {
            let needsMoney = costsMoney - movieBudget;
            console.log("Not enough money!");
            console.log(`Wingard needs ${needsMoney.toFixed(2)} leva more.`)
        }else if (costsMoney <= movieBudget) {
            let needsMoney = movieBudget - costsMoney;
            console.log("Action!");
            console.log(`Wingard starts filming with ${needsMoney.toFixed(2)} leva left.`);
        }
    }
}

movieMoney(["20000", "120", "55.5"]);
movieMoney(["15437.62", "186", "57.99"]);
movieMoney(["9587.88", "222", "55.68"]);