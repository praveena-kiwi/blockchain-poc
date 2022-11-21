const mongoose = require('mongoose')
const { SUPPORTING_BLOCK_CHAINS } = require('../../config')
const { SMC_CHANGE_STATUS } = require('../constants/constant')
const { createOrUseExistingModel } = require('../utils/mongoUtil')
const { Schema } = mongoose

const smartContractSchema = new Schema(
  {
    brandId: { type: Schema.Types.ObjectId, ref: 'user' },
    address: { type: String, required: true },
    contractOwner: { type: String, required: true },
    isOnTestnet: { type: Boolean, default: true },
    isInUse: { type: Boolean, default: false },
    abiFilePath: { type: String },
    abiFileName: { type: String },
    blockchainName: {
      type: String,
      default: 'palm',
      enum: SUPPORTING_BLOCK_CHAINS
    },
    blockchainInfo: {
      name: { type: String, required: true },
      chainId: { type: Number },
      rpcUri: { type: String },
      explorerURI: { type: String }
    },
    isAvailableForUse: { type: Boolean, default: true },
    adminApproval: { type: String, enum: Object.values(SMC_CHANGE_STATUS) }
  },
  {
    timestamps: {}
  }
)
const model = createOrUseExistingModel('smartContract', smartContractSchema)
module.exports = model
