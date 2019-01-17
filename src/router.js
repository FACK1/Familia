const express = require('express');

const router = express.Router();
const authController = require('./controllers/authController');

router.get('/', (req, res) => {
  res.render('home');
});

router.post('/register', authController.register);
router.get('/auth', authController.index);

module.exports = router;
