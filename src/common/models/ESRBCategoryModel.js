const mongoose = require('mongoose')

const { Schema } = mongoose

const esrbCategorySchema = new Schema(
  {
    value: { type: String, required: true },
    displayName: { type: String, required: true },
    tooltip: { type: String, required: true },
    status: {
      type: String,
      enum: ['active', 'inactive'],
      default: 'active'
    },
    userType: { type: String, enum: ['game_publisher'] }
  },
  { timestamps: {} }
)

module.exports = mongoose.model('esrbcategory', esrbCategorySchema)
