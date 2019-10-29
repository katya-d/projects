//УСЛОВИЕ (PROBLEM):
/*Магазин за детски играчки
Петя има магазин за детски играчки. Тя получава голяма поръчка, която трябва да изпълни. С парите, които
ще спечели иска да отиде на екскурзия. Да се напише програма, която пресмята печалбата от поръчката.
Цени на играчките:
 Пъзел - 2.60 лв.
 Говореща кукла - 3 лв.
 Плюшено мече - 4.10 лв.
 Миньон - 8.20 лв.
 Камионче - 2 лв.
Ако поръчаните играчки са 50 или повече магазинът прави отстъпка 25% от общата цена. От спечелените
пари Петя трябва да даде 10% за наема на магазина. Да се пресметне, дали парите ще ѝ стигнат да отиде на
екскурзия.
Вход
От конзолата се четат 6 реда:
1. Цена на екскурзията - реално число в интервала [1.00 … 10000.00]
2. Брой пъзели - цяло число в интервала [0… 1000]
3. Брой говорещи кукли - цяло число в интервала [0 … 1000]
4. Брой плюшени мечета - цяло число в интервала [0 … 1000]
5. Брой миньони - цяло число в интервала [0 … 1000]
6. Брой камиончета - цяло число в интервала [0 … 1000]
Изход
На конзолата се отпечатва:
 Ако парите са достатъчни се отпечатва:
o "Yes! {оставащите пари} lv left.";
 Ако парите НЕ са достатъчни се отпечатва:
o "Not enough money! {недостигащите пари} lv needed." */

function toyShop(input) {
    let excursionPrice = Number(input.shift());
    let puzzlesNum = Number(input.shift());
    let talkDollNum = Number(input.shift());
    let bearNum = Number(input.shift());
    let minionsNum = Number(input.shift());
    let trucksNum = Number(input.shift());

    let toysNum = puzzlesNum + talkDollNum + bearNum + minionsNum + trucksNum;

    let earnings = (puzzlesNum * 2.60) + (talkDollNum * 3)
    + (bearNum * 4.10) + (minionsNum * 8.20) + (trucksNum * 2);

    let netProfit = earnings * 0.90;

    if (toysNum >= 50) {
        let profitAfterDiscount = netProfit*0.75;

        if (profitAfterDiscount >= excursionPrice) {
           
            let moneyLeft = profitAfterDiscount - excursionPrice;
            console.log(`Yes! ${moneyLeft.toFixed(2)} lv left.`);
        } else {
            let notEnoughMoney = Math.abs(profitAfterDiscount - excursionPrice);
            console.log(`Not enough money! ${notEnoughMoney.toFixed(2)} lv needed.`);
        }
    }else {

        if (netProfit >= excursionPrice) {
           
            let moneyLeft = netProfit - excursionPrice;
            console.log(`Yes! ${moneyLeft.toFixed(2)} lv left.`);
        } else {
            let notEnoughMoney = Math.abs(netProfit - excursionPrice);
            console.log(`Not enough money! ${notEnoughMoney.toFixed(2)} lv needed.`);
        }
    }
}

toyShop(["40.8", "20", "25", "30", "50", "10"]);
toyShop(["320", "8", "2", "5", "5", "1"]);