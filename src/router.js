const express = require('express');
const middlewares = require('./middlewares');

const router = express.Router();
const authController = require('./controllers/authController');

router.get('/', [middlewares.checkAuth], (req, res) => {
  res.render('home');
});

router.post('/register', authController.register);
router.get('/auth', authController.index);

module.exports = router;
