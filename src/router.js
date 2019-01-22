const express = require('express');
const middlewares = require('./middlewares/index.js');

const router = express.Router();

const authController = require('./controllers/authController');
const familyController = require('./controllers/familyController');

router.get('/', [middlewares.checkAuth, middlewares.checkFamily], (req, res) => {
  res.render('home');
});

router.get('/joinFamily', familyController.index);
router.post('/join', middlewares.checkAuth, familyController.join);
router.post('/createFamily', middlewares.checkAuth, familyController.createFamily);

router.post('/register', authController.register);
router.get('/auth', authController.index);
router.post('/login', authController.login);

module.exports = router;
