const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/user');
const emailcontrole = require('../middleware/emailcontrole');
const passwordcontrole = require('../middleware/passwordcontrole');

router.get('/signup', emailcontrole, passwordcontrole, userCtrl.signup);
router.post('/login', userCtrl.login);

module.exports = router;