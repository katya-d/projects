//УСЛОВИЕ (PROBLEM)
/*Да се напише програма, която преобразува разстояние между следните 3 мерни единици: mm, cm, m.
Използвайте съответствията от таблицата по-долу:
входна единица - изходна единица
1 meter (m) - 1000 millimeters (mm)
1 meter (m) - 100 centimeters (cm)
Входните данни се състоят от три реда, въведени от потребителя:
 Първи ред: число за преобразуване - реално число
 Втори ред: входна мерна единица - текст
 Трети ред: изходна мерна единица (за резултата) - текст
На конзолата да се отпечата резултатът от преобразуването на мерните единици форматиран до третия знак
след десетичната запетая. */

function metricConverter(input) {
    let num = Number(input.shift());
    let fromUnit = input.shift();
    let toUnit = input.shift();

    let result = 0;

    if (toUnit == "mm") {
        if (fromUnit === "m") {
            result = num * 1000;

        }else if (fromUnit === "cm") {
            result = num * 10;
        }

    } else if (toUnit === "cm") {
        if (fromUnit === "mm") {
            result = num / 10;

        }else if (fromUnit === "m") {
            result = num * 100;
        }

    } else if (toUnit === "m") {
        if (fromUnit === "mm") {
            result = num / 1000;

        }else if (fromUnit === "cm") {
            result = num / 100;
        }
    }

    console.log (result.toFixed(3));
}

metricConverter(["12", "mm", "m"]);
metricConverter(["150", "m", "cm"]);
metricConverter(["45", "cm", "mm"]);