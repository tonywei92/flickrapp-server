const router = require('express').Router();
const { index } = require('./FlickrController');

router.get('/', index);

module.exports = router;
