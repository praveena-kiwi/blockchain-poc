const mongoose = require('mongoose')

const { Schema } = mongoose

const assetCategoriesSchema = new Schema(
  {
    value: { type: String, required: true, unique: true },
    name: { type: String, required: true },
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
  'assetCategories',
  assetCategoriesSchema,
  'assetCategories'
)
