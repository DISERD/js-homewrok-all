// 1.
const logItems = function (array) {
  for (let i = 0; i < array.length; i += 1) {
    console.log(`${i + 1} - ${array[i]}`);
  }
};

// Перевірка
// logItems(['Mango', 'Poly', 'Ajax']);

// 2.
const calculateEngravingPrice = function (message, pricePerWord) {
  const words = message.split(' ');
  return words.length * pricePerWord;
};

// Перевірка
// console.log(calculateEngravingPrice('Пробне повідомлення для гравіювання', 10));


//3.
const findLongestWord = function (string) {
    return string.split(' ').reduce((longest, word) => 
        word.length > longest.length ? word : longest
    );
};

// 4.
const formatString = function (string) {
    return string.length > 40 ? string.slice(0, 40) + '...' : string;
};

// 5.
const checkForSpam = function (message) {
    const normalized = message.toLowerCase();
    return ['spam', 'sale'].some(word => normalized.includes(word));
};

// 6.
let input;
const numbers = [];

const processInput = () => {
    while ((input = prompt('Введіть число')) !== null) {
        const number = Number(input);
        !Number.isNaN(number) ? numbers.push(number) : alert('Було введено не число, попробуйте ще раз');
    }
};

processInput();

numbers.length > 0 && console.log(`Загальна сума чисел дорівнює ${numbers.reduce((sum, n) => sum + n, 0)}`);

// 7.
//const logins = ['mgoz', 'kizq', 'poly1scute', 'aj4x3']; // Приклад масиву для тесту

// 7.1 Перевірка довжини
//const isLoginValid = function (login) {
//  return login.length >= 4 && login.length <= 16;
//};

// 7.2 Перевірка унікальності
//const isLoginUnique = function (allLogins, login) {
//  return !allLogins.includes(login);
//};

// 7.3 Основна функція додавання
//const addLogin = function (allLogins, login) {
// Guard Clause 1: перевірка валідності
//  if (!isLoginValid(login)) {
//    return 'Помилка! Логін повинен бути від 4 до 16 символів';
//  }

// Guard Clause 2: перевірка унікальності
//if (!isLoginUnique(allLogins, login)) {
//return 'Такий логін уже використовується!';
//}

// Якщо код дійшов сюди, значить всі перевірки пройдено
//allLogins.push(login);
//return 'Логін успішно доданий!';
//};

// Перевірка
// console.log(addLogin(logins, 'ab')); // Помилка! Логін повинен бути від 4 до 16 символів
// console.log(addLogin(logins, 'kizq')); // Такий логін уже використовується!
// console.log(addLogin(logins, 'newuser')); // Логін успішно доданий!
// console.log(logins); // Перевіряємо чи додався логін у масив


// 7. Додатково
const logins = ['mgoz', 'kizq', 'poly1scute', 'aj4x3']; // Приклад масиву для тесту

// 1. Перевірка довжини
const isLoginValid = function (login) {
  return login.length >= 4 && login.length <= 16;
};

// 2. Перевірка унікальності
const isLoginUnique = function (allLogins, login) {
  return !allLogins.includes(login);
};

// 3. Основна функція додавання
const addLogin = function (allLogins, login) {
  // Guard Clause 1: перевірка валідності
  if (!isLoginValid(login)) {
    return 'Помилка! Логін повинен бути від 4 до 16 символів';
  }

  // Guard Clause 2: перевірка унікальності
  if (!isLoginUnique(allLogins, login)) {
    return 'Такий логін уже використовується!';
  }

  // Якщо код дійшов сюди, значить всі перевірки пройдено
  allLogins.push(login);
  return 'Логін успішно доданий!';
};

// Перевірка
// console.log(addLogin(logins, 'ab')); // Помилка! Логін повинен бути від 4 до 16 символів
// console.log(addLogin(logins, 'kizq')); // Такий логін уже використовується!
// console.log(addLogin(logins, 'newuser')); // Логін успішно доданий!
// console.log(logins); // Перевіряємо чи додався логін у масив