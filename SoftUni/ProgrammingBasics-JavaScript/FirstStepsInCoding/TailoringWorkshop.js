//УСЛОВИЕ (PROBLEM):
/*Шивашки цех
Шивашки цех приема поръчки за ушиване на покривки и карета за маси за заведения. Покривките са
правоъгълни, каретата са квадратни, броят им винаги е еднакъв. Покривката трябва да виси с 30 см от всеки
ръб на масата. Страната на каретата е половината от дължината на масите. Във всяка поръчка се включва
информация за броя и размерите на масите.
Напишете програма, която пресмята цената на поръчка в долари и в левове, като квадратен метър плат за
правоъгълна покривка струва 7 долара, а за каре – 9 долара. Курсът на долара е 1.85 лева.
Вход
Потребителят въвежда 3 числа:
 Брой правоъгълни маси – цяло число в интервала [0...500]
 Дължина на правоъгълните маси в метри – реално число в интервала [0.00...3.00]
 Широчина на правоъгълните маси в метри – реално число в интервала [0.00...3.00]
Изход
Да се отпечатат на конзолата две числа: цената на изделията в долари и в левове.
o &quot;{цена в долари} USD&quot;
o &quot;{цена в левове} BGN&quot;
Резултатите да се закръглят до два знака след десетичната запетая. */

function tailoringWorkshop(input) {
    let rectTableNum = Number(input.shift());
    let rectTableLength = Number(input.shift());
    let rectTableWidth = Number(input.shift());

    let rectCoverArea = (rectTableLength+(2*0.3)) * (rectTableWidth+(2*0.3));
    let rectCoverPriceUSD = rectCoverArea*7;

    let squareSide = rectTableLength / 2;
    let squareArea = squareSide * squareSide;
    let squarePriceUSD = squareArea * 9;

    let rectCoverTotalPriceUSD = rectCoverPriceUSD * rectTableNum;
    let squareTotalPriceUSD = squarePriceUSD * rectTableNum;

    let rectCoverBGN = rectCoverTotalPriceUSD * 1.85;
    let squareBgn = squareTotalPriceUSD * 1.85;

    let totalSumUSD = rectCoverTotalPriceUSD + squareTotalPriceUSD;
    let totalSumBGN = rectCoverBGN + squareBgn;

    console.log(`${totalSumUSD.toFixed(2)} USD`);
    console.log(`${totalSumBGN.toFixed(2)} BGN`);
}

tailoringWorkshop(["5", "1.00", "0.50"]);
tailoringWorkshop(["10", "1.20", "0.65"]);