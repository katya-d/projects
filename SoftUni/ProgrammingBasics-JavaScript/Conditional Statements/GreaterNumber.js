//УСЛОВИЕ (PROBLEM):
/*Намиране на по-голямото число
Да се напише програма, която получава две цели числа въведени от потребителя и отпечатва по-голямото от
двете. */

function greaterNum(input) {
    let num1 = Number(input.shift());
    let num2 = Number(input.shift());

    if(num1 > num2) {
        console.log(num1);
    }else {
        console.log(num2);
    }
}

greaterNum(["5", "3"]);
greaterNum(["3", "5"]);
greaterNum(["10", "10"]);
greaterNum(["-5", "5"]);