const mongoose = require('mongoose')
const { PROP_STATUS } = require('../constants/constant')

const { Schema } = mongoose

const propSchema = new Schema(
  {
    name: { type: String, trim: true },
    categoryId: { type: Schema.Types.ObjectId, ref: 'propCategories' },
    userId: { type: Schema.Types.ObjectId, ref: 'user' },
    gameId: { type: Schema.Types.ObjectId, ref: 'game' },
    description: { type: String, trim: true },
    price: { type: Number },
    impression: { type: Number },
    totalQuantity: { type: Number },
    quantityUsed: { type: Number },
    image: { type: String, trim: true },
    imageGallery: [{ type: String }],
    releaseYear: { type: Number },
    geo: { type: String },
    status: {
      type: String,
      enum: [
        PROP_STATUS.UNPUBLISHED,
        PROP_STATUS.PUBLISHED,
        PROP_STATUS.ENGAGGED,
        PROP_STATUS.DELETED
      ],
      default: PROP_STATUS.UNPUBLISHED
    },
    isDealPart: { type: Boolean, default: false },
    isUserActive: { type: Boolean, default: true }
  },
  { timestamps: {} }
)

module.exports = mongoose.model('prop', propSchema)
