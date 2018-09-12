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
  authenticate: (req, res) => {
    const username = req.body.username;
    const enteredPassword = req.body.password;

    return User.findOne({ username }, (UserFindError, user) => {
      if (UserFindError) { return res.status(500).json(UserFindError); }

      if (!user) {
        return res.status(403).send();
      }

      const storedPassword = user.password;
      if (storedPassword === enteredPassword) {
        return res.status(200).json(user);
      } else {
        return res.status(403).send();
      }
    });
  }
}
