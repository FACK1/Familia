const randomize = require('randomatic');
const Family = require('../models/Family.model');
const User = require('../models/User.model');

const checkSavedFamily = isSavedFamily => new Promise((resolve, reject) => {
  if (!isSavedFamily) {
    reject();
  } else {
    resolve(isSavedFamily);
  }
});

const createFamily = (req, res) => {
  const { familyName } = req.body;
  const family = new Family({
    name: familyName,
    key: randomize('A0', 16),
  });

  family
    .save()
    .then(checkSavedFamily)
    .then(
      savedFamily => new Promise((resolve, reject) => {
        User.findById(req.userId, (findErr, user) => {
          user.family_id = savedFamily.id;
          user.save((err, updatedUser) => {
            if (err) {
              reject(err);
            } else {
              resolve(updatedUser);
            }
          });
        });
      }),
    )
    .then(() => {
      res.redirect('/settings');
    })
    .catch(() => {
      res.redirect('/');
    });
};

const findFamily = key => new Promise((resolve, reject) => {
  Family.findOne({ key }).then((foundFam) => {
    if (!foundFam) {
      reject(foundFam);
    } else {
      resolve(foundFam);
    }
  });
});

const join = (req, res) => {
  const { key } = req.body;
  findFamily(key).then((foundFam) => {
    User.findById(req.userId, (findErr, foundUser) => {
      foundUser.family_id = foundFam.id;
      foundUser.save((err) => {
        if (err) {
          res.send(err);
        } else {
          res.redirect('/');
        }
      });
    });
  });
};

const index = (req, res) => {
  res.render('joinFamily', { req });
};

module.exports = {
  createFamily,
  index,
  join,
};
