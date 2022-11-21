const mongoose = require('mongoose')
const { createOrUseExistingModel } = require('../utils/mongoUtil')

const { Schema } = mongoose

const rewardSchema = new Schema(
  {
    brandId: { type: Schema.Types.ObjectId, ref: 'user' },
    productId: { type: Schema.Types.ObjectId, ref: 'product' },
    gamePublisherId: { type: Schema.Types.ObjectId, ref: 'user' },
    gameId: { type: Schema.Types.ObjectId, ref: 'game' },
    dealId: { type: Schema.Types.ObjectId, ref: 'deal' },
    name: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    rewardDescription: { type: String, required: true, trim: true },
    expiryDate: { type: Date },
    redemptionLink: { type: String, trim: true },
    status: {
      type: String,
      default: 'nonTokenized',
      enum: ['nonTokenized', 'tokenized']
    },
    couponCode: { type: String, trim: true },
    couponName: { type: String, trim: true },
    type: { type: String, default: 'coupon', enum: ['coupon', 'giftCard'] },
    discount: { type: String }
  },
  { timestamps: {} }
)

const model = createOrUseExistingModel('reward', rewardSchema)
module.exports = model
