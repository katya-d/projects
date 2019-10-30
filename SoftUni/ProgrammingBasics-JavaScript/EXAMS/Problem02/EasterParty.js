//УСЛОВИЕ (PROBLEM)
/*Великденско парти
Деси има рожден ден на Великден и иска да организира парти за своите приятели. Тя знае какъв е броят
гости, които иска да покани и колко е кувертът за всеки гост. От броя гости зависи и каква отстъпка ще
получи за куверта за един човек.
Ако покани:
• Между 10 (вкл.) и 15 (вкл.) човека -> 15 % отстъпка от куверта за един човек
• Между 15 и 20 (вкл.) човека -> 20 % отстъпка от куверта за един човек
• Над 20 човека -> 25 % отстъпка от куверта за един човек
Деси трябва да предвиди и закупуването на торта за партито. Цената на тортата е 10% от бюджета на Деси.
Напишете програма, която изчислява дали бюджетът на Деси ще и е достатъчен за партито.
Вход
От конзолата се четат 3 реда:
1. Брой гости – цяло число в интервала [1...99]
2. Цена на куверт за един човек – реално число в интервала [0.00 … 99.00]
3. Бюджетът на Деси – реално число в интервала [0.00 … 9999.00]
Изход
На конзолата да се отпечата един ред:
• Ако бюджетът е достатъчен:
o "It is party time! {останали пари} leva left."
• Ако бюджетът не е достатъчен:
o "No party! {недостигащи пари} leva needed."
Резултатът да бъде форматиран до втория знак след десетичната запетая.*/

function party(input) {
    let guests = Number(input.shift());
    let humanEarnest = Number(input.shift());
    let desiBudget = Number(input.shift());

    let guestSum = humanEarnest * guests;
    let cakePrice = desiBudget * 0.10;

    let totalSumPlus = guestSum + cakePrice;

    if (10 <= guests && guests <= 15) {
        let guestsEndSum = humanEarnest * 0.85;
        let totalSum = (guestsEndSum * guests) + cakePrice;

        if (totalSum < desiBudget) {
            let leftMoney = desiBudget - totalSum;
            console.log(`It is party time! ${leftMoney.toFixed(2)} leva left.`);
        }else if (totalSum > desiBudget){
            let notEnoughMoney = totalSum - desiBudget;
            console.log(`No party! ${notEnoughMoney.toFixed(2)} leva needed.`);
        }

    }else if (15 < guests && guests <= 20) {
        let guestsEndSum = humanEarnest * 0.80;
        let totalSum = (guestsEndSum * guests) + cakePrice;

        if (totalSum < desiBudget) {
            let leftMoney = desiBudget - totalSum;
            console.log(`It is party time! ${leftMoney.toFixed(2)} leva left.`);
        }else if (totalSum > desiBudget){
            let notEnoughMoney = totalSum - desiBudget;
            console.log(`No party! ${notEnoughMoney.toFixed(2)} leva needed.`);
        }

    }else if (guests > 20) {
        let guestsEndSum = humanEarnest * 0.75;
        let totalSum = (guestsEndSum * guests) + cakePrice;

        if (totalSum < desiBudget) {
            let leftMoney = desiBudget - totalSum;
            console.log(`It is party time! ${leftMoney.toFixed(2)} leva left.`);
        }else if (totalSum > desiBudget){
            let notEnoughMoney = totalSum - desiBudget;
            console.log(`No party! ${notEnoughMoney.toFixed(2)} leva needed.`);
        }

    }else {
        if (totalSumPlus < desiBudget) {
            let leftMoney = desiBudget - totalSumPlus;
            console.log(`It is party time! ${leftMoney.toFixed(2)} leva left.`);

        }else if(totalSumPlus > desiBudget){
            let notEnoughMoney = totalSumPlus - desiBudget;
            console.log(`No party! ${notEnoughMoney.toFixed(2)} leva needed.`);
        }

    }

}

party(["18", "30", "450"]);
party(["8", "25", "340"]);
party(["24", "35", "550"]);