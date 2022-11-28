let cc1 = require('./a.node')
let cc2 = require('./b.node')
import cc3 = require('../es6/a')

console.log(cc1)
console.log(cc2)
cc3.default()
