var { isString } = require('util')
var tape = require('tape')
var createGen = require('.')

tape('gen', function (t) {
  var len = 8
  var gen = createGen(419, { length: len, encoding: 'hex' })
  var ids = []
  for (var id, lenx2 = len * 2, i = 0; i < 5; i++) {
    id = gen()
    ids.push(id)
    t.ok(isString(id), 'string')
    t.is(id.length, lenx2, 'length')
  }
  t.is(ids.length, new Set(ids).size, 'uniq')
  t.end()
})
