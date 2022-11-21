const mongoose = require('mongoose')
const { DB_URL} = require('../config')

module.exports = async () => {
  try {
    await mongoose.connect(DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    console.log('db Connection success')
  } catch (error) {
    console.log('db Connection failure', error )
    process.exit(1)
  }
}
