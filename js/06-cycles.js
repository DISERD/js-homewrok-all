let i = 1;
while (i <= 10) {
    console.log(i);
    i++;
}

for (let j = 2; j <= 20; j++) {
    if (j % 2 === 0) {
        continue;
    }
    console.log(j);
}

for (let k = 1; k <= 10; k++) {
    console.log(`7 * ${k} = ${7 * k}`);
}

const n = 15;
for (let m = 1; m < 100; m++) {
    if (m >= n) {
        break;
    }
    console.log(m);
}

let counter = 1;
while (counter <= 20) {
    if (counter % 3 === 0) {
        counter++;
        continue;
    }
    console.log(counter);
    counter++;
}