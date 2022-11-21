const RevenueModel = require('../models/revenueModel')

/**
 * function will get revenue object from db.
 * @property {object} query- match condition
 * @returns {revenueModel}
 */
const getRevenueInstance = async (query) => RevenueModel.findOne(query)

/**
 * function to insert a new revenue doc.
 * @property {object} revenueObj- insertion object
 * @returns {RevenueModel}
 */
const createRevenueDoc = async (revenueObj) =>
  new RevenueModel(revenueObj).save()

const updateRevenueInstance = async (query, update) =>
  RevenueModel.findOneAndUpdate(query, update, { new: true })

/**
 * function will get revenue object from db.
 * @property {object} query- match condition
 * @returns {RevenueModel}
 */
const getRevenueInstanceWSort = async (query) =>
  RevenueModel.find(query).sort({ rank: 1 })

const getRevenueInstanceLean = async (query) =>
  RevenueModel.findOne(query).lean().exec()

/**
 * function will get revenue object from db.
 * @property {object} query- match condition
 * @returns {RevenueModel}
 */
const getRevenueInstances = async (query) => RevenueModel.find(query)
const removeRevenueDoc = async (revenueQuery) => RevenueModel.deleteOne(revenueQuery)
const countRevenueInstances = async (query) => RevenueModel.find(query).count()

const updateRevenueInstances = async (query, update) => RevenueModel.updateMany(query, update)

module.exports = {
  getRevenueInstance,
  createRevenueDoc,
  updateRevenueInstance,
  getRevenueInstanceWSort,
  getRevenueInstances,
  removeRevenueDoc,
  getRevenueInstanceLean,
  countRevenueInstances,
  updateRevenueInstances
}
