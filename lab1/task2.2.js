'use strict';
//task 2
const array1 = [true, 'hello', 5, 12, -200, 400, false, false, true, "code", 'word', 500, 995];

const obj = {};

for(const element of array1) {
    const type = typeof element;
    if (obj[type] == undefined) 
        obj[type] = 1;
    else
        obj[type]++;
    
}

console.dir(obj);
