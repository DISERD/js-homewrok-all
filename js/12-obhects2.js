// 1
const user = {
    name: "Mango",
    age: 20,
    hobby: "html",
    premium: true,
};

user.mood = "happy";
user.hobby = "skydiving";
user.premium = false;

const keys = Object.keys(user);
for (const key of keys) {
    console.log(`${key}: ${user[key]}`);
}


// 2
const countProps = function(obj) {
    return Object.keys(obj).length;
};

console.log(countProps({})); 
console.log(countProps({ name: "Mango", age: 2 })); 
console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 })); 


// 3
const findBestEmployee = function(employees) {
    let bestEmployee = "";
    let maxTasks = 0;

    for (const [name, tasks] of Object.entries(employees)) {
        if (tasks > maxTasks) {
            maxTasks = tasks;
            bestEmployee = name;
        }
    }

    return bestEmployee;
};

console.log(findBestEmployee({ ann: 29, david: 35, helen: 1, lorence: 99 }));
console.log(findBestEmployee({ poly: 12, mango: 17, ajax: 4 }));


// 4
const countTotalSalary = function(employees) {
    let totalSalary = 0;

    for (const salary of Object.values(employees)) {
        totalSalary += salary;
    }

    return totalSalary;
};

console.log(countTotalSalary({}));
console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }));


// 5
const products = [
    { name: "Apple", price: 30, quantity: 3 },
    { name: "Lemon", price: 20, quantity: 5 },
    { name: "Peach", price: 50, quantity: 2 },
];

const getAllPropValues = function(arr, prop) {
    const values = [];

    for (const item of arr) {
        if (prop in item) {
            values.push(item[prop]);
        }
    }

    return values;
};

console.log(getAllPropValues(products, "name"));
console.log(getAllPropValues(products, "price"));
console.log(getAllPropValues(products, "category"));


// 6
const calculateTotalPrice = function(allProducts, productName) {
    for (const product of allProducts) {
        if (product.name === productName) {
            return product.price * product.quantity;
        }
    }

    return 0;
};

console.log(calculateTotalPrice(products, "Apple"));
console.log(calculateTotalPrice(products, "Lemon"));
console.log(calculateTotalPrice(products, "Peach"));
console.log(calculateTotalPrice(products, "Banana"));