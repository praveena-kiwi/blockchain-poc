const mongoose = require('mongoose')

const { Schema } = mongoose

const { createOrUseExistingModel } = require('../utils/mongoUtil')
const { SUPPORTING_BLOCK_CHAINS } = require('../../config')

const mintTransactionsSchema = new Schema({
  revenueId: { type: Schema.Types.ObjectId, ref: 'revenue', required: true },
  stage: { type: String, required: true },
  transactionHash: { type: String },
  blockchainName: {
    type: String,
    default: 'palm',
    enum: SUPPORTING_BLOCK_CHAINS
  },
  status: { type: String },
  isUpdated: { type: Boolean },
  nonce: { type: Number },
  fee: { type: String },
  gasPrice: { type: Number },
  tokenDataForURI: { type: Object }
}, {
  timestamps: {}
})

const model = createOrUseExistingModel('mintTransactions', mintTransactionsSchema)

module.exports = model
