// 1. Перевірка заповнення двох текстових полів
let field1 = "Hello";
let field2 = "World";
if (field1 !== "" && field2 !== "") {
    console.log("Обидва поля заповнені");
} else {
    console.log("Не всі поля заповнені");
}

// 2. Сума двох чисел
let num1 = 7;
let num2 = 5;
let sum = num1 + num2;
if (sum > 10) {
    console.log("Сума більша за 10");
} else {
    console.log("Сума менша або дорівнює 10");
}

// 3. Перевірка наявності слова "JavaScript" у тексті
let text = "Я вивчаю JavaScript!";
if (text.includes("JavaScript")) {
    console.log("Текст містить слово JavaScript");
} else {
    console.log("Текст не містить слово JavaScript");
}

// 4. Перевірка, чи число в діапазоні від 10 до 20
let number = 15;
if (number > 10 && number < 20) {
    console.log("Число входить в діапазон від 10 до 20");
} else {
    console.log("Число не входить в діапазон від 10 до 20");
}

// 5. Перевірка полів ім'я, email, пароль
let name = "Dan";
let email = "dan@example.com";
let password = "secret1";
let isNameValid = name.length >= 3;
let atIndex = email.indexOf("@");
let dotIndex = email.indexOf(".", atIndex);
let isEmailValid = atIndex > 0 && dotIndex > atIndex + 1;
let isPasswordValid = password.length >= 6;
if (isNameValid && isEmailValid && isPasswordValid) {
    console.log("Перенаправлення на іншу сторінку");
} else {
    console.log("Помилка: неправильне заповнення");
}