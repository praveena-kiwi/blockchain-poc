module.exports = (app) => {
  app.post(
    'sendRequest',
    async (req, res) => {
      try {
        // eslint-disable-next-line no-console
       console.log('sending request')
        const responce = await sendRequest(req.body)
        return res.json(responce)
      } catch (err) {
        return res.status(err.status || SERVER_ERROR).json(err)
      }
    }
  )
}
