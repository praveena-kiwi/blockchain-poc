const GameModel = require('../models/gameModel')

/**
 * function will get game object from db.
 * @property {object} query- match condition
 * @returns {Promise} GameModel
 */
const getGameInstance = (query) => GameModel.findOne(query).lean().exec()

/**
 * function will check if game exists in db
 * @property {object} query- match condition
 * @returns {Promise} Boolean
 */
const isGameExists = (query) => GameModel.exists(query)

module.exports = {
  getGameInstance,
  isGameExists
}
