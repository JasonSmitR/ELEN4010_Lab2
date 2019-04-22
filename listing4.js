'use strict'

const add = function (a = 0, b = 0) {
  return a + b
} // function expression assigned to 'add'
// Default here is 0 for input values

const result = add(2, 3)
console.log(result) // execute the function
const anotherAdd = add
console.log(anotherAdd(12, 4))// execute it again
let result2 = add(2, 4)
console.log(result2)
result2 = add(5, 5)
console.log(result2)
