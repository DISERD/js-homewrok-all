// 1. Часткова деструктуризація
const friends = ['Mango', 'Poly', 'Kiwi', 'Ajax'];
const [friend1, friend2, ...otherFriends] = friends; 

console.log(`Перші: ${friend1}, ${friend2}. Інші: ${otherFriends}`);

const stringJoin = friends.join(',');
console.log('Через join():', stringJoin);


// 2.
const cards = [
  'Карточка-1',
  'Карточка-2',
  'Карточка-3',
  'Карточка-4',
  'Карточка-5',
];
console.log('Початковий масив:', cards);


// 3. Видалення (знаходимо 3-тю картку пропускаючи перші дві)
const [ , , cardToRemove ] = cards;
const indexToRemove = cards.indexOf(cardToRemove);
cards.splice(indexToRemove, 1);
console.log('Після видалення:', cards); 


// 4. Додавання
const cardToInsert = 'Карточка-6';
const indexToInsert = 2; 
cards.splice(indexToInsert, 0, cardToInsert);
console.log('Після додавання:', cards); 


// 5. Оновлення
const cardToUpdate = 'Карточка-4';
const indexToUpdate = cards.indexOf(cardToUpdate);
cards.splice(indexToUpdate, 1, 'Оновлена Карточка-4');
console.log('Після оновлення:', cards);