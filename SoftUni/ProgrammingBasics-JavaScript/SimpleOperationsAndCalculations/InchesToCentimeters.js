//УСЛОВИЕ (PROBLEM):
/*Да се напише програма, която изважда цяло число от аргумента input
и преобразува числото от инчове в сантиметри.
За целта умножава инчовете по 2.54 (защото 1 инч = 2.54 сантиметра).*/

function inchesToCentimeters (input) {
    let inches = Number(input.shift());

    let centimeters = inches*2.54;

    console.log(centimeters);
}

inchesToCentimeters(["5"]);