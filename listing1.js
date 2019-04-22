let sum = 0
for (let i = 0; i < 9; i++) {
  sum += 1
}
console.log(sum)
if (sum % 2 === 0) console.log('Sum is even') // equality operator is ===
else console.log('Sum is odd')
// Use === as this is type specific
// Double equal will convert values to the same type and comp
// I.e.
console.log('<int>5 == <string>5 with loose equality this is: ')
if (5 == '5') {
  console.log('true')
  console.log('Watch out for \'falsy values\' ')
}
