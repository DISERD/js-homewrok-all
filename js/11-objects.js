// 1. 
const bankAccount = {
    ownerName: "Олександр Коваленко",
    accountNumber: "UA1234567890",
    balance: 1000,

    deposit({ amount }) {
        if (amount > 0) {
            this.balance += amount;
            alert(`Рахунок поповнено! Ваш залишок: ${this.balance} грн.`);
        }
    },
    withdraw({ amount }) {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            alert(`Кошти знято! Ваш залишок: ${this.balance} грн.`);
        }
    }
};

// 2. 
const weather = {
    temperature: 0,
    humidity: 65,
    windSpeed: 5,

    isCold() {
        const { temperature } = this; 
        return temperature < 0;
    }
};


// 3. 
const user = {
    name: "Дмитро",
    email: "test@mail.com",
    password: "123",

    login({ inputEmail, inputPassword }) {
        const { email, password } = this; 
        
        if (inputEmail === email && inputPassword === password) {
            return "Ласкаво просимо!";
        } else {
            return "Помилка входу!";
        }
    }
};


// 4. 
const movie = {
    title: "Inception",
    director: "Christopher Nolan",
    year: 2010,
    rating: 8.8,

    isGoodRating() {
        const { rating } = this; 
        return rating > 8;
    }
};

const { title, director, year, rating } = movie; 
console.log("Назва:", title);
console.log("Режисер:", director);