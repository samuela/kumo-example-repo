import express from 'express'

const port = process.env.PORT || 3000

const app = express()
const router = express.Router()
router.get('/', (_req, res) => {
  res.json({message: 'Hello World!'})
})
app.use('/', router)

app.listen(port, () => {
  return console.log(`server is listening on ${port}`)
})

// See https://github.com/nodejs/node/issues/4182
process.on('SIGINT', () => { process.exit() })
