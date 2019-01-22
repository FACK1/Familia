const jwt = require('jsonwebtoken');
require('env2')('config.env');

const checkAuth = (req, res, next) => {
  const hashedId = req.cookies.id;

  if (!hashedId) {
    res.redirect('/auth');
  } else {
    jwt.verify(hashedId, process.env.SECRET, (err, decoded) => {
      if (err) {
        res.redirect('/auth');
      } else {
        req.userId = decoded;
        next();
      }
    });
  }
};

module.exports = checkAuth;
