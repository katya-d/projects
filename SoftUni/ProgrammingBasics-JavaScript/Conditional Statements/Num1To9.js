//УСЛОВИЕ (PROBLEM):
/*Изписване на число до 9 с думи
Да се напише програма, която получава цяло число в диапазона [1…9], получено като аргумент и го изписва с
думи на английски език. Ако числото е извън диапазона, изписва "number too big". */

function num1To9(input) {
    let num = Number(input.shift());

    switch(num) {
        case 1: console.log("one"); break;
        case 2: console.log("two"); break;
        case 3: console.log("three"); break;
        case 4: console.log("four"); break;
        case 5: console.log("five"); break;
        case 6: console.log("six"); break;
        case 7: console.log("seven"); break;
        case 8: console.log("eight"); break;
        case 9: console.log("nine"); break;
        default: console.log("number too big");
    }
}

num1To9(["5"]);
num1To9(["1"]);
num1To9(["9"]);
num1To9(["10"]);