const express = require('express');
const middlewares = require('./middlewares');

const router = express.Router();

const authController = require('./controllers/authController');
const familyController = require('./controllers/familyController');
const itemController = require('./controllers/itemController');
const userController = require('./controllers/userController');

router.get('/', [middlewares.checkAuth, middlewares.checkFamily], itemController.index);


router.get('/joinFamily', familyController.index);
router.post('/createFamily', [middlewares.checkAuth], familyController.createFamily);

router.post('/register', authController.register);
router.get('/auth', authController.index);

router.post('/login', authController.login);

router.post('/addItem', [middlewares.checkAuth, middlewares.checkFamily], itemController.createItem);

router.get('/settings', [middlewares.checkAuth, middlewares.checkFamily], userController.settings);

module.exports = router;
