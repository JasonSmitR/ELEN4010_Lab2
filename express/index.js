'use strict'

let mainRouter = require('./mainRoutes')
let express = require('express')
let app = express()

app.use(mainRouter)

app.listen(80)
console.log('Express server is running on port 3000')
