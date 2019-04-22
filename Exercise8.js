'use strict'

let numbers = [2, 5, 89, 37.5, 61]

const squareFunc = function (inputNumber) {
  return inputNumber * inputNumber
}

const myMap = function (functionToApply, array) {
  let newArray = []
  array.forEach(function (element) {
    newArray.push(functionToApply(element))
  })
  return newArray
}
console.log(myMap(squareFunc, numbers))

const map1 = numbers.map(x => x * x)
console.log(map1)
