const CronModel = require('../models/cronModel')

const getCronInstance = (query) => CronModel.findOne(query)

const updateCronInstance = (condition, updateQuery) =>
  CronModel.updateOne(condition, updateQuery)

const deleteCronInstance = query => CronModel.findOneAndDelete(query)

const createCronInstance = cronData => new CronModel(cronData).save()

const updateCronInstances = (condition, updateQuery) => CronModel.updateMany(condition, updateQuery)
const getCronInstances = (query) => CronModel.find(query).lean().exec()

module.exports = {
  getCronInstance,
  updateCronInstance,
  deleteCronInstance,
  createCronInstance,
  updateCronInstances,
  getCronInstances
}
