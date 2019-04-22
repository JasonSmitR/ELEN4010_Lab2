'use strict'

const convertFhToC = function (fh) {
  return (fh - 32) * 5 / 9
}
const test1 = convertFhToC(32)
console.log(test1)
const test2 = convertFhToC(95)
console.log(test2)
const test3 = convertFhToC(-10)
console.log(test3)
