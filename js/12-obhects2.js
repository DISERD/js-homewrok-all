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

for (const key of Object.keys(user)) {
    console.log(`${key}: ${user[key]}`);
}


// 2

function countProps(obj) {
    return Object.keys(obj).length;
}

// check result
console.log(countProps({})); 
console.log(countProps({ name: "Mango", age: 2 })); 
console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 })); 


// 3

function findBestEmployee(employees) {
    let bestEmployee = "";
    let maxTasks = 0;

    for (const [name, tasks] of Object.entries(employees)) {
        if (tasks > maxTasks) {
            maxTasks = tasks;
            bestEmployee = name;
        }
    }

    return bestEmployee;
}

// check result
console.log(
    findBestEmployee({
        ann: 29,
        david: 35,
        helen: 1,
        lorence: 99,
    })
);

console.log(
    findBestEmployee({
        poly: 12,
        mango: 17,
        ajax: 4,
    })
);


// 4

function countTotalSalary(employees) {
    let totalSalary = 0;

    for (const salary of Object.values(employees)) {
        totalSalary += salary;
    }

    return totalSalary;
}

// check result
console.log(countTotalSalary({}));

console.log(
    countTotalSalary({
        mango: 100,
        poly: 150,
        alfred: 80,
    })
);


// 5

function getAllPropValues(arr, prop) {
    const values = [];

    for (const item of arr) {
        if (prop in item) {
            values.push(item[prop]);
        }
    }

    return values;
}

// check result
const products = [
    { name: "Apple", price: 30, quantity: 3 },
    { name: "Lemon", price: 20, quantity: 5 },
    { name: "Peach", price: 50, quantity: 2 },
];

console.log(getAllPropValues(products, "name"));
console.log(getAllPropValues(products, "price"));
console.log(getAllPropValues(products, "category"));


// 6

function calculateTotalPrice(allProducts, productName) {
    for (const product of allProducts) {
        if (product.name === productName) {
            return product.price * product.quantity;
        }
    }

    return 0;
}

// check result
const allProducts = [
    { name: "Apple", price: 30, quantity: 3 },
    { name: "Lemon", price: 20, quantity: 5 },
    { name: "Peach", price: 50, quantity: 2 },
];

console.log(calculateTotalPrice(allProducts, "Apple"));
console.log(calculateTotalPrice(allProducts, "Lemon"));
console.log(calculateTotalPrice(allProducts, "Peach"));
console.log(calculateTotalPrice(allProducts, "Banana"));