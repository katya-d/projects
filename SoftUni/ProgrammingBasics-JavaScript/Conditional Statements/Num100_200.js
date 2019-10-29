//УСЛОВИЕ (PROBLEM):
/*Число от 100 до 200
Да се напише програма, която получава цяло число, получено като аргумент и проверява, дали е под 100,
между 100 и 200 или над 200. Да се отпечатат съответно съобщения, като в примерите по-долу: */

function numbers(input) {
    let number = Number(input.shift());

    if(number < 100) {
        console.log("Less than 100");
    } else if(number <= 200 && number >= 100) {
        console.log("Between 100 and 200");
    } else {
        console.log("Greater than 200");
    }
}

numbers(["95"]);
numbers(["120"]);
numbers(["210"]);