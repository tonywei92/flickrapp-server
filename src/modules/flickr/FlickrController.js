const Flickr = require('./Flickr');

const index = async (req, res, next) => {
  const { tags } = req.query;
  try {
    const result = await Flickr.getFlickrPublicPhotoFeed(tags);
    res.json(result);
  } catch (err) {
    // catch error on the express error handler
    next(err);
  }
};

module.exports = {
  index,
};
