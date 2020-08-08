const router = require('express').Router();
const FlickrRoutes = require('../modules/flickr/FlickrRoutes');

router.use('/flickr', FlickrRoutes);

module.exports = router;
