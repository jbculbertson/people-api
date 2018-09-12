const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express()
const port = process.env.PORT || 3000;
const userController = require('./controllers/user');
const personController = require('./controllers/person');

function start() {
  const bodyparserOptions = { extended: true };
  app.use(cors());
  app.use(bodyParser.json(bodyparserOptions))
    .use(bodyParser.urlencoded(bodyparserOptions));

  app.post('/user', userController.create);
  app.post('/person', personController.create);

  app.listen(port, () => console.log(`Wistia server listening on port ${port}!`))
}

const url = 'mongodb://jeff:Password21@ds253922.mlab.com:53922/wistia-api'
mongoose.connect(url, () => {
  console.log('Mongo connected');
  start();
});
