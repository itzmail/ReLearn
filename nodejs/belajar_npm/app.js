const validator = require('validator');
const chalk = require('chalk');

console.log(`apakah ini email : ${validator.isEmail('ismail@gmail.com')}`);
console.log(`apakah ini noHP indonesia ${validator.isMobilePhone('0802123123', 'id-ID')}`);
console.log(`apakah ini numeric : ${validator.isNumeric('01923019238')}`);

console.log(chalk.black.bgBlue.italic('Mantap jiwa'));
