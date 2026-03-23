let i = 1;
while (i <= 10) {
    console.log(i);
    i++;
}

for (let j = 2; j <= 20; j++) {
    if (j % 2 !== 0) {
        continue;
    }
    console.log(j);
}

const multiplier = 7;
for (let k = 1; k <= 10; k++) {
    console.log(`${multiplier} * ${k} = ${multiplier * k}`);
}

const n = 15;
let count = 1;
while (true) {
    if (count >= n) {
        break;
    }
    console.log(count);
    count++;
}

let m = 1;
while (m <= 20) {
    if (m % 3 === 0) {
        m++;
        continue;
    }
    console.log(m);
    m++;
}