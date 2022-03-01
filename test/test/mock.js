// const createAccount = require('../src/createAccount/index');
const getAccountInfo = require('../src/getAccountInfo/index');
const mock = require('./mock.json');

// const createUserEvent = {
//     body: JSON.stringify(mock.createUser)
// }

// createUser.handler(createUserEvent).then(console.log);

getAccountInfo.handler(mock.getAccountInfo).then(console.log)