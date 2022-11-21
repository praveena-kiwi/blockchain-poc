const mongoose = require('mongoose')
const { GEO_LIST } = require('../constants/constant')
const { createOrUseExistingModel } = require('../utils/mongoUtil')

const { Schema } = mongoose

const gameSchema = new Schema(
  {
    title: { type: String, trim: true },
    categoryId: { type: Schema.Types.ObjectId, ref: 'gamecategory' },
    userId: { type: Schema.Types.ObjectId, ref: 'user' },
    description: { type: String, trim: true },
    image: { type: String, trim: true },
    imageGallery: [{ type: String }],
    publisher: { type: String },
    developer: { type: String },
    mau: { type: Number },
    registeredUsers: { type: Number },
    releaseYear: { type: String },
    geo: { type: String, default: 'global', enum: GEO_LIST },
    gender: { type: String, enum: ['male', 'female', '', 'both'] },
    ageId: [{ type: Schema.Types.ObjectId, ref: 'agecategory' }],
    genreId: { type: Schema.Types.ObjectId, ref: 'genre' },
    esrbId: { type: Schema.Types.ObjectId, ref: 'esrbcategory' },
    stateChangedOn: { type: Date },
    status: {
      type: String,
      enum: ['unpublished', 'published', 'engaged', 'deleted'],
      required: true
    },
    apiKey: { type: String },
    gameWebsite: { type: String },
    isUserActive: { type: Boolean, default: true },
    isDealPart: { type: Boolean, default: false },
    gameContent: {
      tobacco: { type: String, default: 'none' },
      alcohol: { type: String, default: 'none' },
      illegalDrugs: { type: String, default: 'none' },
      bloodGore: { type: String, default: 'none' },
      violence: { type: String, default: 'none' },
      humor: { type: String, default: 'none' },
      language: { type: String, default: 'none' },
      gambling: { type: String, default: 'none' },
      nudity: { type: String, default: 'none' },
      sexuality: { type: String, default: 'none' }
    }
  },
  { timestamps: {} }
)
const model = createOrUseExistingModel('game', gameSchema)

module.exports = model
