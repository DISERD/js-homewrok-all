// 1. Перевірка заповнення двох текстових полів
const field1 = "Hello";
const field2 = "World";
if (field1 !== "" && field2 !== "") {
    console.log("Обидва поля заповнені");
} else {
    console.log("Не всі поля заповнені");
}

// 2. Сума двох чисел
const num1 = 7;
const num2 = 5;
const sum = num1 + num2;
if (sum > 10) {
    console.log("Сума більша за 10");
} else {
    console.log("Сума менша або дорівнює 10");
}

// 3. Перевірка наявності слова "JavaScript" у тексті
const text = "Я вивчаю JavaScript!";
if (text.toLowerCase().includes("javascript")) {
    console.log("Текст містить слово JavaScript");
} else {
    console.log("Текст не містить слово JavaScript");
}

// 4. Перевірка, чи число в діапазоні від 10 до 20
const number = 15;
if (number > 10 && number < 20) {
    console.log("Число входить в діапазон від 10 до 20");
} else {
    console.log("Число не входить в діапазон від 10 до 20");
}

// 5. Перевірка полів ім'я, email, пароль
const name = "Dan";
const email = "dan@example.com";
const password = "secret1";
const isNameValid = name.length >= 3;
const atIndex = email.indexOf("@");
const dotIndex = email.indexOf(".", atIndex);
const isEmailValid = atIndex > 0 && dotIndex > atIndex + 1;
const isPasswordValid = password.length >= 6;
if (isNameValid && isEmailValid && isPasswordValid) {
    console.log("Перенаправлення на іншу сторінку");
} else {
    console.log("Помилка: неправильне заповнення");
}