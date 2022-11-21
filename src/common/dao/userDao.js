const UserModel = require('../models/userModel')

const PROJECTION = {
  ALL: {},
  VIEW: {
    name: 1,
    email: 1,
    profile_picture: 1
  },
  USER_DETAILS: {
    password: 0,
    token: 0,
    rfaCount: 0,
    rejectReason: 0,
    updatedAt: 0,
    accessToken: 0,
    refreshToken: 0,
    apiKey: 0
  },
  USER_DETAILS_WITH_API_KEY: {
    password: 0,
    token: 0,
    rfaCount: 0,
    rejectReason: 0,
    updatedAt: 0,
    accessToken: 0,
    refreshToken: 0
  },
  LISTING: {
    firstName: 1,
    lastName: 1,
    email: 1,
    createdAt: 1,
    updatedAt: 1,
    companyName: 1,
    status: 1
  },
  BASIC: {
    status: 1,
    firstName: 1,
    otp: 1,
    emailToBeUpdated: 1
  },
  CONTENT_ACCESS: {
    adminContentPassword: 1
  },
  CONTRACT: {
    contract: 1
  },
  ID: {
    _id: 1
  }
}

/**
 * get single object of user.
 * @property {object} userInfo- match condition
 * @property {object} condition- update condition
 * @returns {object} user instance on success and error on failure
 */
const getUserInstance = async (query, projection) =>
  UserModel.findOne(
    query,
    projection ? PROJECTION[projection] : PROJECTION.ALL
  )
const getUsers = (query, projection = {}) =>
  UserModel.find(query, projection ? PROJECTION[projection] : PROJECTION.ALL)
    .lean()
    .exec()
const updateUserInstance = async (query, update) =>
  UserModel.findOneAndUpdate(query, update, { new: true })

module.exports = {
  getUserInstance,
  updateUserInstance,
  getUsers
}
