const dealModel = require('../models/dealModel')

const PROJECTION = {
  ALL: {},
  ID: {
    _id: 1
  },
  QUANTITY: {
    _id: 1,
    quantity: 1,
    quantityUsed: 1
  }
}
const getDealInstance = (query, projection) =>
  dealModel
    .findOne(query, projection ? PROJECTION[projection] : PROJECTION.ALL)
    .lean()
    .exec()

const updateDealInstance = async (query, update) =>
  dealModel.updateOne(query, update, { new: true })

const getDealPopulateInstance = async (query, param) =>
  dealModel.find(query).populate(param)

module.exports = {
  getDealInstance,
  updateDealInstance,
  getDealPopulateInstance
}
