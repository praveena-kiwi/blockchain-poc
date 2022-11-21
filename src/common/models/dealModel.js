const {
  GEO_LIST,
  DEAL_STATUS,
  DEAL_TYPE,
  UPLOAD_ASSETS_STATUS
} = require('../constants/constant')

const mongoose = require('mongoose')
const { createOrUseExistingModel } = require('../utils/mongoUtil')

const { Schema } = mongoose

/** Created when deal is complete */
const dealSchema = new Schema(
  {
    productId: { type: Schema.Types.ObjectId, ref: 'product' },
    gameId: { type: Schema.Types.ObjectId, ref: 'game' },
    gamePublisherId: { type: Schema.Types.ObjectId, ref: 'user' },
    brandId: { type: Schema.Types.ObjectId, ref: 'user' },
    assetId: { type: Schema.Types.ObjectId, ref: 'asset' },
    propId: { type: Schema.Types.ObjectId, ref: 'prop' },
    rewardId: { type: Schema.Types.ObjectId, ref: 'reward' },
    fromId: { type: Schema.Types.ObjectId, ref: 'user' },
    toId: { type: Schema.Types.ObjectId, ref: 'user' },
    brandShare: { type: Number },
    gamePublisherShare: { type: Number },
    geerShare: { type: Number },
    dealType: {
      type: String,
      enum: [
        DEAL_TYPE.GAME_PRODUCT,
        DEAL_TYPE.ASSET_BRAND,
        DEAL_TYPE.PROP_BRAND
      ]
    },
    status: {
      type: String,
      enum: [
        DEAL_STATUS.ACTIVE,
        DEAL_STATUS.DONE,
        DEAL_STATUS.REJECTED,
        DEAL_STATUS.ADMIN_REJECTED,
        DEAL_STATUS.PROCESSING,
        DEAL_STATUS.ENGAGGED,
        DEAL_STATUS.ADMIN_COMPLETED,
        DEAL_STATUS.CANCELLED,
        DEAL_STATUS.NEEDS_REVISION,
        DEAL_STATUS.PUBLISHER_REVISED
      ],
      default: DEAL_STATUS.ENGAGGED
    },
    geo: [{ type: String, enum: GEO_LIST }],
    revenue: [{ type: Schema.Types.ObjectId, ref: 'revenue' }],
    minPrice: { type: Number },
    maxPrice: { type: Number },
    quantity: { type: Number },
    quantityUsed: { type: Number, default: 0 },
    impression: { type: Number },
    unit: { type: Number },
    bid: { type: Number },
    message: { type: String },
    rejectReason: { type: String },
    acceptReason: { type: String },
    unread: { type: Boolean, default: true },
    notificationReceiver: [{ type: Schema.Types.ObjectId, ref: 'user' }],
    bidDirectAccept: { type: Boolean, default: false },
    releaseDate: { type: Date },
    reward: Object,
    rewardAchievement: { type: String },
    rewardDescription: { type: String },
    priceStatus: {
      type: String,
      enum: ['less', 'in-range', 'high'],
      default: 'in-range'
    },
    publisherCoMarketing: {
      type: {
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
    uploadedAssets: [
      {
        uri: { type: String, required: true },
        fileName: { type: String, required: true },
        type: { type: String, required: true },
        createdAt: { type: Date, required: true }
      }
    ],
    uploadedAssetsStatus: {
      type: String,
      required: false,
      enum: [
        UPLOAD_ASSETS_STATUS.UPLOADING,
        UPLOAD_ASSETS_STATUS.UPLOADED,
        UPLOAD_ASSETS_STATUS.FAILED,
        UPLOAD_ASSETS_STATUS.NOT_STARTED
      ],
      default: UPLOAD_ASSETS_STATUS.NOT_STARTED
    },
    intendedUseMessage: { type: String },
    revisionHistory: [
      {
        _id: false,
        message: { type: String },
        userId: { type: String },
        userDetails: Object,
        fromId: { type: String },
        toId: { type: String },
        dealData: Object,
        createdAt: { type: Date }
      }
    ],
    lastRevisionMessage: { type: String },
    lastRevisedAt: { type: Date },
    forSecondaryMktPlace: { type: Boolean }
  },
  { timestamps: {} }
)
const model = createOrUseExistingModel('deal', dealSchema)
module.exports = model
