//УСЛОВИЕ (PROBLEM)
/*Напишете програма, която получава цяло число и отпечатва ден от седмицата (на английски език), в граници
[1...7] или отпечатва "Error" в случай, че въведеното число е невалидно. */

function dayOfWeek(input) {
    let day = Number(input.shift());

    if (1 <= day && day <= 7) {
        switch (day) {
            case 1: console.log ("Monday"); break;
            case 2: console.log ("Tuesday"); break;
            case 3: console.log ("Wednesday"); break;
            case 4: console.log ("Thursday"); break;
            case 5: console.log ("Friday"); break;
            case 6: console.log ("Saturday"); break;
            case 7: console.log ("Sunday"); break;
        }

    }else {
        console.log("Error");
    }

}

dayOfWeek(["1"]);
dayOfWeek(["2"]);
dayOfWeek(["3"]);
dayOfWeek(["4"]);
dayOfWeek(["5"]);
dayOfWeek(["6"]);
dayOfWeek(["7"]);
dayOfWeek(["-1"]);

