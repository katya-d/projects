//УСЛОВИЕ (PROBLEM):
/*Дадено е цяло число – начален брой точки. Върху него се начисляват бонус точки по правилата, описани по-
долу. Да се напише програма, която пресмята бонус точките, които получава числото и общия брой точки
(числото + бонуса).
 Ако числото е до 100 включително, бонус точките са 5.
 Ако числото е по-голямо от 100, бонус точките са 20% от числото.
 Ако числото е по-голямо от 1000, бонус точките са 10% от числото.
 Допълнителни бонус точки (начисляват се отделно от предходните):
o За четно число -> + 1 т.
o За число, което завършва на 5 -> + 2 т. */

function bonusScore(input) {
    let num = Number(input.shift());

    let bonus = 0;
    let totalPoints = 0;

    if (num <= 100) {
        bonus = 5;
        totalPoints = num + bonus;


    }else if (num > 100 && num <= 1000) {
        bonus = num * 0.20;
        totalPoints = num + bonus;

    }else if (num > 1000) {
        bonus = num * 0.10;
        totalPoints = num + bonus;
    }

    if (num % 2 === 0) {
        bonus +=1;
        totalPoints = num + bonus;

    }else if (num % 10 === 5) {
        bonus +=2;
        totalPoints = num + bonus;
    }

    console.log(bonus);
    console.log(totalPoints);

}

bonusScore(["20"]);
bonusScore(["175"]);
bonusScore(["2703"]);
bonusScore(["15875"]);