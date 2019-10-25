//УСЛОВИЕ (PROBLEM):
/*Напишете програма, която изважда от аргумента  input  име на човек
и отпечатва "Hello, <name>!", където <name> е въведеното име от конзолата.*/

function greetings(input) {
    let name = input.shift();

    console.log(`Hello, ${name}!`);
}

greetings(["Niki"]);