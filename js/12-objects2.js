// 1
const user = { name: "Mango", age: 20, hobby: "html", premium: true };
user.mood = "happy";

for (const [key, value] of Object.entries(user)) {
    console.log(`${key}: ${value}`);
}


// 2
const countProps = function(obj) {
    return Object.keys(obj).length;
};


// 3
const findBestEmployee = function(employees) {
    let bestEmployee = "";
    let maxTasks = 0;

    // Деструктуризація прямо у циклі
    for (const [name, tasks] of Object.entries(employees)) {
        if (tasks > maxTasks) {
            maxTasks = tasks;
            bestEmployee = name;
        }
    }
    return bestEmployee;
};


// 5
const products = [
    { name: "Apple", price: 30, quantity: 3 },
    { name: "Lemon", price: 20, quantity: 5 },
    { name: "Peach", price: 50, quantity: 2 },
];

const getAllPropValues = function(arr, prop) {
    const values = [];

    for (const item of arr) {
        const { [prop]: propValue } = item; 
        if (propValue !== undefined) {
            values.push(propValue);
        }
    }
    return values;
};