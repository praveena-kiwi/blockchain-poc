const dotEnv = require('dotenv')
dotEnv.config()

const env = process.env

module.exports = {
  DB_URL: env.MONGODB_URI,
  infuraUrl: env.infuraUrl,
  address : env.address,
  privateKey : env.privateKey
}
