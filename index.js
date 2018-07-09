const Maybe = require('crocks/Maybe')

const { inc, upper } = require('./utils')

const num = val => typeof val === 'number' ? Maybe.Just(val) : Maybe.Nothing()

const input = num(2)
const result = input.map(inc)
console.log(result)

const safe = val => typeof val === 'string' ? Maybe.Just(val) : Maybe.Nothing()

const input2 = safe('bit')
const result2 = input2.map(upper)
console.log(result2)