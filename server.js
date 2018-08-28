const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());


app.set('port', process.env.PORT || 3000);

app.get('/api/v1/groups', (request, response) => {
  database('breed-groups').select()
  .then((groups) => {
    response.status(200).json(groups)
  })
  .catch((error) => {
    response.status(500).json({ error })
  })
})

app.get('/api/v1/breeds', (request, response) => {
  database('breeds').select()
    .then((breeds) => {
      response.status(200).json(breeds)
    })
    .catch((error) => {
      response.status(500).json({ error })
    })
})

app.listen(app.get('port'), () => {
  console.log(`BYOB Server is running on ${app.get('port')}`)
})