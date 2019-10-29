//УСЛОВИЕ (PROBLEM):
/*Еднакви 3 числа
Да се въведат 3 числа и да се отпечата, дали са еднакви (yes / no)*/

function sameNums(input) {
    let num1 = Number(input.shift());
    let num2 = Number(input.shift());
    let num3 = Number(input.shift());

    if (num1 == num2 && num1 == num3 && num2==num3) {
        console.log("yes");
    } else {
        console.log("no");
    }
}

sameNums(["1", "1", "1"]);
sameNums(["5", "5", "5"]);
sameNums(["1", "2", "3"]);
sameNums(["11", "8", "5"]);
sameNums(["13", "14", "99"]);