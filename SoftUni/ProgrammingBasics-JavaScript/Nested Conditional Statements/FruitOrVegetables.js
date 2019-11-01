//УСЛОВИЕ (PROBLEM)
/*Плод или зеленчук?
Да се напише програма, която приема входен аргумент input и от него изважда име на продукт, и
проверява дали е плод или зеленчук.
 Плодовете "fruit" имат следните възможни стойности: banana, apple, kiwi, cherry, lemon и grapes
 Зеленчуците "vegetable" имат следните възможни стойности: tomato, cucumber, pepper и carrot
 Всички останали са "unknown"
Да се изведе "fruit", "vegetable" или "unknown" според въведения продукт. */

function fruitOrVegetables (input) {
    let plant = input.shift();

    if (plant === "banana" || plant === "apple" || plant === "kiwi" || plant === "cherry" || plant === "lemon" || plant === "grapes") {
        console.log("fruit");
    
    }else if ( plant === "tomato" || plant === "cucumber" || plant === "pepper" || plant === "carrot") {
        console.log("vegetable");

    }else {
        console.log("unknown")
    }

}

fruitOrVegetables(["banana"]);
fruitOrVegetables(["apple"]);
fruitOrVegetables(["tomato"]);
fruitOrVegetables(["water"]);