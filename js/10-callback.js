// 1.
const countItems = (array, condition) => {
  let count = 0;
  for (const element of array) {
    if (condition(element)) {
      count += 1;
    }
  }
  return count;
};

const numbers = [1, 5, 8, 12, 3, 15, 7, 20];
const words = ['кіт', 'собака', 'миша', 'папуга', 'хомяк'];

const isEven = num => num % 2 === 0;
const isLarge = num => num > 10;
const isShort = word => word.length <= 3;

console.log('--- Завдання 1 ---');
console.log('Парних чисел:', countItems(numbers, isEven));
console.log('Чисел більше 10:', countItems(numbers, isLarge));
console.log('Коротких слів:', countItems(words, isShort));


// 2.
const calculate = (a, b, operation) => operation(a, b);

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => {
  if (b === 0) {
    return 'Помилка: ділення на нуль!';
  }
  return a / b;
};

console.log('\n--- Завдання 2 ---');
console.log(calculate(10, 5, add));      // 15
console.log(calculate(10, 5, subtract)); // 5
console.log(calculate(10, 5, multiply)); // 50
console.log(calculate(10, 5, divide));   // 2
console.log(calculate(10, 0, divide));   // Errror


// 3.
const repeatMessage = (times, messageCreator) => {
  for (let i = 0; i < times; i++) {
    messageCreator(i);
  }
};

console.log('\n--- Завдання 3 ---');
// test 1
repeatMessage(3, i => console.log(`Повідомлення №${i + 1}`));

// text 2
const labels = [];
repeatMessage(5, value => {
  labels.push(`ID-${value * 100}`);
});
console.log('Згенеровані ID:', labels);


// 4.
const processMovies = (movies, action) => {
  for (let i = 0; i < movies.length; i++) {
    action(movies[i], i);
  }
};

const myMovies = [
  { title: 'Інтерстеллар', rating: 8.7, genre: 'Наукова фантастика' },
  { title: 'Початок', rating: 8.8, genre: 'Бойовик' },
  { title: 'Дюна', rating: 8.0, genre: 'Пригоди' }
];

// 1)
const showTitleUpper = (movie, index) => {
  console.log(`${index + 1}. Фільм: ${movie.title.toUpperCase()}`);
};

// 2)
const checkRating = movie => {
  const status = movie.rating > 8.5 ? '🔥 Хіт' : '👍 Хороший';
  console.log(`${movie.title}: ${status} (${movie.rating})`);
};

// 3)
const logShortInfo = (movie) => {
  console.log(`Жанр "${movie.genre}" — це про фільм "${movie.title}"`);
};

console.log('\n--- Завдання 4 ---');
processMovies(myMovies, showTitleUpper);
console.log('---');
processMovies(myMovies, checkRating);
console.log('---');
processMovies(myMovies, logShortInfo);