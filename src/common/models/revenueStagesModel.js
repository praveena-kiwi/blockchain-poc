const mongoose = require('mongoose')

const { Schema } = mongoose

const { createOrUseExistingModel } = require('../utils/mongoUtil')

const stagesSchema = new Schema({
  error: { type: String },
  isCompleted: { type: Boolean },
  stage: { type: String, required: true },
  key: { type: String },
  value: { type: String }
}, {
  timestamps: {}
})

const revenueStagesSchema = new Schema({
  revenueId: { type: Schema.Types.ObjectId, ref: 'revenue', required: true },
  currentStage: { type: String, required: true },
  stages: [stagesSchema]
}, {
  timestamps: {}
})

const model = createOrUseExistingModel('revenueStages', revenueStagesSchema)

module.exports = model
