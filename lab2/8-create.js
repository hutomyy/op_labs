'use strict';

const createUser = (name, city) => {
    return {name, city};
};

console.log(createUser('Yevhen', 'Korosten'));
module.exports = {createUser};