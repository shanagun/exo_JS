function factorielle() {
    let myNumber = prompt("De quel nombre veut tu calculer la factorielle ?");
    let fact = 1;
    for (let index = myNumber; index > 1; index--) {
        fact = fact * index;
    }
    return fact;
}

console.log(`Le résultat est : ${factorielle()}`);