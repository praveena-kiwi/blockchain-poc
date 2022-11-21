const mongoose = require('mongoose')

const { Schema } = mongoose

const gameCategorySchema = new Schema(
  {
    value: { type: String, required: true },
    displayName: { type: String, required: true },
    status: {
      type: String,
      enum: ['active', 'inactive'],
      default: 'active'
    },
    userType: { type: String, enum: ['game_publisher'] }
  },
  { timestamps: {} }
)

module.exports = mongoose.model('gamecategory', gameCategorySchema)
