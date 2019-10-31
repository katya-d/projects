//УСЛОВИЕ (PROBLEM)
/*Да се напише програма, която чете час и минути от 24-часово денонощие, въведени от потребителя и
изчислява колко ще е часът след 15 минути. Резултатът да се отпечата във формат часове:минути. Часовете
винаги са между 0 и 23, а минутите винаги са между 0 и 59. Часовете се изписват с една или две цифри.
Минутите се изписват винаги с по две цифри, с водеща нула, когато е необходимо. */

function time(input) {
    let hours = Number(input.shift());
    let minutes = Number(input.shift());

    let fromHoursToMinutes = hours * 60;
    let totalMinutes = fromHoursToMinutes + minutes + 15;

    let theHour = Math.floor(totalMinutes / 60);
    let theMinutes = Math.floor(totalMinutes % 60);

    if (theHour < 24) {

        if (theMinutes < 10) {
            console.log(`${theHour}:0${theMinutes}`);
        }else {
            console.log(`${theHour}:${theMinutes}`);
        }

    } else {
        if (theMinutes < 10) {
            console.log(`0:0${theMinutes}`);
        }else {
            console.log(`0:${theMinutes}`);
        }
    }

}

time(["1", "46"]);
time(["0", "01"]);
time(["23", "59"]);
time(["11", "08"]);
time(["12", "49"]);