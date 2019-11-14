const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Oprah', last: 'Winfrey', year: 1954 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Sheryl', last: 'Sandberg', year: 1969 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Beyonce', last: 'Knowles', year: 1981 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Diane', last: 'Hendricks', year: 1947 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Marissa', last: 'Mayer', year: 1975 },
  { first: 'Walt', last: 'Disney', year: 1901 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];



// Filtre dans cette liste les entrepreneurs qui sont nés dans les années 70 ;
console.log('------------------ Né dans les années 70 ------------------');
let sampleEntrepreneurs = entrepreneurs.filter(entrepreneur => (entrepreneur.year > 1969 && entrepreneur.year < 1980));
for(let index in sampleEntrepreneurs) {
  console.log(sampleEntrepreneurs[index].first + " " + sampleEntrepreneurs[index].last);
}

//Sors une array qui contient le prénom et le nom des entrepreneurs ;
console.log('------------------ Nom et Prénom ------------------');
let array = [];
for(let index in entrepreneurs) {
  let Name = entrepreneurs[index].first + " " + entrepreneurs[index].last;
  array.push(Name);
  console.log(array[index]);
}

// Quel âge aurait chaque entrepreneur aujourd'hui ?
console.log('------------------ Age en 2019 ------------------');
for(let index in entrepreneurs) {
  console.log(entrepreneurs[index].first + " " + entrepreneurs[index].last + " aurait : " + (2019 - entrepreneurs[index].year) + " ans actuellement");
}

//Trie les entrepreneurs par ordre alphabétique du nom de famille.
console.log('------------------ Tri nom de famille des entrepreneurs ------------------');
// je créé un array avec nom et prénom pour trier
let arrayLastName = [];
for(let index in entrepreneurs) {
  let all = entrepreneurs[index].last + " " + entrepreneurs[index].first;
  arrayLastName.push(all);
}

// je trie avec .sort()
arrayLastName.sort();
let name = [];
for(let index in arrayLastName) {
  // affiche prénom nom
  name = arrayLastName[index].split(' ');
  //console.log(lastNameBoss[index]);
  console.log(name[0] + " " + name[1]);
}