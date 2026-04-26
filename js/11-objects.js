// 1. 
const bankAccount = {
    ownerName: "Олександр Коваленко",
    accountNumber: "UA1234567890",
    balance: 1000,

    deposit() {
        const amount = parseFloat(prompt("Введіть суму для поповнення:"));
        if (amount > 0) {
            this.balance = this.balance + amount;
            alert("Рахунок поповнено! Ваш залишок: " + this.balance + " грн.");
        } else {
            alert("Введено некоректну суму.");
        }
    },

    withdraw() {
        const amount = parseFloat(prompt("Введіть суму для зняття:"));
        if (amount > 0 && amount <= this.balance) {
            this.balance = this.balance - amount;
            alert("Кошти знято! Ваш залишок: " + this.balance + " грн.");
        } else {
            alert("Недостатньо коштів або невірна сума.");
        }
    }
};

const action = confirm("Бажаєте поповнити рахунок? (ОК - поповнити, Скасувати - зняти)");
if (action === true) {
    bankAccount.deposit();
} else {
    const wantWithdraw = confirm("Бажаєте отримати готівку?");
    if (wantWithdraw === true) {
        bankAccount.withdraw();
    }
}


// 2. 
const weather = {
    temperature: 0,
    humidity: 65,
    windSpeed: 5,

    isCold() {
        const input = prompt("Яка зараз температура?");
        this.temperature = parseFloat(input);
        
        if (this.temperature < 0) {
            return true;
        } else {
            return false;
        }
    }
};

// check result
if (weather.isCold() === true) {
    console.log("температура нижче 0 градусів Цельсія");
} else {
    console.log("температура вище або рівна 0 градусів Цельсія");
}


// 3. 
const user = {
    name: "Дмитро",
    email: "test@mail.com",
    password: "123",

    login(inputEmail, inputPassword) {
        if (inputEmail === this.email && inputPassword === this.password) {
            return "Ласкаво просимо!";
        } else {
            return "Помилка входу!";
        }
    }
};

// check
const userEmail = prompt("Введіть email:");
const userPass = prompt("Введіть пароль:");
console.log(user.login(userEmail, userPass));


// 4. 
const movie = {
    title: "Inception",
    director: "Christopher Nolan",
    year: 2010,
    rating: 8.8,

    isGoodRating() {
        if (this.rating > 8) {
            return true;
        } else {
            return false;
        }
    }
};

// console
console.log("Назва:", movie.title);
console.log("Режисер:", movie.director);
console.log("Рік:", movie.year);
console.log("Рейтинг:", movie.rating);
console.log("Чи рейтинг вище 8:", movie.isGoodRating());