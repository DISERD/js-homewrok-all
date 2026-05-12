// 1. Деструктуризація елементів масиву
const numbers = [5, 20, 15];
const [firstNum, , thirdNum] = numbers; // Пропуск другого елемента
const updatedNumbers = [firstNum, 10, thirdNum]; // Створення нового з оновленим 2-м елементом

// 2. Використання rest/spread
const strings = ["Apple", "Banana", "Orange"];
const updatedStrings = [...strings, "Grape"];

// 3. Деструктуризація перших елементів
const myNumbers = [10, 20, 30, 40];
const [n1, n2, n3, n4] = myNumbers;
console.log(n1 + n2 + n3 + n4); // 100

// 4. Часткова деструктуризація (оператор ...)
const items = [1, 2, 3, 4, 5];
const [firstItem, secondItem, ...restItems] = items;
console.log(`Перші: ${firstItem}, ${secondItem}. Решта: ${restItems}`);

// 5. Деструктуризація властивості length з рядка
const words = ["JavaScript", "HTML", "CSS", "React", "Frontend"];
for (const word of words) {
  const { length } = word; 
  if (length > 5) console.log(word);
}

// 6. 
const values = [12, 45, 2, 89, 34, 67, 23, 90, 11, 5];
const [firstVal, ...otherVals] = values; // Розпакування
let max = firstVal;
for (const val of otherVals) {
  if (val > max) max = val;
}
console.log("Максимум:", max);

// 7.
const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (const item of data) {
  if (item % 2 === 0) console.log(item);
}