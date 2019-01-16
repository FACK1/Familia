const bcrypt = require("bcryptjs");
const User = require("../models/User.model.js");

const index = (req, res) => {
  res.render("auth");
};

const checkUser = user =>
  new Promise((resolve, reject) => {
    User.findOne({ username: user.username }).then(foundUser => {
      if (foundUser) {
        // eslint-disable-next-line prefer-promise-reject-errors
        reject("already registered");
      } else {
        resolve(user);
      }
    });
  });

const generateSalt = () =>
  new Promise((resolve, reject) => {
    bcrypt.genSalt(10, (saltErr, salt) => {
      if (saltErr) {
        reject(saltErr);
      } else {
        resolve(salt);
      }
    });
  });

const hashPassword = user =>
  new Promise((resolve, reject) => {
    generateSalt().then(salt => {
      bcrypt.hash(user.password, salt, (hashErr, hashedPassword) => {
        if (hashErr) {
          reject(hashErr);
        } else {
          const u = new User({
            name: user.name,
            username: user.username,
            password: hashedPassword
          });
          resolve(u);
        }
      });
    });
  });

const register = (req, res) => {
  const { name, username, password } = req.body;
  const u = new User({
    name,
    username,
    password
  });
  checkUser(u)
    .then(hashPassword)
    .then(acceptedUser => {
      acceptedUser.save(err => {
        if (err) {
          res.send("There was a problem with registartion, please try again");
        } else {
          res.redirect("/");
        }
      });
    })
    .catch(err => {
      res.send(err);
    });
};

/*=================login starts here================*/

module.exports = { register, index};
