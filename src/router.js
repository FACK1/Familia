const express = require('express');
const middlewares = require('./middlewares/index.js');

const router = express.Router();

const authController = require('./controllers/authController');
const familyController = require('./controllers/familyController');
const itemController = require('./controllers/itemController');
const userController = require('./controllers/userController');

router.get('/', [middlewares.checkAuth, middlewares.checkFamily], itemController.index);

router.get('/joinFamily', familyController.index);
router.post('/join', middlewares.checkAuth, familyController.join);
router.post('/createFamily', middlewares.checkAuth, familyController.createFamily);

router.post('/register', authController.register);
router.get('/auth', [middlewares.checkGuest], authController.index);

router.post('/login', authController.login);
router.get('/logout', [middlewares.checkAuth] ,authController.logout);
router.post(
  '/addItem',
  [middlewares.checkAuth, middlewares.checkFamily],
  itemController.createItem,
);

router.get('/settings', [middlewares.checkAuth, middlewares.checkFamily], userController.settings);

module.exports = router;
