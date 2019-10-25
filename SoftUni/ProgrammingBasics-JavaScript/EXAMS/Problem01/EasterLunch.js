//УСЛОВИЕ (PROBLEM):
/*Великденски обяд
Бабата на Деси всяка година приготвя обяд за семейството си за Великден. Напишете програма, която
изчислява какви разходи ще има по приготвянето на обяда, като знаете колко броя козунаци, кори с яйца и
килограма курабии е купила. Цените на продуктите са следните:
• Козунак – 3.20 лв.
• Яйца – 4.35 лв. за кора с 12 яйца
• Курабии – 5.40 лв. за килограм
• Боя за яйца - 0.15 лв. за яйце
Вход
От конзолата се четат 3 реда:
• Брой козунаци - цяло число в интервала [0 … 99]
• Брой кори с яйца - цяло число в интервала [0 … 99]
• Килограми курабии - цяло число в интервала [0 … 99]
Изход
Да се отпечата на конзолата колко ще са разходите по приготвянето на обяда. Сумата да бъде
форматирана до втория знак след десетичната запетая.*/

function easterLunch(input) {
    let kozunakNum = Number(input.shift());
    let eggCrustsNum = Number(input.shift());
    let cookiesKgs = Number(input.shift());

    let kozunakPrice = kozunakNum * 3.20;
    let eggsPrice = eggCrustsNum * 4.35;
    let cookiesPrice = cookiesKgs * 5.40;
    let eggsColor = (eggCrustsNum*12)*0.15;

    let costs = kozunakPrice + eggsPrice + cookiesPrice + eggsColor;

    console.log(costs.toFixed(2));
}

    easterLunch(["3", "2", "3"]);
    easterLunch(["4", "4", "3"]);
    easterLunch(["2", "3", "2"]);

