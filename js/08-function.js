//1
const friends = ['Mango', 'Poly', 'Kiwi', 'Ajax'];
let string = '';

for (let i = 0; i < friends.length; i += 1) {
  string += friends[i];
  
  if (i !== friends.length - 1) {
    string += ',';
  }
}
console.log('Через for:', string);

const stringJoin = friends.join(',');
console.log('Через join():', stringJoin);

//2
const cards = [
  'Карточка-1',
  'Карточка-2',
  'Карточка-3',
  'Карточка-4',
  'Карточка-5',
];

console.log('Початковий масив:', cards);

//3
const cardToRemove = 'Карточка-3';
const indexToRemove = cards.indexOf(cardToRemove);

cards.splice(indexToRemove, 1);

console.log('Після видалення:', cards); 


//4
const cardToInsert = 'Карточка-6';
const indexToInsert = 2; 

cards.splice(indexToInsert, 0, cardToInsert);

console.log('Після додавання:', cards); 


//5
const cardToUpdate = 'Карточка-4';
const indexToUpdate = cards.indexOf(cardToUpdate);

cards.splice(indexToUpdate, 1, 'Оновлена Карточка-4');

console.log('Після оновлення:', cards); 