const Maybe = require('crocks/Maybe')

const { inc, upper } = require('./utils')

const safe = (pred, val) => pred(val) ? Maybe.Just(val) : Maybe.Nothing()

const input = safe('number', 2)
const result = input.map(inc)
console.log(result)

const input2 = safe('string', 'bit')
const result2 = input2.map(upper)
console.log(result2)