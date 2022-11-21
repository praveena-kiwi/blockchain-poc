const mongoose = require('mongoose')

const { Schema } = mongoose

const productCategoriesSchema = new Schema(
  {
    value: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    status: { type: String, enum: ['active', 'inactive'], default: 'active' },
    userType: { type: String, enum: ['brand'] }
  },
  { timestamps: {} }
)

module.exports = mongoose.model(
  'productCategories',
  productCategoriesSchema,
  'productCategories'
)
