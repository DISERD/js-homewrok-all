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