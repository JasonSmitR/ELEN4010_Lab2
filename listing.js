const add = function (a, b) {
  return a + b
} // function expression assigned to 'add'
const result = add(2, 3)
console.log(result) // execute the function
const anotherAdd = add
console.log(anotherAdd(12, 4))// execute it again
