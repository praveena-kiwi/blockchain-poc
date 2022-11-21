const GamePlayerModel = require('../models/gamePlayerModel')

const getGamePlayerInstance = async (query) =>
  GamePlayerModel.findOne(query)

const updateGamePlayerInstance = async (query, update) =>
  GamePlayerModel.findOneAndUpdate(query, update, { new: true })

module.exports = {
  getGamePlayerInstance,
  updateGamePlayerInstance
}
