// Налаштування для циклів згруповані в об'єкті
const loopConfigs = { 
    maxVal: 10, 
    limitVal: 20, 
    multiplier: 7, 
    nTarget: 15 
};
// Отримуємо значення через деструктуризацію
const { maxVal, limitVal, multiplier, nTarget } = loopConfigs;

// 1. 
let i = 1;
while (i <= maxVal) {
    console.log(i);
    i++;
}

// 2.
for (let j = 2; j <= limitVal; j++) {
    if (j % 2 !== 0) continue;
    console.log(j);
}

// 3.
for (let k = 1; k <= 10; k++) {
    console.log(`${multiplier} * ${k} = ${multiplier * k}`);
}

// 4.
let count = 1;
while (true) {
    if (count >= nTarget) break;
    console.log(count);
    count++;
}

// 5.
let m = 1;
while (m <= limitVal) {
    if (m % 3 === 0) {
        m++;
        continue;
    }
    console.log(m);
    m++;
}