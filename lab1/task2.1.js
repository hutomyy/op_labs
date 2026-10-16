'use strict';
//task 1
const array1 = [true, 'hello', 5, 12, -200, 400, false, false, true, "code", 'word', 500, 995];

const obj = {
    number: 0,
    string: 0,
    boolean: 0
}

for (const element of array1) {
    let type = typeof(element);
    obj[type]++;
}

console.dir(obj);