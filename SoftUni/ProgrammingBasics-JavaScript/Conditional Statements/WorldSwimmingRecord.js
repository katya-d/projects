//УСЛОВИЕ (PROBLEM) 
/*Иван решава да подобри Световния рекорд по плуване на дълги разстояния. На конзолата се въвежда
рекордът в секунди, който Иван трябва да подобри, разстоянието в метри, което трябва да преплува и
времето в секунди, за което плува разстояние от 1 м. Да се напише програма, която изчислява дали се е
справил със задачата, като се има предвид, че: съпротивлението на водата го забавя на всеки 15 м. с 12.5
секунди. Когато се изчислява колко пъти Иванчо ще се забави, в резултат на съпротивлението на водата,
резултатът трябва да се закръгли надолу до най-близкото цяло число.
Да се изчисли времето в секунди, за което Иванчо ще преплува разстоянието и разликата спрямо
Световния рекорд.
От конзолата се четат 3 реда:
1. Рекордът в секунди – реално число в интервала [0.00 … 100000.00]
2. Разстоянието в метри – реално число в интервала [0.00 … 100000.00]
3. Времето в секунди, за което плува разстояние от 1 м. - реално число в интервала [0.00 … 1000.00]
Изход
Отпечатването на конзолата зависи от резултата:
 Ако Иван е подобрил Световния рекорд отпечатваме:
o " Yes, he succeeded! The new world record is {времето на Иван} seconds"
 Ако НЕ е подобрил рекорда отпечатваме:
o "No, he failed! He was {недостигащите секунди} seconds slower."

Резултатът трябва да се форматира до втория знак след десетичната запетая. */

function swimmingRecord(input) {
    let recordSeconds = Number(input.shift());
    let lengthMeters = Number(input.shift());
    let timeInSeconds = Number(input.shift());

    let totalSeconds = lengthMeters * timeInSeconds;
    let additionalSeconds = (Math.floor(lengthMeters / 15)) * 12.5;
    
    let totalTime = (totalSeconds + additionalSeconds);

    let leftTime = Math.abs(recordSeconds - totalTime);

    if (totalTime < recordSeconds) {
        console.log(`Yes, he succeeded! The new world record is ${totalTime.toFixed(2)} seconds.`);
    }else {
        console.log(`No, he failed! He was ${leftTime.toFixed(2)} seconds slower.`);
    }

}

swimmingRecord(["10464", "1500", "20"]);
swimmingRecord(["55555.67", "3017", "5.03"]);