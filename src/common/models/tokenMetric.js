const { TRANSACTION_TYPES } = require('../constants/constant')
const mongoose = require('mongoose')
const { SUPPORTING_BLOCK_CHAINS } = require('../../config')

const Schema = mongoose.Schema

const tokenMetricSchema = new mongoose.Schema(
  {
    tokenId: { type: String },
    revenueId: { type: Schema.Types.ObjectId, ref: 'revenue' },
    brandId: { type: Schema.Types.ObjectId, ref: 'user', required: true },
    blockchain: {
      type: String,
      default: 'palm',
      enum: SUPPORTING_BLOCK_CHAINS
    },
    blockNumber: { type: Number },
    gasPrice: { type: Number, required: true },
    gasUsed: { type: Number, required: true },
    fee: { type: Number, required: true },
    transactionType: {
      type: String,
      enum: Object.values(TRANSACTION_TYPES),
      required: true
    },
    event: { type: String },
    transactionTimestamp: { type: Date },
    transactionHash: { type: String },
    isMainNet: { type: Boolean, required: true },
    isOrphaned: { type: Boolean, default: false },
    gameplayerId: {
      _id: false,
      type: Schema.Types.ObjectId,
      ref: 'gameplayer'
    },
    from: { type: String },
    to: {
      type: String
    },
    metaData: { type: String },
    tokenData: { type: String },
    rewardData: { type: String },
    gameId: { type: Schema.Types.ObjectId, ref: 'game' },
    productId: { type: Schema.Types.ObjectId, ref: 'product' },
    dealId: { type: Schema.Types.ObjectId, ref: 'deal' }
  },
  {
    timestamps: {}
  }
)

const TokenMetric = mongoose.model('tokenmetric', tokenMetricSchema)

module.exports = TokenMetric
