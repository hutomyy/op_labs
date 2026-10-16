'use scrict';

const number = {
    'Alex': {phone: '+380967345901'},
    'Marcus': {phone: '+380683458029'},
    'Carl': {phone: "+380982134678"}
}
const findPhoneByName = (name) => {
    return number[name];
}

console.log(findPhoneByName('Carl'));
module.exports = { number, findPhoneByName };