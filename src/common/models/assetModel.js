const mongoose = require('mongoose')
const { ASSET_STATUS } = require('../constants/constant')

const { Schema } = mongoose
const assetSchema = new Schema(
  {
    name: { type: String, trim: true },
    categoryId: { type: Schema.Types.ObjectId, ref: 'assetCategories' },
    userId: { type: Schema.Types.ObjectId, ref: 'user' },
    gameId: { type: Schema.Types.ObjectId, ref: 'game' },
    description: { type: String, trim: true },
    price: { type: Number },
    minUnits: { type: Number },
    maxUnits: { type: Number },
    totalQuantity: { type: Number },
    quantityUsed: { type: Number },
    image: { type: String, trim: true },
    imageGallery: [{ type: String }],
    releaseYear: { type: Number },
    geo: { type: String },
    status: {
      type: String,
      enum: [
        ASSET_STATUS.UNPUBLISHED,
        ASSET_STATUS.PUBLISHED,
        ASSET_STATUS.ENGAGGED,
        ASSET_STATUS.DELETED
      ],
      default: ASSET_STATUS.UNPUBLISHED
    },
    isDealPart: { type: Boolean, default: false },
    isUserActive: { type: Boolean, default: true }
  },
  { timestamps: {} }
)

module.exports = mongoose.model('asset', assetSchema)
