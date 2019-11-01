//УСЛОВИЕ (PROBLEM)
/*Фирма дава следните комисионни на търговците си според града, в който работят и обема на продажбите:
Напишете конзолна програма, която приема входен аргумент input и извадете от него име на град (стринг) и
обем на продажби (число) и изчислява и извежда размера на търговската комисионна според горната
таблица. Резултатът да се изведе форматиран до 2 цифри след десетичната точка. При невалиден град или
обем на продажбите (отрицателно число) да се отпечата "error". */

function tradeCommissions(input) {
    let city = input.shift();
    let sales = Number(input.shift());

    if (city === "Sofia") {
        if (0 <= sales && sales <= 500) {
            console.log((sales*0.05).toFixed(2));

        }else if (500 < sales && sales <= 1000) {
            console.log((sales*0.07).toFixed(2));

        }else if (1000 < sales && sales <= 10000) {
            console.log((sales*0.08).toFixed(2));
        } else if (sales > 10000) {
            console.log((sales*0.12).toFixed(2));
        }else {
            console.log("error");
        }

    } else if (city === "Varna") {
        if (0 <= sales && sales <= 500) {
            console.log((sales*0.045).toFixed(2));

        }else if (500 < sales && sales <= 1000) {
            console.log((sales*0.075).toFixed(2));

        }else if (1000 < sales && sales <= 10000) {
            console.log((sales*0.10).toFixed(2));
        }else if (sales > 10000) {
            console.log((sales*0.13).toFixed(2));
        }else {
            console.log("error");
        }

    } else if (city === "Plovdiv") {
        if (0 <= sales && sales <= 500) {
            console.log((sales*0.055).toFixed(2));

        }else if (500 < sales && sales <= 1000) {
            console.log((sales*0.08).toFixed(2));

        }else if (1000 < sales && sales <= 10000) {
            console.log((sales*0.12).toFixed(2));
        } else if (sales > 10000) {
            console.log((sales*0.145).toFixed(2));
        }else {
            console.log("error");
        }

    }else {
        console.log("error");
    }

}

tradeCommissions(["Sofia", "1500"]);
tradeCommissions(["Plovdiv", "499.99"]);
tradeCommissions(["Varna", "3874.50"]);
tradeCommissions(["Kaspichan", "-50"]);