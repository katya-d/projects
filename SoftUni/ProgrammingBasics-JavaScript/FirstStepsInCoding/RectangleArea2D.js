//УСЛОВИЕ (PROBLEM):
/*Правоъгълник е зададен с координатите на два от своите срещуположни ъгъла (x1, y1) – (x2, y2). Да се
 пресметнат площта и периметъра му. Входът се приема от конзолата. Числата x1, y1, x2 и y2 са дадени по едно наред.
 Изходът се извежда на конзолата и трябва да съдържа два реда с по една число на всеки от тях – лицето и периметъра.
 Закръглете резултата до 2 цифри след десетичната запетая */

 function rectangleArea(input) {
    let x1 = Number(input.shift());
    let y1 = Number(input.shift());
    let x2 = Number(input.shift());
    let y2 = Number(input.shift());

    let x = Math.abs(x1-x2);
    let y = Math.abs(y1-y2);

    let area = (x*y).toFixed(2);
    let perimeter = (2*(x+y)).toFixed(2);

    console.log(area);
    console.log(perimeter);
 }

 rectangleArea(["60", "20", "10", "50"]);
 rectangleArea(["30", "40", "70", "-10"]);
 rectangleArea(["600.25", "500.75", "100.50", "-200.5"]);