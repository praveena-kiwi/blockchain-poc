const mongoose = require('mongoose')
const { createOrUseExistingModel } = require('../utils/mongoUtil')
const { Schema } = mongoose
const { SUPPORTING_BLOCK_CHAINS } = require('../../config')

const gamePlayerSchema = new Schema(
  {
    gameUserId: [
      {
        gameId: { type: Schema.Types.ObjectId, ref: 'game' },
        inGameUserId: { type: String, index: true },
        _id: false
      }
    ] /** GameID+UserID. Same user can register via multiple games */,
    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true
    },
    password: { type: String, required: true } /** one-way hash */,
    isTempPlayer: { type: Boolean, default: false },
    isBlockChainUpdated: { type: Boolean, default: false },
    walletPublicAddress: [
      {
        address: { type: String },
        blockchainName: { type: String, enum: SUPPORTING_BLOCK_CHAINS }
      }
    ],
    blockchainName: {
      type: String,
      default: 'palm',
      enum: SUPPORTING_BLOCK_CHAINS
    }
  },
  { timestamps: {} }
)

const model = createOrUseExistingModel('gameplayer', gamePlayerSchema)
module.exports = model
