'use strict'

const methods = (iFace) => {
    const result = [];

    for (const key in iFace) {
        const value = iFace[key];
        if (typeof value === 'function') {
            result.push([key, value.length]);
        }
    }
    return result;
};

const iFace = {
    m1: x => [x],
    m2: function (x,y) {
        return [x, y];
    },
    m3(x, y, z) {
        return [x, y, z];
    },
    value: 123
};

console.log(methods(iFace));

module.exports = { methods };