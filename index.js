const Maybe = require('crocks/Maybe')

const { inc, upper, double } = require('./utils')

const number = val => typeof val === 'number'
const string = val => typeof val === 'string'
const safe = (pred, val) => pred(val) ? Maybe.Just(val) : Maybe.Nothing()

const input = safe(number, 2)
const result = input.map(inc)
console.log(result)

const input2 = safe(string, 'bit')
const result2 = input2.map(upper)
console.log(result2)

const doubleOfInc = n => {
  const safeNumber = safe(number, n)
  return safeNumber.map(inc).map(double)
}
const result3 = doubleOfInc(2)
console.log(result3)