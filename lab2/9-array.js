'use strict';

const arr = [
    {name: 'Alex', phone: '+380967345901'},
    {name: 'Marcus', phone: '+380683458029'},
    {name: 'Carl', phone: "+380982134678"},
];

const findPhoneByName = (name) => {
    for (let i = 0; i < 5; i++) {
        if(arr[i].name == name) {
            return arr[i].phone;
        };
    };
};

console.log(findPhoneByName('Carl'));
module.exports = { arr, findPhoneByName }; 
