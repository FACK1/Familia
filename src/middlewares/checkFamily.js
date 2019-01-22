const User = require('../models/User.model');

const checkFamily = (req, res, next) => {
  User.findById(req.userId).exec((err, user) => {
    if (err || !user) {
      res.redirect('/auth');
    } else if (!user.family_id) {
      res.redirect('/joinFamily');
    } else {
      req.user = user;
      next();
    }
  });
};

module.exports = checkFamily;
