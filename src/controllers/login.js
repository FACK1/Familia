// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
// const User = require('../models/User.model.js');
// require('env2')('./config.env');
//
// const { SECRET } = process.env;
//
// const checkUser = user => new Promise((resolve, reject) => {
//   User.findOne({ username: user.username }).then((foundUser) => {
//     if (!foundUser) {
//       reject('username does not exist');
//     } else {
//       resolve(user);
//     }
//   });
// });
// const checkPassword = user => new Promise((resolve, reject) => {
//   User.findOne({ username: user.username }).then((foundUser) => {
//     if (!foundUser) {
//       reject('username does not exist');
//     } else {
//       resolve(user);
//     }
//   });
// });
