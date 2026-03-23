// 1. 
const numbers = [5, 20, 15];
numbers[1] = 10;

// 2. 
const strings = ["Apple", "Banana", "Orange"];
strings.push("Grape");

//3. 
function getSum(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}

const myNumbers = [10, 20, 30, 40];
console.log(getSum(myNumbers));

// 4.
const items = [1, 2, 3, 4, 5];

for (let i = 0; i < items.length; i++) {
  console.log(items[i]);
}

// 5.
const words = ["JavaScript", "HTML", "CSS", "React", "Frontend"];

for (let i = 0; i < words.length; i++) {
  if (words[i].length > 5) {
    console.log(words[i]);
  }
}

// 6.
const values = [12, 45, 2, 89, 34, 67, 23, 90, 11, 5];
let max = values[0];

for (let i = 1; i < values.length; i++) {
  if (values[i] > max) {
    max = values[i];
  }
}

console.log(max);

// 7.
const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < data.length; i++) {
  if (data[i] % 2 === 0) {
    console.log(data[i]);
  }
}