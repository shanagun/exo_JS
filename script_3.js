let userEntry = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");
console.log("Voici la pyramide :");

 for (let i = 1; i <= userEntry; i++) {
     floor = ""
     for (let x = 0; x < (userEntry-i); x++) {
         floor += "  ";
     }

     for (let x = 0; x < i; x++) {
         floor += "#";
     }

     console.log(floor);
 }