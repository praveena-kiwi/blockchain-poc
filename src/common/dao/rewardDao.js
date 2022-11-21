const RewardModel = require('../models/rewardModel')
const TokendRewardModel = require('../models/tokenizedRewardModel')

/**
 * function will get reward object from db.
 * @property {object} query- match condition
 * @returns {RewardModel}
 */
const getRewardInstance = async (query) => RewardModel.findOne(query)

const updateRewardInstance = async (query, update) =>
  RewardModel.findOneAndUpdate(query, update, { new: true })

/**
 * Creates a new tokenized reward document.
 * @param {*} rewardData
 * @returns {TokendRewardModel}
 */
const createTokendReward = async (rewardData) =>
  new TokendRewardModel(rewardData).save()

const getTokendRewardInstances = async (query) => TokendRewardModel.find(query)

/**
 * function will get reward object from db.
 * @property {object} query- match condition
 * @returns {TokendRewardModel}
 */
const getTokendRewardInstance = async (query) =>
  TokendRewardModel.findOne(query)

const updateTokendRewardInstance = async (query, update) =>
  TokendRewardModel.findOneAndUpdate(query, update, { new: true })

module.exports = {
  getRewardInstance,
  createTokendReward,
  getTokendRewardInstance,
  updateTokendRewardInstance,
  updateRewardInstance,
  getTokendRewardInstances
}
