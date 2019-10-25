//УСЛОВИЕ (PROBLEM):
/*Напишете програма, която изчислява колко часове ще са необходими
на един архитект, за да изготви проектите на няколко строителни обекта.
Изготвянето на един проект отнема приблизително три часа.
Вход:
От конзолата се четат 2 реда:
1.	Името на архитекта - текст
2.	Брой на проектите - цяло число в интервала [0… 100]

Изход:
На конзолата се отпечатва:
"The architect {името на архитекта} will need {необходими часове} hours
to complete {брой на проектите} project/s." */

function projectCreation(input) {
    let architectName = input.shift();
    let projectNumbers = parseInt(Number(input.shift()));

    let projectHours = projectNumbers*3;

    let result = `The architect ${architectName} will need ${projectHours} hours to complete ${projectNumbers} project/s.`;

    console.log(result);
}

projectCreation(["George", "4"]);
projectCreation(["Sanya", "9"]);