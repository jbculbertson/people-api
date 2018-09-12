const mongoose = require('mongoose');
const Person = mongoose.model('person');

module.exports = {
  create: (req, res) => {
    const personProperties = req.body;
    const person = new Person(personProperties);
    person.save((err, result) => {
      if (err) {
        return res.json(err).status(500);
      }
      return res.json(result).status(200);
    });
  },
}
