var seed = require('seed-bytes')

// init: any, opts.algo: string, opts.length: number, opts.encoding: string
function createGen (init = Math.random(), opts = { algo: 'alea', length: 8 }) {
  return function gen (next, len, enc) {
    return enc ? next(len).toString(enc) : next(len)
  }.bind(null, seed(init, opts.algo), opts.length, opts.encoding)
}

module.exports = createGen
