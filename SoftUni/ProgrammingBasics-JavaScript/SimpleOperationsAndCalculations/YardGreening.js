//УСЛОВИЕ (PROBLEM):
/*Божидара разполага с няколко къщи на Черноморието и желае да озелени дворовете на някои от тях,
като по този начин създаде уютна обстановка и комфорт на гостите си, като за целта е наела фирма.
Напишете програма, която изчислява необходимите средства, които Божидара ще трябва да заплати на фирмата изпълнител
на проекта. Цената на един кв. м. е 7.61лв със ДДС. Тъй като нейният двор е доста голям,
фирмата изпълнител предлага 18% отстъпка от крайната цена.
Вход
От конзолата се прочита само един ред:
1.	Кв. метри, които ще бъдат озеленени – реално число в интервала [0.00… 10000.00]
Изход
На конзолата се отпечатват два реда:
•	"The final price is: {крайна цена на услугата} lv."
•	"The discount is: {отстъпка} lv."
И двете суми трябва да бъдат форматирани до втората цифра след десетичния знак.
*/

function yardGreening(input) {
    let area = Number(input.shift());
    
    let totalPrice = area*7.61;
    let discount = totalPrice*0.18;

    let finalPrice = totalPrice-discount;

    console.log(`The final price is: ${finalPrice.toFixed(2)} lv.`);
    console.log(`The discount is: ${discount.toFixed(2)} lv.`);
}

yardGreening(["540"]);
yardGreening(["135"]);