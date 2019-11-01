//УСЛОВИЕ (PROBLEM):
/*Невалидно число
Дадено число е валидно, ако е в диапазона [100…200] или е 0. Да се напише програма, която приема
аргумента input и изважда от него цяло число, и печата "invalid" ако въведеното число не е валидно.*/

function invalidNumber(input) {
    let inputNum = Number(input.shift());

    if ((inputNum >= 100 && inputNum <= 200) || inputNum === 0) {
        
    } else {
        console.log("invalid");
    }

}

invalidNumber(["75"]);
invalidNumber(["150"]);
invalidNumber(["220"]);
invalidNumber(["199"]);
invalidNumber(["-1"]);
invalidNumber(["100"]);
invalidNumber(["200"]);
invalidNumber(["0"]);