const express = require('express')
const { PORT } = require('./config')
const { databaseConnection } = require('./database')
const server = require('./server')
const http = require('http')
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
    })
    .on('error', (err) => {
      process.exit(1)
    })
})

module.exports = app
