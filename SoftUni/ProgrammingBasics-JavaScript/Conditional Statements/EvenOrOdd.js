//УСЛОВИЕ (PROBLEM):
/*Четно или нечетно
Да се напише програма, която получава цяло число получено, като аргумент и отпечатва на конзолата, дали
е четно или нечетно. */

function evenOrOdd(input) {
    let num = Number(input.shift());

    if (num % 2 == 0) {
        console.log("even");
    }else {
        console.log("odd");
    }
}

evenOrOdd(["2"]);
evenOrOdd(["3"]);
evenOrOdd(["25"]);
evenOrOdd(["1024"]);