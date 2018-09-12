const mongoose = require('mongoose');
const User = mongoose.model('user');

module.exports = {
  create: (req, res) => {
    const userProperties = req.body;
    const user = new User(userProperties);
    user.save((err, result) => {
      if (err) {
        return res.json(err).status(500);
      }
      return res.json(result).status(200);
    });
  },
}
