//УСЛОВИЕ (PROBLEM):
/*Проверка за отлична оценка
Да се напише конзолна програма, която чете оценка, получена като аргумент и
отпечатва "Excellent!", ако оценката е 5.50 или по-висока. */

function excellentResult(input) {
    let evalution = Number(input.shift());

    if(evalution >= 5.50) {
        console.log("Excellent!");
    }

}

excellentResult(["6"]);
excellentResult(["5"]);
excellentResult(["5.50"]);
excellentResult(["5.49"]);