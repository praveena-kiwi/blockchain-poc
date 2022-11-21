const RevenueStages = require('../models/revenueStagesModel')
const TokenMetric = require('../models/tokenMetric')

const addRevenueStageInstance = (data) => new RevenueStages(data).save()

const updateRevenueStageInstance = (query, update, options = {}) => RevenueStages.updateOne(query, update, { new: true, ...options })

const updateTokenMetricInstance = (query, update, options = {}) => TokenMetric.updateOne(query, update, { new: true, ...options })

const getRevenueStageInstance = (query, projection = {}) => RevenueStages.findOne(query, projection)

const getRevenueStageInstances = (query) => RevenueStages.find(query)

async function updateRevenueStages (
  revenueId,
  stage,
  keyValue,
  isCompleted,
  error
) {
  try {
    const query = { revenueId }
    const stageQuery = {
      stage,
      isCompleted,
      error,
      key: keyValue.key,
      value: keyValue.value
    }
    const updateQuery = {
      $set: {
        revenueId,
        currentStage: stage
      },
      $push: { stages: stageQuery }
    }

    return await updateRevenueStageInstance(query, updateQuery, {
      upsert: true
    })
  } catch (err) {
    logs(
      'error',
      '[updateRevenueStages]',
      `Failed to update revenue stages
    ${typeof err === 'string' ? err : JSON.stringify(err)}`
    )
  }
}
module.exports = {
  addRevenueStageInstance,
  updateRevenueStageInstance,
  getRevenueStageInstance,
  getRevenueStageInstances,
  updateRevenueStages,
  updateTokenMetricInstance
}
