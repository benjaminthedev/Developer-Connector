const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator/check');

// @route  GET api/users
// @desc   Register User     
// @access Public 
router.post('/', [
    check('name', 'Name is needed').not().isEmpty(),
    check('email', 'add read email').isEmail(),
    check('password', 'add a password dummy').isLength({ min: 6 })
], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }
    res.send('User Route')
});

module.exports = router;