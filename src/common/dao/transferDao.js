const transferModel = require('../models/transferModel')

/**
 * function will get transfer object from db.
 * @property {object} query- match condition
 * @returns {transferModel}
 */
const getTransferInstances = async (query) =>
  transferModel.find(query).sort({ createdAt: 1 })

const updateTransferInstance = async (query, update) =>
  transferModel.findOneAndUpdate(query, update, { new: true })

const getLastTransferInstance = async (query) =>
  transferModel.find(query).sort({ createdAt: -1 }).limit(1)

const deletetransferInstances = async (query) =>
  transferModel.deleteMany(query)

module.exports = {
  getTransferInstances,
  updateTransferInstance,
  getLastTransferInstance,
  deletetransferInstances
}
