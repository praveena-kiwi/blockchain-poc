const MintTransactions = require('../models/mintTransactionsModel')

const addMintTransactionInstance = (data) => new MintTransactions(data).save()

const updateMintTransactionInstance = (query, update, options = {}) => MintTransactions.updateOne(query, update, { new: true, ...options })

const getMintTransactionInstance = (query) => MintTransactions.findOne(query).lean().exec()

const removeMintTransaction = (query) => MintTransactions.deleteOne(query)

module.exports = {
  addMintTransactionInstance,
  updateMintTransactionInstance,
  getMintTransactionInstance,
  removeMintTransaction
}
