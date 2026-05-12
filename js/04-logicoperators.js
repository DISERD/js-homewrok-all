// 1. Перевірка заповнення двох текстових полів
const formInputs = { field1: "Hello", field2: "World" };

const { field1: login, field2: message, status = "active" } = formInputs;

if (login !== "" && message !== "") {
    console.log(`Обидва поля заповнені. Користувач: ${login}, Статус: ${status}`);
} else {
    console.log("Не всі поля заповнені");
}


// 2. Сума двох чисел
const numbers = { num1: 7, num2: 5 };
const { num1, num2 } = numbers; 
const sum = num1 + num2;

if (sum > 10) console.log("Сума більша за 10");
else console.log("Сума менша або дорівнює 10");


// 3. Перевірка наявності слова "JavaScript" у тексті
const data = { text: "Я вивчаю JavaScript!" };
const { text } = data;

if (text.toLowerCase().includes("javascript")) console.log("Текст містить слово JavaScript");
else console.log("Текст не містить слово JavaScript");


// 4. Перевірка, чи число в діапазоні від 10 до 20
const rangeConfig = { number: 15 };
const { number } = rangeConfig;

if (number > 10 && number < 20) console.log("Число входить в діапазон від 10 до 20");
else console.log("Число не входить в діапазон від 10 до 20");


// 5. Перевірка полів ім'я, email, пароль
const userProfile = { 
    name: "Dan", 
    email: "dan@example.com", 
    password: "secret1" 
};

// Деструктуризація всіх полів одночасно
const { name, email, password } = userProfile;

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