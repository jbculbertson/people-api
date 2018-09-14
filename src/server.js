const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
require('./models/person.js');
require('./models/user.js');
const userController = require('./controllers/user.js');
const personController = require('./controllers/person.js');

const app = express()
const port = process.env.PORT || 3010;

function start() {
  const bodyparserOptions = { extended: true };
  app.use(cors());
  app.use(bodyParser.json(bodyparserOptions))
    .use(bodyParser.urlencoded(bodyparserOptions));
  app.post('/authenticate', userController.authenticate);
  app.post('/register', userController.create);

  app.get('/person/:userId', personController.index);
  app.post('/person/batch/comma', personController.batchCreateComma);
  app.post('/person/batch/space', personController.batchCreateSpace);
  app.post('/person/batch/pipe', personController.batchCreatePipe);

  app.listen(port, () => console.log(`Wistia server listening on port ${port}!`))
}

function startDb() {
  const url = 'mongodb://jeff:Password21@ds253922.mlab.com:53922/wistia-api'
  mongoose.connect(url, () => {
    console.log('Mongo connected');
    start();
  });
};

startDb();

module.exports = {
  startDb,
}
