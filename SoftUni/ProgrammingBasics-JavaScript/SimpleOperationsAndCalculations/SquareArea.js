//УСЛОВИЕ (PROBLEM):
/*Да се напише конзолна програма, която изважда цяло число от аргумента input
и пресмята лицето на квадрат със страна "a".*/

function squareArea(input) {
    let a = parseInt(Number(input.shift()));
    let area = a*a;

    console.log(area);
}

squareArea(["5"]);