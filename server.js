const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const environment = process.env.NODE_ENV || 'development';
const configuration = require('./knexfile')[environment];
const database = require('knex')(configuration);

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set('port', process.env.PORT || 3000);
app.set('secretKey', process.env.SECRET || 'jeremiahwasabullfrog');


const checkAuth = (request, response, next) => {
  const token = request.body.token || request.param('token') || request.headers['authorization'];

  if(token) {
    jwt.verify(token, app.get('secretKey'), ((error, decoded) => {
      if (error) {
        return reponse.status(403).json({error: 'Invalid token'})
      } else {
        if (decoded.admin) {
          next();
        } else {
          return response.status(403).json({ error: 'You must be an admin to hit this endpoint' });
        }
    }
  })
)} else {
    return response.status(403).json({error: 'You must have a token to view this endpoint'});
    };
};

app.get('/', (request, response) => {
  const token = jwt.sign({})
});

app.locals.title = 'BYOB Bitches';

app.get('/api/v1/groups', (request, response) => {
  database('breed_groups').select()
  .then((groups) => {
    response.status(200).json(groups)
  })
  .catch((error) => {
    response.status(500).json({ error })
  })
});

app.get('/api/v1/breeds', (request, response) => {
  database('dog_breeds').select()
    .then((breeds) => {
      response.status(200).json(breeds)
    })
    .catch((error) => {
      response.status(500).json({ error })
    })
});

app.get('/api/v1/groups/:id', (request, response) => {
  const { id } = request.params;

  database('breed_groups').where('id', id).select()
    .then(group => {
      if(group.length) {
        response.status(200).json({ group })
      } else {
        response.status(404).json({error: `Unable to find a breed group with the id: "${id}"`})
      }
    })
    .catch((error) => {
      response.status(500).json({ error })
    })
});

app.get('/api/v1/breeds/:id', (request, response) => {
  const { id } = request.params;

  database('dog_breeds').where('id', id).select()
    .then(breed => {
      if(breed) {
        response.status(200).json({ breed })
      } else {
        response.status(404).json({error: `Unable to find a breed with the id: "${id}"`})
      }
    })
    .catch((error) => {
      response.status(500).json({ error })
    })
});

app.post('/api/v1/groups', checkAuth, (request, response) => {
  const group = request.body;

  for (let requiredParams of [ 'group_name', 'description', 'breed_count']) {
    if (!group[requiredParams]) {
      return response
        .status(422)
        .json({error: `Expected format: {group_name: <STRING>, description: <TEXT>, breed_count: <INTEGER>. You are missing: "${requiredParams}"}`})
    }
    database('breed_groups').insert(group, 'id')
      .then(group => {
        response.status(201).json({ id: group[0] })
      })
      .catch(error => {
        response.status(500).json({ error })
      })
  }
});

app.post('/api/v1/breed', checkAuth, (request, response) => {
  const breed = request.body;

  for (let requiredParams of [ 'breed_name', 'life_span', 'bred_for', 'temperament', 'weight', 'height', 'lovable', 'group_id']) {
    if (!group[requiredParams]) {
      return response
        .status(422)
        .json({error: `Expected format: {breed_name: <STRING>, life_span: <STRING>, bred_for: <STRING>, temperament: <STRING>, weight: <STRING>, height: <STRING>, lovable: <BOOLEAN>, group_id: <INTEGER>. You are missing: "${requiredParams}"}`})
    }
    database('dog_breeds').insert(breed, 'id')
      .then(breed => {
        response.status(201).json({ id: breed[0] })
      })
      .catch(error => {
        response.status(500).json({ error })
      })
  }
});

app.delete('/api/v1/groups/:id', checkAuth, (request, response) => {
  const { id } = request.params;

  database('breed_groups').where('id', id).select()
    .then(group => {
      if (group) {
        database('breed_groups').where('id', id).del()
        .then(group => {
          response.status(204).send(`Resource: "${group}", id: "${id}" successfully deleted`)
        })
        .catch(error => {
          response.status(500).json({ error })
        })
      } else {
        response.status(404).json({error: `Unable to find breed group with id: "${id}"`})
      }
    })
    .catch(error => {
      response.status(500).json({ error })
    })
});

app.delete('/api/v1/breed/:id', checkAuth, (request, response) => {
  const { id } = request.params;

  database('dog_breeds').where('id', id).select()
    .then(breed => {
      if (breed) {
        database('dog_breeds').where('id', id).del()
        .then(breed => {
          response.status(204).send(`Resource: "${breed}", id: "${id}" successfully deleted`)
        })
        .catch(error => {
          response.status(500).json({ error })
        })
      } else {
        response.status(404).json({error: `Unable to find breed with id: "${id}"`})
      }
    })
    .catch(error => {
      response.status(500).json({ error })
    })
});

app.patch('/api/v1/groups/:id', checkAuth, (request, response) => {
  const groupUpdate = request.body;
  const { id } = request.params;

  console.log(groupUpdate, id)
  if (groupUpdate.group_name || groupUpdate.breed_count || groupUpdate.breed_description) {
    database('breed_groups').where('id', id).update(groupUpdate)
      .then(response => {
        response.status(200).json(groupUpdate);
      })
      .catch(error => {
        return response.status(500).json({ error });
      });
  } else {
    return response.status(422)
      .send('You do not have the correct parameters to complete this request');
  }
});

app.patch('/api/v1/breeds/:id', checkAuth, (request, response) => {
  const breedUpdate = request.body;
  const id = parseInt(request.params.id);
  console.log(breedUpdate, id)
  if (breedUpdate.breed_name || breedUpdate.life_span || breedUpdate.bred_for || breedUpdate.temperament) {
  database('dog_breeds').where('id', id).update(breedUpdate)
    .then(response => {
      return response.status(200).json({breedUpdate});
    })
    .catch(error => {
      return response.status(500).json({error});
    });
  } else {
    return response.status(422)
      .send('You do not have the correct parameters to complete this request');
  }
});

app.post('/api/v1/authenticate', (request, response) => {
  const {email, appName} = request.body;

  if (email && appName) {
    if (email.includes('turing.io')) {
      console.log('admin')
      var token = jwt.sign({ email, appName, admin: true }, app.get('secretKey'), { expiresIn: '48h' });
    } else {
      console.log('token')
      var token = jwt.sign({ email, appName, admin: false }, app.get('secretKey'), { expiresIn: '48h' });
    }
   return response.status(201).json({ message: 'Authentication successful. This token will expire in 48 hours', token });
  } else {
    return response.status(404).json('You do not have the correct parameters for authorization')
  }
});

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on ${app.get('port')}`)
});

module.exports = app;