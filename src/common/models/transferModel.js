const mongoose = require('mongoose')

const { createOrUseExistingModel } = require('../utils/mongoUtil')

const { Schema } = mongoose

const transferItemSchema = new Schema(
  {
    pricePaid: { type: Number },
    revenueId: { type: Schema.Types.ObjectId, ref: 'revenue' },
    gamePublisherId: { type: Schema.Types.ObjectId, ref: 'user' },
    gameId: { type: Schema.Types.ObjectId, ref: 'game' },
    brandId: { type: Schema.Types.ObjectId, ref: 'user' },
    currency: { type: String, enum: ['USD'] },
    fromPlayerId: { type: Schema.Types.ObjectId, ref: 'gameplayer' },
    toPlayerId: { type: Schema.Types.ObjectId, ref: 'gameplayer' },
    brandShare: { type: Number },
    gamePublisherShare: { type: Number },
    geerShare: { type: Number },
    productId: { type: Schema.Types.ObjectId, ref: 'product' },
    transferDate: {
      type: Date
    },
    isBlockChainUpdated: { type: Boolean, default: false },
    onDemand: { type: Boolean, default: false }
  },
  { timestamps: {} }
)
const model = createOrUseExistingModel('transferItem', transferItemSchema)
module.exports = model
