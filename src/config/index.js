const dotEnv = require('dotenv')
dotEnv.config()

const env = process.env

module.exports = {
  DB_URL: isTestNet ? env.TEST_MONGODB_URI : env.MONGODB_URI,
  PROVIDER: env.provider,
  ADDRESS: '',
  PRIVATEKEY: ''
}
