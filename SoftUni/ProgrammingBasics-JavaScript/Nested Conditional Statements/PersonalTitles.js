//УСЛОВИЕ (PROBLEM):
/*Да се напише конзолна програма, която прочита възраст (реално число) и пол ('m' или 'f'), въведени от
потребителя, и отпечатва обръщение измежду следните:
 "Mr." – мъж (пол 'm') на 16 или повече години
 "Master" – момче (пол 'm') под 16 години
 "Ms." – жена (пол 'f') на 16 или повече години
 "Miss" – момиче (пол 'f') под 16 години */

function personalTitles(input) {
    let age = Number(input.shift());
    let sex = input.shift();

    let word = 0;

    if (age >= 16) {
        if (sex === "m") {
            word = "Mr.";
        } else {
            word = "Ms.";
        }

    }else {
        if (sex === "m") {
            word = "Master";
        } else {
            word = "Miss";
        }
    }

    console.log(word);

}

personalTitles(["12", "f"]);
personalTitles(["17", "m"]);
personalTitles(["25", "f"]);
personalTitles(["13.5", "m"]);