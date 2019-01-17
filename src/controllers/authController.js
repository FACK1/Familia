const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User.model.js');
require('env2')('config.env');

const index = (req, res) => {
  res.render('auth');
};


const saveUser = user => new Promise((resolve, reject) => {
  user.save((err, savedUser) => {
    if (err) {
      reject(err);
    } else {
      resolve(savedUser.id);
    }
  });
});

const generateCookieToken = id => new Promise((resolve, reject) => {
  const { SECRET } = process.env;
  jwt.sign(id, SECRET, (signErr, token) => {
    if (signErr) reject(signErr);
    else resolve(token);
  });
});


const register = (req, res) => {
  const { name, username, password } = req.body;
  bcrypt.hash(password, 10)
    .then(hashedPassword => new User({
      name,
      username,
      password: hashedPassword,
    }))
    .then(saveUser)
    .then(generateCookieToken)
    .then((token) => {
      res.cookie('id', token, { maxAge: 360000 });
      res.redirect('/');
    })
    .catch((err) => {
      res.send(err);
    });
};

module.exports = { register, index };
