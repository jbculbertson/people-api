const mongoose = require('mongoose');
const async = require('async');
const Person = mongoose.model('person');

module.exports = {
  index: (req, res) => {
    const userId = req.params.userId;

    Person.find({ userId }, (err, people) => {
      if (err) {
        return res.status(500).json(err);
      }
      const json = { data: people };
      return res.status(200).json(json);
    });
  },
  batchCreateComma: (req, res) => {
    const rawArray = req.body.newPerson;
    const userId = req.body.userId;
    let successfulUpdates = 0;
    const errors = [];

    async.eachOf(rawArray, (rawInfo, index, eachCb) => {
      const [lastName, firstName, pet, favoriteColor, dateOfBirth] = rawInfo;
      const personProperties = {
        lastName,
        firstName,
        pet,
        favoriteColor,
        dateOfBirth,
        userId,
      };
      const person = new Person(personProperties)
      person.save((updateErr, updateRes) => {
        if (updateErr) {
          errors.push(`Error saving person ${firstName}${lastName}`);
        } else {
          successfulUpdates++;
        }
        eachCb();
      });

    }, () => res.status(200).json({ errors, successfulUpdates }));
  },
  batchCreateSpace: (req, res) => {
    const rawArray = req.body.newPerson;
    const userId = req.body.userId;
    let successfulUpdates = 0;
    const errors = [];

    async.eachOf(rawArray, (rawInfo, index, eachCb) => {
      const [lastName, firstName, middleInitial, pet, dateOfBirth, favoriteColor] = rawInfo;

      const personProperties = {
        lastName,
        firstName,
        middleInitial,
        pet,
        dateOfBirth,
        favoriteColor,
        userId,
      };
      const person = new Person(personProperties)
      person.save((updateErr, updateRes) => {
        if (updateErr) {
          errors.push(`Error saving person ${firstName}${lastName}`);
        } else {
          successfulUpdates++;
        }
        eachCb();
      });

    }, () => res.status(200).json({ errors, successfulUpdates }));
  },
  batchCreatePipe: (req, res) => {
    const rawArray = req.body.newPerson;
    const userId = req.body.userId;
    let successfulUpdates = 0;
    const errors = [];

    async.eachOf(rawArray, (rawInfo, index, eachCb) => {
      const [lastName, firstName, middleInitial, pet, favoriteColor, dateOfBirth] = rawInfo;

      const personProperties = {
        lastName,
        firstName,
        middleInitial,
        pet,
        favoriteColor,
        dateOfBirth,
        userId,
      };
      const person = new Person(personProperties)
      person.save((updateErr, updateRes) => {
        if (updateErr) {
          errors.push(`Error saving person ${firstName}${lastName}`);
        } else {
          successfulUpdates++;
        }
        eachCb();
      });

    }, () => res.status(200).json({ errors, successfulUpdates }));
  },
}
