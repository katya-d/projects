//УСЛОВИЕ (PROBLEM):
/*Лица на фигури
Да се напише програма, в която получава като аргумент вида и размерите на геометрична фигура и
пресмята лицето й. Фигурите са четири вида: квадрат (square), правоъгълник (rectangle), кръг (circle) и
триъгълник (triangle). На първия ред на входа се чете вида на фигурата (square, rectangle, circle или
triangle). Ако фигурата е квадрат, на следващия ред се чете едно число - дължина на страната му. Ако
фигурата е правоъгълник, на следващите два реда четат две числа - дължините на страните му. Ако фигурата
е кръг, на следващия ред чете едно число - радиусът на кръга. Ако фигурата е триъгълник, на следващите два
реда четат две числа - дължината на страната му и дължината на височината към нея. Резултатът да се
закръгли до 3 цифри след десетичната точка. */

function areaOfFigures(input) {
    let figureName = input.shift();
    let area = 0;

    if (figureName == "square") {
        let sideLength = Number(input.shift());

        area = (sideLength*sideLength).toFixed(3);

    }else if (figureName == "rectangle") {
        let sideLength = Number(input.shift());
        let sideWidth = Number(input.shift());

        area = (sideLength*sideWidth).toFixed(3);

    }else if (figureName == "circle") {
        let r = Number(input.shift());

        area = (Math.PI * r * r).toFixed(3);

    }else if (figureName == "triangle") {
        let sidelength = Number(input.shift());
        let heigth = Number(input.shift());

        area = ((sidelength*heigth)/2).toFixed(3);
    }

    console.log(area);
}

areaOfFigures(["square", "5"]);
areaOfFigures(["rectangle", "7", "2.5"]);
areaOfFigures(["circle", "6"]);
areaOfFigures(["triangle", "4.5", "20"]);