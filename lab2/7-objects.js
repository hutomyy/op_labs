'use strict';

const fn = () => {
    const obj1 = {name: 'Yevhen'};
    let obj2 = {name: 'Vladyslav'};

    obj1.name = 'Zhenya';
    obj2.name = 'Vlad';

    obj2 = {name: 'Vladik'};

    console.log({obj1, obj2});
};

fn()
module.exports = {fn};