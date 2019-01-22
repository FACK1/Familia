const User = require('../models/User.model');
const Family = require('../models/Family.model');

const getUserById = id => new Promise((resolve, reject) => {
  User.findById(id)
    .exec((err, user) => {
      if (err || !user) {
        reject(err || new Error('No User'));
      } else {
        resolve(user);
      }
    });
});

const getFamilyByUser = user => new Promise((resolve, reject) => {
  if (!user.family_id) {
    reject(new Error('No Family for This User'));
  } else {
    Family.findOne(user.family_id)
      .exec((err, family) => {
        if (err || !family) {
          reject(err || new Error('No family with user\'s family id'));
        } else {
          resolve(family);
        }
      });
  }
});


const settings = (req, res) => {
  getUserById(req.userId)
    .then(getUserById)
    .then(getFamilyByUser)
    .then((family) => {
      res.send(family.key);
    })
    .catch((err) => {
      res.send(err.message);
    });
};


module.exports = {
  settings,
};
