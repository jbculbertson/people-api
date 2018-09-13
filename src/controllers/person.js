const mongoose = require('mongoose');
const async = require('async');
const Person = mongoose.model('person');

module.exports = {
  batchCreateComma: (req, res) => {
    const rawArray = req.body;
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
    const rawArray = req.body;
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
    const rawArray = req.body;
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
