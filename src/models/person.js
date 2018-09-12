const mongoose = require('mongoose');
const random = require('meteor-random');

const Schema = mongoose.Schema;

const schema = new Schema({
  _id: {
    type: String,
    default: function defaultId() { return random.id([24]); },
  },
  firstName: String,
  lastName: String,
  middleInitial: String,
  pet: String,
  favoriteColor: String,
  dateOfBirth: Date,
}, {
  collection: 'person',
  timestamps: true,
});

const Person = mongoose.model('person', schema);

module.exports = {
  Person,
};
