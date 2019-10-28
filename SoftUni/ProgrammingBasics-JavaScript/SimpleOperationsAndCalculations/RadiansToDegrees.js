//УСЛОВИЕ (PROBLEM):
/*Напишете програма, която чете ъгъл в радиани (radians) и го преобразува в градуси (degrees). Използвайте
формулата: градус = радиан * 180 / π.Числото π в JavaScript програми е достъпно чрез Math.PI. Закръглете
резултата до най-близкото цяло число използвайки "toFixed(0)". */

function radToDeg(input) {
    let radians = Number(input.shift());

    let degrees = (radians * 180) / Math.PI;

    console.log(degrees.toFixed(0));
}

radToDeg(["3.1416"]);
radToDeg(["6.2832"]);
radToDeg(["0.7854"]);
radToDeg(["0.5236"]);