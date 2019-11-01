//УСЛОВИЕ (PROBLEM)
/*Напишете програма, която отпечатва класа на животното според неговото име, въведено от потребителя.
1. dog -> mammal
2. crocodile, tortoise, snake -> reptile
3. others -> unknown */

function animalType(input) {
    let animal = input.shift();

    let theTypeOfAnimal = 0;

    switch (animal) {
        case "dog": theTypeOfAnimal = "mammal"; break;
        case "crocodile":
        case "tortoise":
        case "snake": theTypeOfAnimal = "reptile"; break;
        default: theTypeOfAnimal = "unknown"; break;
    }

    console.log(theTypeOfAnimal);
}

animalType(["dog"]);
animalType(["snake"]);
animalType(["cat"]);