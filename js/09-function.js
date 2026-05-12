// 1. 
const logItems = function (array) {
  for (let i = 0; i < array.length; i += 1) {
    console.log(`${i + 1} - ${array[i]}`);
  }
};

// 2. Деструктуризація об'єкта аргументів в параметрах функції
const calculateEngravingPrice = function ({ message, pricePerWord }) {
  const words = message.split(' ');
  return words.length * pricePerWord;
};
// console.log(calculateEngravingPrice({ message: 'Пробне повідомлення', pricePerWord: 10 }));

// 3.
const findLongestWord = function ({ string }) {
    return string.split(' ').reduce((longest, word) => 
        word.length > longest.length ? word : longest
    );
};

// 4. Деструктуризація зі значенням за замовчуванням
const formatString = function ({ string, maxLength = 40 }) {
    const { length } = string; // дістаємо length з рядка
    return length > maxLength ? string.slice(0, maxLength) + '...' : string;
};

// 5.
const checkForSpam = function ({ message }) {
    const normalized = message.toLowerCase();
    return ['spam', 'sale'].some(word => normalized.includes(word));
};

// 6.
let input;
const numbers = [];

const processInput = () => {
    while ((input = prompt('Введіть число')) !== null) {
        const number = Number(input);
        !Number.isNaN(number) ? numbers.push(number) : alert('Було введено не число');
    }
};

// 7. 
const logins = ['mgoz', 'kizq', 'poly1scute', 'aj4x3']; 

const isLoginValid = function (login) {
  const { length } = login; // Деструктуризація
  return length >= 4 && length <= 16;
};

const isLoginUnique = function (allLogins, login) {
  return !allLogins.includes(login);
};

// Передаємо параметри у вигляді об'єкта
const addLogin = function ({ allLogins, login }) {
  if (!isLoginValid(login)) return 'Помилка! Логін повинен бути від 4 до 16 символів';
  if (!isLoginUnique(allLogins, login)) return 'Такий логін уже використовується!';

  allLogins.push(login);
  return 'Логін успішно доданий!';
};