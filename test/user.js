const mongoose = require('mongoose');
const express = require('express');
const request = require('request');
const cors = require('cors');
const bodyParser = require('body-parser');
const { expect, assert } = require('chai');
const { get, set } = require('lodash');

const USER_CREATE = '/register';
const USER_AUTH = '/authenticate';
require('../src/models/user.js');
const User = mongoose.model('user');
const userController = require('../src/controllers/user.js');

const baseUrl = 'http://localhost:3005';

describe('#user routes', function() {
  before((done) => {
    const url = 'mongodb://jeff:Password21@ds255282.mlab.com:55282/wistia-test-api'
    const port = 3005;

    mongoose.connect(url, () => {
      const app = express()
      const bodyparserOptions = { extended: true };
      app.use(cors());
      app.use(bodyParser.json(bodyparserOptions))
        .use(bodyParser.urlencoded(bodyparserOptions));

      app.post('/register', userController.create);
      app.post('/authenticate', userController.authenticate);

      app.listen(port, () => console.log(`Wistia TEST server listening on port ${port}!`))
      done()
    });
  });

  afterEach((done) => {
    done()
  })

  it('user/create creates a new user', function(done) {
    const newUser = {
      username: 'Jim',
      password: 'Peters',
    }
    request.post({
      url: `${baseUrl}${USER_CREATE}`,
      body: newUser,
      headers: 'Accept: application/json',
      json: true,
    },
      function(err, res) {
        const body = get(res, 'body');
        expect(body.firstName).to.equal(newUser.firstName);
        expect(body.lastName).to.equal(newUser.lastName);
        expect(res.statusCode).to.equal(200);
        done();
    });
  });
  it('user/create creates a 2nd new user', function(done) {
    const newUser = {
      username: 'Peter',
      password: 'Jackson',
    }
    request.post({
      url: `${baseUrl}${USER_CREATE}`,
      body: newUser,
      headers: 'Accept: application/json',
      json: true,
    },
      function(err, res) {
        const body = get(res, 'body');
        expect(body.username).to.equal(newUser.username);
        expect(body.password).to.equal(newUser.password);
        expect(res.statusCode).to.equal(200);

        request.post({
          url: `${baseUrl}${USER_AUTH}`,
          body: newUser,
          headers: 'Accept: application/json',
          json: true,
        },
          function(err, res) {
            const body = get(res, 'body');
            expect(body.username).to.equal(newUser.username);
            expect(body.password).to.equal(newUser.password);
            expect(res.statusCode).to.equal(200);


            done();
        });

    });
  });
});
