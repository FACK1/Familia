const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User.model.js');
require('env2')('config.env');

const index = (req, res) => {
  res.render('auth', { req });
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
  bcrypt
    .hash(password, 10)
    .then(
      hashedPassword => new User({
        name,
        username,
        password: hashedPassword,
      }),
    )
    .then(saveUser)
    .then(generateCookieToken)
    .then((token) => {
      res.cookie('id', token, { maxAge: 360000000 });
      res.redirect('/');
    })
    .catch((err) => {
      res.send(err);
    });
};

/*= ======login starts here======= */

const checkUser = user => new Promise((resolve, reject) => {
  User.findOne({ username: user.username }).then((foundUser) => {
    if (!foundUser) {
      reject(new Error("User doesn't Exist!"));
    } else {
      resolve(foundUser);
    }
  });
});

const login = (req, res) => {
  const { body } = req;
  const { username, password } = body;
  const registeredUser = {
    username,
    password,
  };

  checkUser(registeredUser)
    .then((checkedUser) => {
      bcrypt.compare(registeredUser.password, checkedUser.password);
      return checkedUser;
    })
    .then(checkedUser => generateCookieToken(checkedUser.id))
    .then((token) => {
      res.cookie('id', token, { maxAge: 360000000 });
      res.redirect('/');
    })
    .catch((err) => {
      res.send(err);
    });
};

const logout = (req, res) => {
  res.clearCookie('id');
  res.redirect('/');
};

module.exports = {
  register, index, login, logout,
};
