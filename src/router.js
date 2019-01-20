const express = require('express');
const middlewares = require('./middlewares');
const router = express.Router();

const authController = require('./controllers/authController');
const familyController = require('./controllers/familyController');

router.get('/', [middlewares.checkAuth, middlewares.checkFamily], (req, res) => {
  res.render('home');
});

router.get('/joinFamily', (req, res) => {
  res.send('Join Family Page!');
});

router.post('/createFamily', [middlewares.checkAuth] , familyController.createFamily);

router.post('/register', authController.register);
router.get('/auth', authController.index);

module.exports = router;
