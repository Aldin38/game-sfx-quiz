const express = require('express');
var cors = require('cors');
const quiz = require('./quiz')

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.use(
  express.json({
    limit: '1kb',
    parameterLimit: 2
  })
)

app.get('/api/sounds', (_, res) => {
  const allSounds = Object.values(quiz.sounds).map(({ id, order }) => ({ id, order }));
  let randomSounds = [];

  for(i = 0; i < 6; i++) {
    const randomEntry = allSounds[Math.floor(Math.random() * allSounds.length)]
    randomSounds.push(randomEntry)
    allSounds.splice(allSounds.indexOf(randomEntry), 1)
  }
  
  return res.send(randomSounds)
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

// check if in production
if (process.env.NODE_ENV === 'production') {
  // static folder
  app.use(express.static(__dirname = '/public/'));
  // handle SPA
  app.get(/.*/, (_, res) => res.sendFile(__dirname = '/public/index.html'));
}

app.listen(PORT, () =>
  console.log(`--- Quiz listening at http://localhost:${PORT} ---`)
)