//УСЛОВИЕ (PROBLEM):
/*Еднакви думи
Да се напише програма, която получава като аргумент две думи и проверява, дали са еднакви. Да не се
прави разлика между главни и малки думи. Да се изведе "yes"; или "no". */

function sameWords(input) {
    let word1 = (input.shift()).toLowerCase();
    let word2 = (input.shift()).toLowerCase();

    if (word1 == word2) {
        console.log("yes");
    }else {
        console.log("no");
    }
}

sameWords(["Hello", "Hello"]);
sameWords(["SoftUni", "Softuni"]);
sameWords(["Soft", "Uni"]);
sameWords(["beer", "vodka"]);
sameWords(["HeLlO", "hELLo"]);