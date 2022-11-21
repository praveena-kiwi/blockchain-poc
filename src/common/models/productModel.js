const mongoose = require('mongoose')
const { SUPPORTING_BLOCK_CHAINS } = require('../../config')
const { createOrUseExistingModel } = require('../utils/mongoUtil')

const { Schema } = mongoose

const productSchema = new Schema(
  {
    name: { type: String, trim: true },
    categoryId: { type: Schema.Types.ObjectId, ref: 'productCategories' },
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'user'
    },
    description: { type: String, trim: true },
    price: { type: Number },
    totalQuantity: { type: Number },
    quantityUsed: {
      type: Number,
      default: 0
    } /** Increment on each product sell */,
    image: {
      type: String,
      trim: true
    },
    imageGallery: [{ type: String }],
    imageGalleryRefIds: [
      {
        type: Schema.Types.ObjectId
      }
    ],
    imageRefId: {
      type: Schema.Types.ObjectId
    },
    releaseYear: { type: Number },
    geo: { type: String },
    status: {
      type: String,
      enum: ['unpublished', 'published', 'engaged', 'deleted', 'tokenized'],
      required: true
    },
    revenueShare: { type: String },
    isLimitedEdition: { type: Boolean },
    reward: Object,
    coMarketing: {
      marketType: {
        isWebsite: { type: Boolean },
        isBlog: { type: Boolean },
        isSocial: { type: Boolean },
        isPrint: { type: Boolean },
        isTV: { type: Boolean },
        others: { type: Boolean }
      },
      duration: {
        min: { type: Number },
        max: { type: Number }
      },
      spendRange: {
        min: { type: Number },
        max: { type: Number }
      }
    },
    exclusivity: {
      nonExclusive: { type: Boolean },
      brandExclusive: { type: Boolean },
      gameExclusive: { type: Boolean },
      bothExclusive: { type: Boolean },
      tillDate: { type: Date }
    },
    graphics: {
      name: { type: String },
      url: { type: String }
    },
    styleGuide: {
      name: { type: String },
      url: { type: String }
    },
    type: { type: String, default: 'product', enum: ['product', 'logo'] },
    isDealPart: { type: Boolean, default: false },
    isUserActive: { type: Boolean, default: true },
    released: { type: Boolean },
    forSecondaryMktPlace: { type: Boolean },
    data: { type: String, default: '' },
    category: { type: String, default: '' },
    isUploadedtoAws: { type: Boolean, default: true },
    isImageLarge: { type: Boolean, default: false },
    thumbnail: { type: String, default: '' },
    isReady: { type: Boolean, default: false },
    blockchainName: {
      type: String,
      default: 'palm',
      enum: SUPPORTING_BLOCK_CHAINS
    }
  },
  { timestamps: {} }
)

const model = createOrUseExistingModel('product', productSchema)
module.exports = model
