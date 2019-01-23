const jwt = require('jsonwebtoken');
require('env2')('config.env');

const checkGuest = (req, res, next) => {
  const hashedId = req.cookies.id;

  if (!hashedId) {
    next();
  } else {
    jwt.verify(hashedId, process.env.SECRET, (err) => {
      if (err) {
        next();
      } else {
        res.redirect('/');
      }
    });
  }
};

module.exports = checkGuest;
