const express = require('express');
const quiz = require('./quiz')

const app = express();
const PORT = process.env.PORT || 3000;

app.use(
  express.json({
    limit: '1kb',
    parameterLimit: 2
  })
)

app.get('/api/sounds', (_, res) => {
  return res.json(Object.values(quiz.sounds).map(({ id, order }) => ({ id, order })))
})

app.post('/api/sounds/:id/answer', (req, res) => {
  const { id } = req.params
  const { answer } = req.body

  if (!id || !answer || !Object.keys(quiz.sounds).includes(id)) {
    console.error(
      `Bad request, id: ${id}, answer: ${answer}, sounds: ${quiz.sounds[id]}`
    )
    return res.sendStatus(400)
  }
  return res.json(quiz.checkAnswer(id, answer))
})

app.use('/api/sounds', express.static(`${__dirname}/sfx`))

app.listen(PORT, () =>
  console.log(`--- Quiz listening at http://localhost:${PORT} ---`)
)