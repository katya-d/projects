//УСЛОВИЕ (PROBLEM):
/*Калкулатор за сериали
Напишете програма, която изчислява колко време ще ви отнеме да изгледате всички епизоди на един
сериал в минути. Ще разполагате с брой сезони, брой епизоди на сезон и времетраене на един епизод. Във
всеки епизод има реклами, които са с продължителност 20% от времето на един епизод. Също така знаете,
че всеки сезон завършва със специален епизод, който е с 10м по-дълъг от обичайното.
Вход
От конзолата се четат 4 реда:
• Име на сериал - текст
• Брой сезони – цяло число в диапазона [1… 10]
• Брой епизоди – цяло число в диапазона [10… 80]
• Времетраене на обикновен епизод без рекламите – реално число в диапазона [40.0… 65.0]
Изход
Да се отпечата на конзолата времето, необходимо за изглеждане на всички епизоди,
закръглено до найблизкото цяло число надолу в следния формат:
"Total time needed to watch the {име на сериал} series is {време} minutes." */

function seriesCalc(input) {
    let seriesName = input.shift();
    let seasonsNumber = Number(input.shift());
    let episodesNumber = Number(input.shift());
    let episodeDuration = Number(input.shift());

    let advertisementDuration = episodeDuration*0.20;

    let totalWatchTime = ((seasonsNumber*episodesNumber)*(episodeDuration+advertisementDuration))+(seasonsNumber*10);

    console.log(`Total time needed to watch the ${seriesName} series is ${Math.floor(totalWatchTime)} minutes.`);
}

seriesCalc(["Lucifer", "3", "18", "55"]);
seriesCalc(["Game of Thrones", "7", "10", "50"]);
seriesCalc(["Riverdale", "3", "21", "45"]);