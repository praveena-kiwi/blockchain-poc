const express = require('express')
const { PORT } = require('./config')
const { databaseConnection } = require('./database')
const server = require('./server')
const http = require('http')
// const { init1 } = require('./services/sendRequest')
require('./common/models')
const app = express()
app.set('port', Number(PORT) || 8090)
app.disable('etag').disable('x-powered-by')
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
const httpserver = http.createServer(app)

databaseConnection().then(() => {
  server(app)

  httpserver
    .listen(Number(PORT) || 8025, () => {
      console.log('initate service call')
      require('./services/sendRequest')
    })
    .on('error', (err) => {
      process.exit(1)
    })
})

module.exports = app
