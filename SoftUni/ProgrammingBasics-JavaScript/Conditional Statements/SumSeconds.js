//УСЛОВИЕ (PROBLEM):
/*Трима спортни състезатели финишират за някакъв брой секунди (между 1 и 50). Да се напише програма,
която чете времената на състезателите в секунди, въведени от потребителя и пресмята сумарното им време
във формат "минути:секунди". Секундите да се изведат с водеща нула (2 -> "02", 7 -> "07", 35 ->"35"). */

function sumSec(input) {
    let firstCompetitorTime = Number(input.shift());
    let secondCompetitorTime = Number(input.shift());
    let thirdCompetitorTime = Number(input.shift());

    let totalTimeInSeconds = firstCompetitorTime + secondCompetitorTime + thirdCompetitorTime;

    let minutes = Math.floor(totalTimeInSeconds / 60);
    let seconds = totalTimeInSeconds % 60;

    if (seconds < 10) {
        console.log(`${minutes}:0${seconds}`);

    }else {
        console.log(`${minutes}:${seconds}`);
    }
}

sumSec(["35", "45", "44"]);
sumSec(["22", "7", "34"]);
sumSec(["50", "50", "49"]);
sumSec(["14", "12", "10"]);