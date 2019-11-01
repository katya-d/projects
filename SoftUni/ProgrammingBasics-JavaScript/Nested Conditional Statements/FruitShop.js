//УСЛОВИЕ (PROBLEM)
/*Магазин за плодове
Магазин за плодове през работните дни работи на следните цени:
плод - banana - apple - orange - grapefruit - kiwi - pineapple - grapes
цена  - 2.50  -  1.20 -  0.85  -   1.45     - 2.70 -  5.50     -  3.85

Събота и неделя магазинът работи на по-високи цени:
плод - banana - apple - orange - grapefruit - kiwi - pineapple - grapes
цена -  2.70  -  1.25 -  0.90  -     1.60   - 3.00 -    5.60   -  4.20

Напишете програма, която приема като вход аргумента input и изважда от него плод (banana / apple /
orange / grapefruit / kiwi / pineapple / grapes), ден от седмицата (Monday / Tuesday /
Wednesday / Thursday / Friday / Saturday / Sunday) и количество (число, и пресмята цената
според цените от таблиците по-горе. Резултатът да се отпечата закръглен с 2 цифри след десетичната точка.
При невалиден ден от седмицата или невалидно име на плод да се отпечата &quot;error&quot;. */

function fruitShop(input) {
    let plant = input.shift();
    let day = input.shift();
    let quantity = Number(input.shift());

    if (day === "Monday" || day === "Tuesday" || day === "Wednesday" || day === "Thursday" || day === "Friday") {
        switch (plant) {
            case "banana": console.log((quantity * 2.50).toFixed(2)); break;
            case "apple": console.log((quantity * 1.20).toFixed(2)); break;
            case "orange": console.log((quantity * 0.85).toFixed(2)); break;
            case "grapefruit": console.log((quantity * 1.45).toFixed(2)); break;
            case "kiwi": console.log((quantity * 2.70).toFixed(2)); break;
            case "pineapple": console.log((quantity * 5.50).toFixed(2)); break;
            case "grapes": console.log((quantity * 3.85).toFixed(2)); break;
            default: console.log("error"); break;
        }

    }else if (day === "Saturday" || day === "Sunday") {
        switch (plant) {
            case "banana": console.log((quantity * 2.70).toFixed(2)); break;
            case "apple": console.log((quantity * 1.25).toFixed(2)); break;
            case "orange": console.log((quantity * 0.90).toFixed(2)); break;
            case "grapefruit": console.log((quantity * 1.60).toFixed(2)); break;
            case "kiwi": console.log((quantity * 3.00).toFixed(2)); break;
            case "pineapple": console.log((quantity * 5.60).toFixed(2)); break;
            case "grapes": console.log((quantity * 4.20).toFixed(2)); break;
            default: console.log("error"); break;
        }
        
    }else {
        console.log("error");
    }

}

fruitShop(["apple", "Tuesday", "2"]);
fruitShop(["orange", "Sunday", "3"]);
fruitShop(["kiwi", "Monday", "2.5"]);
fruitShop(["grapes", "Saturday", "0.5"]);
fruitShop(["tomato", "Monday", "0.5"]);