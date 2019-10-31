//УСЛОВИЕ (PROBLEM)
/**Стипендии
Учениците могат да кандидатстват за социална стипендия или за стипендия за отличен успех. Изискване за
социална стипендия - доход на член от семейството по-малък от минималната работна заплата и успех над
4.5. Размер на социалната стипендия - 35% от минималната работна заплата. Изискване за стипендия за
отличен успех - успех над 5.5, включително. Размер на стипендията за отличен успех - успехът на ученика,
умножен по коефициент 25.
Напишете програма, която при въведени доход, успех и минимална работна заплата, дава информация дали
ученик има право да получава стипендия, и стойността на стипендията, която е по-висока за него.
Вход
Потребителят въвежда 3 числа, по едно на ред:
1. Доход в лева - реално число в интервала [0.00..6000.00]
2. Среден успех - реално число в интервала [2.00...6.00]
3. Минимална работна заплата - реално число в интервала [0.00..1000.00]
Изход
Ако ученикът няма право да получава стипендия, се извежда:
"You cannot get a scholarship!";
 Ако ученикът има право да получава социална стипендия и тя е по-висока от стипендията за отличен
успех:
"You get a Social scholarship {стойност на стипендия} BGN";
 Ако ученикът има право да получава стипендия за отличен успех и тя е по-висока или равна по
стойност на социалната стипендия за него:
 "You get a scholarship for excellent results {стойност на стипендията} BGN"
Резултатът се закръгля до по-малкото цяло число. */

function scholarship(input) {
    let averageIncome = Number(input.shift());
    let evaluation = Number(input.shift());
    let minimalSalary = Number(input.shift());

    let scholarshipMin = minimalSalary * 0.35;
    let scholarshipGreat = evaluation * 25;

    if (evaluation >= 5.50) {
        if (scholarshipGreat >= scholarshipMin || averageIncome > minimalSalary) {
            console.log(`You get a scholarship for excellent results ${Math.floor(scholarshipGreat)} BGN`);
        }else {
            console.log(`You get a Social scholarship ${Math.floor(scholarshipMin)} BGN`);
        }
    }else if (averageIncome < minimalSalary && evaluation > 4.5) {
        console.log(`You get a Social scholarship ${Math.floor(scholarshipMin)} BGN`);
    }else {
        console.log("You cannot get a scholarship!");
    }
  
}
   

scholarship(["480.00", "4.60", "450.00"]);
scholarship(["300.00", "5.65", "420.00"]);