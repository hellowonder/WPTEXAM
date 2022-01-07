const { selectMessages, addMessages } = require('./user')
const cors = require('cors')
const express = require('express')
const app = express()

app.use(express.json())
app.use(cors())

app.get('/getmessage', async (req, res) => {
  const list = await selectMessages()
  res.json(list)
})

app.post('/sendmessage', async (req, res) => {
  const data = req.body
  await addMessages(data)
  res.json({ Message: 'Messages posted successfully' })
})

app.listen(5000, () => {
  console.log('Server is started')
})
