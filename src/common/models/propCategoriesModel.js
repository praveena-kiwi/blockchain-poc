const mongoose = require('mongoose')

const { Schema } = mongoose

const propCategoriesSchema = new Schema(
  {
    value: { type: String },
    name: { type: String },
    status: {
      type: String,
      enum: ['active', 'inactive'],
      default: 'active'
    },
    userType: { type: String, enum: ['game_publisher'] }
  },
  { timestamps: {} }
)

module.exports = mongoose.model(
  'propCategories',
  propCategoriesSchema,
  'propCategories'
)
