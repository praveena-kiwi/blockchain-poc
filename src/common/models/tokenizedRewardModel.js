const mongoose = require('mongoose')
const { createOrUseExistingModel } = require('../utils/mongoUtil')

const { Schema } = mongoose

const tokenizedRewardSchema = new Schema(
  {
    rewardId: { type: Schema.Types.ObjectId, ref: 'reward' },
    gamePlayerId: { type: Schema.Types.ObjectId, ref: 'gameplayer' },
    couponCode: { type: String, trim: true },
    position: { type: Number },
    status: { type: String, default: 'locked', enum: ['unlocked', 'locked'] },
    unlockedAt: { type: Date },
    isBlockChainUnlockUpdated: { type: Boolean },
    iv: { type: String },
    content: { type: String },
    isIPFSNotResponding: { type: Boolean }
  },
  { timestamps: {} }
)

const model = createOrUseExistingModel('tokenizedReward', tokenizedRewardSchema)
module.exports = model
