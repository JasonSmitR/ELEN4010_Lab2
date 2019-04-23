'use strict'

let mainRouter = require('./mainRoutes')
let express = require('express')
let app = express()

app.use(mainRouter)

let port = process.env.PORT
app.listen(port)
console.log('Express server is running on port 3000')
