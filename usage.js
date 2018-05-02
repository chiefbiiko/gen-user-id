var createGen = require('.')

var gen = createGen(419, { length: 8, encoding: 'hex' })

for (var i = 0; i < 5; i++) console.log('user: ' + i + ' id: ' + gen())
