const express = require('express');
const middlewares = require('./middlewares');

const router = express.Router();
const authController = require('./controllers/authController');

router.get('/', [middlewares.checkAuth, middlewares.chechFamily], (req, res) => {
  res.render('home');
});

router.get('/joinFamily', (req, res) => {
    res.send('Join Family Page!');
});

router.post('/register', authController.register);
router.get('/auth', authController.index);

module.exports = router;
