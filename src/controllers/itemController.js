const Item = require('../models/Item.model');
const User = require('../models/User.model');


const getUserById = userId => new Promise((resolve, reject) => {
  User.findById(userId)
    .exec((err, user) => {
      if (err) {
        reject(err);
      } else {
        resolve(user.family_id);
      }
    });
});


const getItemsByFamilyId = familyId => new Promise((resolve, reject) => {
  Item.find({
    family_id: familyId,
  })
    .exec((err, items) => {
      if (err || !items) {
        reject(err || items);
      } else {
        resolve(items);
      }
    });
});


const index = (req, res) => {
  getUserById(req.userId)
    .then(getItemsByFamilyId)
    .then((items) => {
      res.render('home', { items });
    })
    .catch((err) => {
      res.send('ERROR:', err);
    });
};


const createItem = (req, res) => {
  (new Promise((resolve, reject) => {
    const { itemTitle } = req.body;
    User.findById(req.userId)
      .exec((err, user) => {
        if (err) {
          reject(err);
        } else {
          const item = new Item({
            title: itemTitle,
            status: false,
            family_id: user.family_id,
          });
          resolve(item);
        }
      });
  }))
    .then(item => new Promise((resolve, reject) => {
      item.save((err, savedItem) => {
        if (!savedItem) {
          reject(err);
        } else {
          resolve();
        }
      });
    }))
    .then(() => {
      res.redirect('/');
    })
    .catch(() => {
      res.redirect('/');
    });
};

module.exports = {
  index,
  createItem,
};
