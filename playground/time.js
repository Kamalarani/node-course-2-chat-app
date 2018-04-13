
var moment = require('moment');

/*var date = moment();
console.log(date.format('Do-MMM-YYYY'));
console.log("TOday's Day is: " ,date.format('dddd'));
console.log("TOday's Time is: " ,date.format('LTS'));
console.log(date.format('hh:mm A'));*/

/*var date = new Date();
console.log(date.getMonth());*/

var someTimestamp = moment().valueOf();
console.log(someTimestamp);

var createdAt = 1234;
var date = moment(createdAt);
console.log(date.format('h:mm a'));
