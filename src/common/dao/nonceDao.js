const NonceCountModel = require('../models/nonceCount')

/**
 * function will get transfer object from db.
 * @property {object} query- match condition
 * @returns {EscrowModel}
 */
const getNonceCount = async (query) => NonceCountModel.findOne(query)

const updateNonceCount= async (query, update) => {
    console.log('query--'query )
    console.log('update--'update )
  return NonceCountModel.updateOne(query, update, { new: true })
}

const createNonceCount = async (object) => new NonceCountModel(object).save()

module.exports = {
    getNonceCount,
    updateNonceCount,
    createNonceCount
}
