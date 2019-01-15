const bcrypt = require('bcryptjs');
const User = require('../models/User.model.js');

const generateSalt = password => new Promise((resolve, reject) => {
  bcrypt.genSalt(10, (saltErr, salt) => {
    if (saltErr) {
      reject(saltErr);
    } else {
      resolve(salt);
    }
  });
});
const checkUser = username => new Promise((resolve, reject) => {
  User.findOne({ username }).then((user) => {
    if (user) {
      reject('already registered');
    } else {
      resolve();
    }
  });
});
const register = (req, res) => {
  console.log('HERE!!!', req.body);
  const { name, username, password } = req.body;
};

module.exports = { register };

bcrypt.hash(password, salt, (hashErr, hashedPassword) => {
  if (hashErr) {
    res.send('Error registering');
  } else {
    const u = new User({
      name,
      username,
      password: hashedPassword,
    });
    u.save((err) => {
      if (err) {
        res.send('There was a problem with registartion, please try again');
      } else {
        res.send('success!');
      }
    });
  }
});
