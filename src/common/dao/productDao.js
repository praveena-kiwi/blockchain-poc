const productModel = require('../models/productModel')
/**
* function will get product object from db.
* @property {object} query- match condition
* @returns {dealModel}
*/
const getProductInstance = async (query, projection = {}) =>
  productModel.findOne(query, projection).lean().exec()

const updateProductInstance = async (query, update) =>
  productModel.updateOne(query, update, { new: true })

/**
 * function will get product object from db populated.
 * @property {object} query- match condition
 * @returns {dealModel}
 */
const getPopulatedProduct = async (query, projection, populate) =>
  productModel.findOne(query, projection).populate(populate).lean().exec()

module.exports = {
  getProductInstance,
  updateProductInstance,
  getPopulatedProduct
}
