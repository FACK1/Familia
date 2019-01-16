const bcrypt = require('bcryptjs');
const User = require('../models/User.model.js');

const checkUser = user => new Promise((resolve, reject) => {
  User.findOne({ username: user.username }).then((foundUser) => {
    if (foundUser) {
      reject('already registered');
    } else {
      resolve(user);
    }
  });
});

const generateSalt = () => new Promise((resolve, reject) => {
  bcrypt.genSalt(10, (saltErr, salt) => {
    if (saltErr) {
      reject(saltErr);
    } else {
      resolve(salt);
    }
  });
});

const hashPassword = user => new Promise((resolve, reject) => {
  generateSalt().then((salt) => {
    bcrypt.hash(user.password, salt, (hashErr, hashedPassword) => {
      if (hashErr) {
        reject(hashErr);
      } else {
        user.password = hashedPassword;
        resolve(user);
      }
    });
  });
});

const register = (req, res) => {
  console.log('HERE!!!', req.body);
  const { name, username, password } = req.body;
  const u = new User({
    name,
    username,
    password,
  });
  checkUser(u)
    .then(hashPassword)
    .then((acceptedUser) => {
      acceptedUser.save((err) => {
        if (err) {
          res.send('There was a problem with registartion, please try again');
        } else {
          res.send('success!');
        }
      });
    })
    .catch((err) => {
      res.send(err);
    });
};
module.exports = { register };
