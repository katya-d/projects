//УСЛОВИЕ (PROBLEM):
/*Алкохолна борса
Пешо решава да направи купон и отива до алкохолната борса за да купи бира, вино, ракия и уиски. На
конзолата се въвежда цената на уискито в лв./л. и количеството на бирата, виното, ракията и уискито,
които трябва да закупи. Да се напише програма, която пресмята колко пари са му необходими за да плати
сметката, като знаете, че:
 цената на ракията е на половина по-ниска от тази на уискито;
 цената на виното е с 40% по-ниска от цената на ракията;
 цената на бирата е с 80% по-ниска от цената на ракията.
Вход
От конзолата се четат 5 реда:
1. Цена на уискито в лева – реално число в интервала [0.00 … 10000.00]
2. Количество на бирата в литри – реално число в интервала [0.00 … 10000.00]
3. Количество на виното в литри – реално число в интервала [0.00 … 10000.00]
4. Количество на ракията в литри – реално число в интервала [0.00 … 10000.00]
5. Количество на уискито в литри – реално число в интервала [0.00 … 10000.00]
Изход
Да се отпечата на конзолата едно число:
 парите, които са необходими на Пешо, форматирани до втория знак след десетичната запетая. */

function alcoholMarket(input) {
    let whiskeyPrice = Number(input.shift());
    let beerQuantity = Number(input.shift());
    let wineQuantitiy = Number(input.shift());
    let rakiyaQuantity = Number(input.shift());
    let whiskeyQuantity = Number(input.shift());

    let rakiyaPrice = whiskeyPrice / 2;
    let winePrice = rakiyaPrice * 0.60;
    let beerPrice = rakiyaPrice * 0.20;

    let whiskeySum = whiskeyQuantity * whiskeyPrice;
    let rakiyaSum = rakiyaQuantity * rakiyaPrice;
    let wineSum = wineQuantitiy * winePrice;
    let beerSum = beerQuantity * beerPrice;

    let totalSum = whiskeySum + rakiyaSum + wineSum + beerSum;

    console.log(totalSum.toFixed(2));
}

alcoholMarket(["50", "10", "3.5", "6.5", "1"]);
alcoholMarket(["63.44", "3.57", "6.35", "8.15", "2.5"]);