//УСЛОВИЕ (PROBLEM):
/*Напишете програма, която пресмята нужните разходи за закупуването на храна за кучета. 
Храната се пазарува основно за кучета, от зоомагазин, но понякога стопанинът им купува
и за животните на съседа му. Една опаковка храна за кучета е на цена 2.50лв.,
а всяка останала, която не е за тях струва 4лв.
Вход
От конзолата се четат 2 реда:
3.	Броят на кучетата – цяло число в интервала [0… 100]
4.	Броят на останалите животни  - цяло число в интервала [0… 100]
Изход
На конзолата се отпечатва:
"{крайната сума} lv."
Резултатът трябва да бъде форматиран до втората цифра след десетичния знак. */

function petShop(input) {
    let dogNumbers = parseInt(Number(input.shift()));
    let othersAnimalsNum = parseInt(Number(input.shift()));

    let dogFoodPrice = dogNumbers * 2.50;
    let othersAnimalsFoodPrice = othersAnimalsNum * 4;

    let foodSumPrice = dogFoodPrice + othersAnimalsFoodPrice;

    console.log(`${foodSumPrice.toFixed(2)} lv.`)
}

petShop(["5", "4"]);
petShop(["13", "9"]);