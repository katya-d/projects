//УСЛОВИЕ (PROBLEM):
/*Лятно пазаруване
Лятната почивка на Ани наближава и тя решава да се подготви за нея предварително, като закупи всичко
необходимо. Тя има определен бюджет и се нуждае от плажна хавлия, чадър, плажна чанта и джапанки.
Напишете програма, която да изчислява каква сума трябва да заплати Ани за своите покупки и проверява
дали бюджетът й ще бъде достатъчен, като знаете, че цената на чадъра е две трети от цената на хавлията, а
цената на джапанките е 75% от тази на плажния чадър. Плажната чанта струва една трета от сумата за
джапанките и хавлията взети заедно. Тъй като Ани е редовен клиент на този магазин, ще й бъде направена
процентна отстъпка от общата сума на покупката.
Вход
От конзолата се четат 3 реда:
1. На първия ред бюджетът на Ани – цяло число в интервала [1...1000]
2. На втория ред цената на плажната хавлия – реално число в интервала [1.00... 300.00]
3. На третия ред процентната отстъпка – цяло число в интервала [1...99]
Изход
На конзолата се отпечатва един ред:
• Ако бюджетът Е достатъчен:
o "Annie's sum is {общата сума} lv. She has {оставащата сума} lv. left."
• Ако бюджетът НЕ Е достатъчен:
o "Annie's sum is {общата сума} lv. She needs {недостигащата сума} lv. more."
Резултатите да бъдат форматирани до втората цифра след десетичния знак! */

function summerShoping(input) {
    let budget = Number(input.shift());
    let beachTowelPrice = Number(input.shift());
    let discount = Number(input.shift());

    let umbrellaPrice = (beachTowelPrice / 3) * 2;
    let thongsPrice = umbrellaPrice * 0.75;
    let beachBagPrice = (thongsPrice + beachTowelPrice) / 3;

    let costs = beachTowelPrice + umbrellaPrice + beachBagPrice + thongsPrice;
    let shopDiscount = costs * (discount/100);

    let endSum = costs - shopDiscount;

    let leftMoney = (Math.abs(budget - endSum)).toFixed(2);

    if (budget >= endSum) {
        console.log(`Annie's sum is ${endSum.toFixed(2)} lv. She has ${leftMoney} lv. left.`);
    }else {
        console.log(`Annie's sum is ${endSum.toFixed(2)} lv. She needs ${leftMoney} lv. more.`);
    }
}

summerShoping(["40", "15", "5"]);
summerShoping(["25", "6", "10"]);
summerShoping(["30", "17", "3"]);