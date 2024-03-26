// ./01loadash/lodash-es.js

var _ = require('lodash');

const arr = [1,1,1,2,2,1,1,4,4,3,2];
const uniqueArr = _.uniqBy(arr);

console.log(uniqueArr);