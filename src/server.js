const cors = require('cors')

const { cronRoutes } = require('./api')

module.exports = async (app) => {
  app.use(cors())

  cronRoutes(app)
}
