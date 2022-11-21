const smartContractModel = require('../models/smartContractModel')

const getSmartContractInstance = (query) => smartContractModel.findOne(query)

const getSmartContractInstances = (query, projection = {}) =>
  smartContractModel.find(query, projection).lean().exec()

module.exports = {
  getSmartContractInstance,
  getSmartContractInstances
}
