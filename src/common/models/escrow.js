const mongoose = require('mongoose')
const { createOrUseExistingModel } = require('../utils/mongoUtil')
const { Schema } = mongoose

const escrowSchema = new Schema(
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
    escrowDate: {
      type: Date
    }
  },
  { timestamps: {} }
)

const model = createOrUseExistingModel('escrow', escrowSchema)
module.exports = model
