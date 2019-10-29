//УСЛОВИЕ (PROBLEM):
/*Познай паролата
Да се напише програма, която получава парола (един ред с произволен текст), получено като аргумент и
проверява, дали съвпада с фразата "s3cr3t!P@ssw0rd". При съвпадение да се изведе "Welcome". При
несъвпадение да се изведе "Wrong password!". */

function passGuess(input) {
    let text = input.shift();

    if (text == "s3cr3t!P@ssw0rd") {
        console.log("Welcome");
    } else {
        console.log("Wrong password!");
    }
}

passGuess(["qwerty"]);
passGuess(["s3cr3t!P@ssw0rd"]);
passGuess(["s3cr3t!p@ss"]);