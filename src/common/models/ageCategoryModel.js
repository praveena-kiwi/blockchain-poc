const mongoose = require('mongoose')

const { Schema } = mongoose

const ageCategorySchema = new Schema(
  {
    value: { type: String, required: true },
    displayName: { type: String, required: true },
    status: {
      type: String,
      enum: ['active', 'inactive'],
      default: 'active'
    },
    userType: { type: String, enum: ['brand', 'game_publisher', 'both'] }
  },
  { timestamps: {} }
)

module.exports = mongoose.model('agecategory', ageCategorySchema)
