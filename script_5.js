const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Les frères Karamazov', id: 450911, rented: 5 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];

// Est-ce que tous les livres ont été au moins empruntés une fois ?
console.log("------------------ Au moins empruntés une fois ------------------")
for(let index in books) {
  if (books[index]['rented']>1) {
    console.log(books[index]['title'] + " a été emprunté plus d'une fois ");
  }
}

// Quel est livre le plus emprunté ?


// Quel est le livre le moins emprunté ?


// Trouve le livre avec l'ID: 873495 
let findBook = books.find(book => book.id == 873495);
console.log("------------------ Livre avec l'ID: 873495 est : ------------------");
console.log(findBook.title);

// Supprime le livre avec l'ID: 133712 ;
console.log("------------------ Supprime le livre avec l'ID: 133712 ------------------")
findBook = books.find(book => book.id === 133712);
books.splice(findBook,1);  //.splice(début, nbASupprimer)
console.log(books);

// Trie les livres par ordre alphabétique.
console.log("------------------ Les livres triés par ordre alphabétique ------------------")
// je créé un array avec title
let arrayTitle = [];
for(let index in books) {
  let all = books[index].title;
  arrayTitle.push(all);
}
// .sort() pour trier
arrayTitle.sort();
console.log(arrayTitle)