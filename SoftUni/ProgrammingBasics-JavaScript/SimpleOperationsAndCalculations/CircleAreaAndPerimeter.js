//УСЛОВИЕ (PROBLEM):
/*Напишете програма, която изважда  число r от аргумента input 
и пресмята и отпечатва лицето и периметъра на кръг / окръжност с радиус r,
като форматирате изхода до втория знак след десетичната запетая. 
Отпечатвайте на първия ред Area , а на втория Perimeter. */

function circleAreaPerimeter(input) {
    let r = Number(input.shift());

    let area = Math.PI * r * r;
    let perimeter = 2 * Math.PI * r;

    console.log(area.toFixed(2));
    console.log(perimeter.toFixed(2));
}

circleAreaPerimeter(["3"]);
circleAreaPerimeter(["4.5"]);
