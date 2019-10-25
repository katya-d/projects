//УСЛОВИЕ(PROBLEM):
/*Напишете програма, която изважда име, фамилия, възраст и град
от аргумента input и печата съобщение от следния вид:
"You are <firstName> <lastName>, a <age>-years old person from <town>."*/

function concatenateData(input) {
    let firstName = input.shift();
    let lastName = input.shift();
    let years = input.shift();
    let town = input.shift();

    let info = `You are ${firstName} ${lastName}, a ${years}-years old person from ${town}.`

    console.log(info);
}

concatenateData(["Maria", "Ivanova", "20", "Sofia"]);