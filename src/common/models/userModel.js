const { NUMBERS } = require('../constants/constant')
const { SUPPORTING_BLOCK_CHAINS } = require('../../config')
const { createOrUseExistingModel } = require('../utils/mongoUtil')

function createUserModel () {
  const mongoose = require('mongoose')

  const { Schema } = mongoose

  const userSchema = new Schema(
    {
      firstName: { type: String, required: true, trim: true },
      lastName: { type: String, required: true, trim: true },
      email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
      },
      password: { type: String },
      role: {
        type: String,
        required: true,
        lowercase: true,
        trim: true,
        enum: ['brand', 'game_publisher', 'system_admin']
      },
      gameTitle: { type: String, trim: true },
      companyName: { type: String, required: true, trim: true },
      companyWebsite: { type: String, required: true, trim: true },
      gameDeveloper: { type: Boolean },
      gamePublisher: { type: Boolean },
      genreId: { type: Schema.Types.ObjectId, ref: 'genre' },
      mau: { type: Number },
      sellsVirtualGood: { type: Boolean },
      adSupport: { type: Boolean },
      attributionPlatform: { type: String, trim: true },
      interests: [{ type: Schema.Types.ObjectId, ref: 'interest' }],
      comments: { type: String, trim: true },
      defaultCurrency: {
        type: String,
        default: 'usd',
        enum: ['usd', 'euro']
      },
      demoStatus: { type: Object },
      companyInfo: {
        profilePic: { type: String, default: '' },
        videoThumbnail: { type: String, default: '' },
        isVideo: { type: Boolean, default: false },
        logo: { type: String, default: '' },
        coverImage: { type: String, default: '' },
        description: { type: String, default: '' },
        address: { type: String, default: '' },
        address2: { type: String, default: '' },
        city: { type: String, default: '' },
        state: { type: String, default: '' },
        country: { type: String, default: '' },
        phoneNumber: { type: String, default: '' },
        countryCode: { type: String, default: '' },
        zipcode: { type: String, default: '' },
        designation: { type: Schema.Types.ObjectId, ref: 'designation' },
        companyFunction: { type: Schema.Types.ObjectId, ref: 'orgunit' },
        brandRequirements: {
          url: { type: String, default: '' },
          name: { type: String, default: '' }
        }
      },
      otherDetails: {
        industryId: [{ type: Schema.Types.ObjectId, ref: 'industry' }],
        geolocation: [
          {
            type: String,
            enum: [
              'asia',
              'europe',
              'antarctica',
              'africa',
              'north_america',
              'south_america',
              'australia',
              'global'
            ]
          }
        ],
        paymentMethodId: [
          { type: Schema.Types.ObjectId, ref: 'paymentmethod' }
        ],
        offeringId: [{ type: Schema.Types.ObjectId, ref: 'offering' }],
        gameCategoryId: [{ type: Schema.Types.ObjectId, ref: 'genre' }]
      },
      brandName: { type: String, trim: true },
      brandIndustry: { type: Schema.Types.ObjectId, ref: 'industry' },
      brandTargetAge: { type: Schema.Types.ObjectId, ref: 'agecategory' },
      brandTargetGender: {
        type: String,
        enum: ['male', 'female', '', 'all']
      },
      brandGeoReach: {
        type: String,
        trim: true,
        enum: [
          'asia',
          'europe',
          'antarctica',
          'africa',
          'north_america',
          'south_america',
          'australia',
          'global'
        ]
      },
      apiKey: { type: String },
      token: [{ type: String }],
      accessToken: [String],
      refreshToken: [String],
      contentAccessToken: { type: String },
      status: {
        type: String,
        enum: ['in-review', 'active', 'rejected', 'blocked', 'deactivated'],
        default: 'in-review'
      },
      gameExp: {
        hasWorked: { type: Boolean },
        gameCompanyName: { type: String }
      },
      isNewUser: { type: Boolean, default: true },
      rfaCount: { type: Number, default: 1 },
      isVerified: { type: Boolean, default: false },
      dealNotify: { type: Boolean, default: false },
      userRequestNotify: { type: Boolean, default: false },
      onboardingStep: {
        type: String,
        default: '1',
        enum: ['1', '2', '3', 'completed']
      },
      rejectReason: { type: String },
      termsConditionsStatus: { type: Boolean, default: false },
      emailToBeUpdated: { type: String, default: '' },
      otp: { type: Number, default: null },
      lastEmailUsed: { type: String, default: '' },
      agreementAcceptedAt: { type: Date },
      isProductCreated: {
        type: Boolean,
        default: false
      },
      isGameCreated: {
        type: Boolean,
        default: false
      },
      isEngagement: {
        type: Boolean,
        default: false
      },
      isNewIncommingRequest: {
        type: Boolean,
        default: false
      },
      lastSignInTime: { type: Date },
      lastLoggedOutAt: { type: Date },
      hasSecondaryMktPlace: { type: Boolean },
      hasPrimaryMktPlace: {
        type: Boolean,
        default: true
      },
      adminContentPassword: { type: String },
      marketPlaceData: {
        gamePublisherId: { type: Schema.Types.ObjectId, ref: 'user' },
        gameId: { type: Schema.Types.ObjectId, ref: 'game' }
      },
      contract: {
        address: { type: String },
        abiFilePath: { type: String },
        abiFileName: { type: String }
      },
      paymentCriteria: {
        primararyMaktPlace: {
          tillSale: { type: Number },
          tillSalePercent: { type: Number },
          afterPercent: { type: Number }
        },
        secondaryMaktPlace: {
          tillSale: { type: Number },
          tillSalePercent: { type: Number },
          afterPercent: { type: Number }
        }
      },
      autoSmartContractChange: { type: Boolean, default: false },
      blockchainName: {
        type: String,
        default: 'palm',
        enum: SUPPORTING_BLOCK_CHAINS
      },
      walletPublicAddress: [
        {
          address: { type: String },
          blockchainName: { type: String, enum: SUPPORTING_BLOCK_CHAINS }
        }
      ]
    },
    { timestamps: {} }
  )

  userSchema.index(
    { email: 'text', firstName: 'text', lastName: 'text' },
    { collation: { locale: 'en', strength: NUMBERS.TWO } }
  )

  return createOrUseExistingModel('user', userSchema)
}
const model = createUserModel()
module.exports = model
