//УСЛОВИЕ (PROBLEM)
/*Резервация
Деси разглежда оферти за престой по време на почивката си. Намира подходящо място за престой със
следните условия:
- Нощувката за двойна стая струва 30лв
• OK - Ако резервацията бъде направена поне 10 дена по-рано, цената е 25лв
- OK - Ако резервацията бъде направена от предходен месец се начислява 20% отстъпка и цената на
нощувката е 25лв
Напишете програма, която според деня и месеца на резервацията, деня на настаняване и деня на напускане
на хотела изчислява сумата, която Деси трябва да заплати. Почивката на Деси няма да започва през един
месец и да приключва през друг.
Вход
- Първи ред – ден, в който е направена резервацията – цяло число в интервала от [1… 31]
- Втория ред – месец, в който е направена резервацията – цяло число в интервала от [1... 12]
- Трети ред – ден за настаняване – цяло число в интервала от [1... 30]
- Четвърти ред – месец за настаняване – цяло число в интервала от [1... 12]
- Пети ред – ден за напускане на стаята – цяло число в интервала от [1... 31]
- Шести ред – месец за напускане на стаята – цяло число в интервала от [1... 12]
Изход
"Your stay from {1}/{2} to {3}/{4} will cost {5}"
Където:
- 1 – ден за настаняване
- 2 – месец за настаняване
- 3 – ден за напускане на стаята
- 4 – месец за напускане на стаята
- 5 – сума за престоя, форматирана до втория знак след десетичната запетая */

function reservation(input) {
    let reservationDay = Number(input.shift());
    let reservationMonth = Number(input.shift());
    let accomodationDay = Number(input.shift());
    let accomodationMonth = Number(input.shift());
    let leavingRoomDay = Number(input.shift());
    let leavingRoomMonth = Number(input.shift());

    let daysBetweenAccomAndReserv = accomodationDay - reservationDay; //колко дни преди настаняване е направена резервацията.
    let nightsNum = leavingRoomDay - accomodationDay; // броя на нощувките
    let monthBefore = accomodationMonth - reservationMonth; //Колко време преди настаняване е направена резервацията.

    if (daysBetweenAccomAndReserv > 10 || monthBefore > 0) {
        let nightPrice = 25;
        let totalPrice = nightsNum * nightPrice;
        
        if (monthBefore > 0) {
            let discount = totalPrice*0.20;
            let endSum = totalPrice - discount;
            console.log(`Your stay from ${accomodationDay}/${accomodationMonth} to ${leavingRoomDay}/${leavingRoomMonth} will cost ${endSum.toFixed(2)}`);

        }else if (daysBetweenAccomAndReserv > 10) {
            let endPrice = nightsNum * 25;
            console.log(`Your stay from ${accomodationDay}/${accomodationMonth} to ${leavingRoomDay}/${leavingRoomMonth} will cost ${endPrice.toFixed(2)}`);
        }

    }else {
        let endPrice = nightsNum * 30;
            console.log(`Your stay from ${accomodationDay}/${accomodationMonth} to ${leavingRoomDay}/${leavingRoomMonth} will cost ${endPrice.toFixed(2)}`);
    }

}

reservation(["21", "7", "28", "8", "30", "8"]);
reservation(["10", "5", "15", "5", "18", "5"]);
reservation(["20", "10", "5", "11", "10", "11"]);