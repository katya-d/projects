//УСЛОВИЕ (PROBLEM)
/*Гости за Великден
Любо очаква гости за Великден. Той разполага с определен бюджет, който е предвидил, за да купи козунаци
и боядисани яйца. Известно е, че един козунак стига за трима човека, като всеки гост ще получи и по 2 яйца.
Вашата задача е да намерите колко козунака и яйца трябва да купи Любо, както и каква ще е сумата, която
той трябва да плати и дали бюджета му е достатъчен. При изчисляването на броя козунаци, които Любо
трябва да закупи, техният брой трябва да се закръгли към по-голямото цяло число. Ако парите не му стигат,
трябва да се изведе съобщение, колко не му достигат.
Известно е, че:
• Един козунак струва 4лв.
• Едно яйце струва 0.45лв.
Вход
От конзолата се четат 2 реда:
• На първия ред са броят на гостите – цяло число в интервала [0 ... 200000]
• На втория ред е бюджетът с който разполага Любо – цяло число в интервала [0 ... 200000]
Изход
На конзолата да се отпечатат два реда:
• Ако бюджетът е достатъчен:
o "Lyubo bought {брои закупени козунаци} Easter bread and {брои закупени яйца} eggs."
o "He has {останали пари} lv. left."
• Ако бюджетът НЕ Е достатъчен:
o "Lyubo doesn't have enough money."
o "He needs {недостигащи пари} lv. more."
Парите да бъдат форматирани до втората цифра след десетичния знак. */

function easterGuests(input) {
    let guestsNum = Number(input.shift());
    let budget = Number(input.shift());

    let totalEggs = guestsNum * 2;
    let eggsTotalPrice = totalEggs * 0.45;

    let easterBreadNum = Math.ceil(guestsNum/3);
    let easterBreadTotalSum = easterBreadNum *4;

    let totalSum = eggsTotalPrice + easterBreadTotalSum;

    if (budget >= totalSum){
        let leftSum = budget - totalSum;
        console.log(`Lyubo bought ${easterBreadNum} Easter bread and ${totalEggs} eggs.`);
        console.log(`He has ${leftSum.toFixed(2)} lv. left.`);
    }else if (budget < totalSum) {
        let notEnoughSum = totalSum - budget;
        console.log("Lyubo doesn't have enough money.");
        console.log(`He needs ${notEnoughSum.toFixed(2)} lv. more.`);
    }

}

easterGuests(["10", "35"]);
easterGuests(["9", "12"]);