const mongoose = require('mongoose')
const { createOrUseExistingModel } = require('../utils/mongoUtil')
const { Schema } = mongoose

const cronSchema = new Schema({
  name: { type: String, required: true, unique: true },
  isRunning: { type: Boolean, required: true, default: false },
  isPaused: { type: Boolean, default: false },
  hasErrors: { type: Boolean, default: false },
  error: { type: String },
  status: { type: String }
}, {
  timestamps: {}
})
const model = createOrUseExistingModel('cron', cronSchema)
module.exports = model
