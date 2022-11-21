const EscrowModel = require('../models/escrow')

/**
 * function will get transfer object from db.
 * @property {object} query- match condition
 * @returns {EscrowModel}
 */
const getEscrowInstance = async (query) => EscrowModel.findOne(query)

module.exports = {
  getEscrowInstance
}
