const mongoose = require('mongoose')
const { Schema } = mongoose
const nonceCountSchema = new Schema(
  {
    address: { type: String, trim: true },
    nonce: { type: Number }
  },
  { timestamps: {} }
)

module.exports = mongoose.model('nonceCount', nonceCountSchema)
