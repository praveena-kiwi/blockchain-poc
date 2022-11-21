const { GEO_LIST } = require('../constants/constant')

const mongoose = require('mongoose')
const { createOrUseExistingModel } = require('../utils/mongoUtil')
const { SUPPORTING_BLOCK_CHAINS } = require('../../config')

const { Schema } = mongoose

const revenueSchema = new Schema(
  {
    price: { type: Number },
    minPrice: { type: Number },
    maxPrice: { type: Number },
    impression: { type: Number },
    unit: { type: Number },
    dealId: { type: Schema.Types.ObjectId, ref: 'deal' },
    dealType: {
      type: String,
      required: true,
      enum: ['game-product', 'asset-brand', 'prop-brand']
    },
    productId: { type: Schema.Types.ObjectId, ref: 'product', index: true },
    gameId: { type: Schema.Types.ObjectId, ref: 'game' },
    gamePublisherId: { type: Schema.Types.ObjectId, ref: 'user' },
    brandId: { type: Schema.Types.ObjectId, ref: 'user' },
    assetId: { type: Schema.Types.ObjectId, ref: 'asset' },
    propId: { type: Schema.Types.ObjectId, ref: 'prop' },
    geo: { type: String, enum: [...GEO_LIST, ''] },
    gamePlayerId: { type: Schema.Types.ObjectId, ref: 'gameplayer' },
    isWithdrawnToExternal: { type: Boolean },
    originalGamePlayerId: { type: Schema.Types.ObjectId, ref: 'gameplayer' },
    brandShare: { type: Number },
    gamePublisherShare: { type: Number },
    geerShare: { type: Number },
    purchaseDate: {
      type: Date
    },
    rank: { type: Number, default: 0 },
    totalQuantity: { type: Number, default: 0 },
    isBlockChainUpdated: { type: Boolean, default: false },
    monetized: { type: Boolean },
    assetsCount: { type: Number },
    daysRegistered: { type: Number } /** Number of days registered */,
    transactionHash: { type: String },
    tokenID: { type: String },
    isRevertedDeal: { type: Boolean, default: false },
    contractAddressInfoId: {
      type: Schema.Types.ObjectId,
      ref: 'smartContract'
    },
    onDemand: { type: Boolean, default: false },
    stage: {
      type: String,
      default: 'pending',
      enum: ['pending', 'processing', 'completed']
    },
    metadataURI: { type: String },
    rewardURI: { type: String },
    isLocked: { type: Boolean, default: false },
    blockchainName: {
      type: String,
      default: 'palm',
      enum: SUPPORTING_BLOCK_CHAINS
    }
  },
  { timestamps: {} }
)

const model = createOrUseExistingModel('revenue', revenueSchema)
module.exports = model
