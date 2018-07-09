const Maybe = require('crocks/Maybe')
const safe = require('crocks/Maybe/safe')
const prop = require('crocks/Maybe/prop')
const { compose, isNil, not } = require('ramda')

const { inc, upper, double } = require('./utils')

const number = val => typeof val === 'number'
const string = val => typeof val === 'string'
// const safe = (pred, val) => pred(val) ? Maybe.Just(val) : Maybe.Nothing()

const input = safe(number, 2)
const result = input.map(inc)
console.log(result) // Just 3

const input2 = safe(string, 'bit')
const result2 = input2.map(upper)
console.log(result2) // Just 'BIT'

const doubleOfInc = n => {
  const safeNumber = safe(number, n)
  return safeNumber.map(inc).map(double).option(0)
}
const result3 = doubleOfInc(2)
console.log(result3) // 6

const time = {
  date: 5,
  month: 7,
  year: 2018
}

//const isNotNil = compose(not, isNil)
//const date = safe(isNotNil, time.date)
// Or just use prop
const date = prop('date', time)

const nextDate = date.map(inc)
console.log(nextDate)

const era = prop('era', time)
const nextEra = era.map(inc)
console.log(nextEra) // Nothing
