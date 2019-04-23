'use strict'

let fs = require('fs')
let dolor = require('dolor')

fs.writeFile('./ELEN4010.txt', dolor.paragraphs(50), function (err) {
  if (err) { console.log('End write!') }
})
