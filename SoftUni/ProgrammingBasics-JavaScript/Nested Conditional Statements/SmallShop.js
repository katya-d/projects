//УСЛОВИЕ (PROBLEM):
/*Квартално магазинче
Предприемчив българин отваря квартални магазинчета в няколко града и продава на различни цени според
града:
град / продукт - coffee - water - beer - sweets - peanuts
Sofia / 0.50 - 0.80 - 1.20 - 1.45 - 1.60
Plovdiv / 0.40 - 0.70 - 1.15 - 1.30 - 1.50
Varna / 0.45 - 0.70 - 1.10 - 1.35 - 1.55
Напишете програма, която приема входен аргумент и изважда от него продукт (низ), град (низ) и количество
(число), и пресмята и отпечатва колко струва съответното количество от избрания продукт в посочения град. */

function smallShop(input) {
    let drink = input.shift();
    let city = input.shift();
    let quantity = Number(input.shift());

    price = 0;

    if (city === "Sofia") {
        switch (drink) {
            case "coffee": price = quantity * 0.50; break;
            case "water": price = quantity * 0.80; break;
            case "beer": price = quantity * 1.20; break;
            case "sweets": price = quantity * 1.45; break;
            case "peanuts": price = quantity * 1.60; break;
        }

    }else if (city === "Plovdiv") {
        switch (drink) {
            case "coffee": price = quantity * 0.40; break;
            case "water": price = quantity * 0.70; break;
            case "beer": price = quantity * 1.15; break;
            case "sweets": price = quantity * 1.30; break;
            case "peanuts": price = quantity * 1.50; break;
        }

    }else if (city === "Varna") {
        switch (drink) {
            case "coffee": price = quantity * 0.45; break;
            case "water": price = quantity * 0.70; break;
            case "beer": price = quantity * 1.10; break;
            case "sweets": price = quantity * 1.35; break;
            case "peanuts": price = quantity * 1.55; break;
        }
    }

    console.log(price);
}

smallShop(["coffee", "Varna", "2"]);
smallShop(["peanuts", "Plovdiv", "1"]);
smallShop(["beer", "Sofia", "6"]);
smallShop(["water", "Plovdiv", "3"]);
smallShop(["sweets", "Sofia", "2.23"]);