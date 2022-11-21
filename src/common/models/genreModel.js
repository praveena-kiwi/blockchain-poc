const mongoose = require('mongoose')

const { Schema } = mongoose

/** same as gameCategories */
const genreSchema = new Schema(
  {
    value: { type: String, required: true, unique: true },
    displayName: { type: String, required: true },
    tootip: { type: String, required: true },
    status: {
      type: String,
      enum: ['active', 'inactive'],
      default: 'active'
    },
    userType: { type: String, enum: ['brand', 'game_publisher', 'both'] },
    order_data: { type: Number }
  },
  { timestamps: {} }
)

module.exports = mongoose.model('genre', genreSchema)
