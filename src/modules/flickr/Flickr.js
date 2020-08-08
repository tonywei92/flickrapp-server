const config = require('config');
const querystring = require('querystring');
const xml2js = require('xml2js');

const { processors } = xml2js;
const axios = require('axios').create({
  baseURL: config.get('flickr.public_feed_url'),
});

const xmlParser = xml2js.Parser({
  // allow colon key parsing.
  // example: <flickr: nsid>
  tagNameProcessors: [processors.stripPrefix],
});

const parseFlickrFeed = (data) =>
  new Promise((resolve, reject) => {
    // parse xml response from flickr to json
    xmlParser.parseString(data, (err, jsonResult) => {
      if (err) return reject(err);
      const result = {
        data: [],
      };

      const entries = jsonResult.feed.entry;
      entries.forEach((entry) => {
        // recreate structure based on needs
        result.data.push({
          title: entry.title[0],
          flickr_link: entry.link[0].$.href,
          direct_link: entry.link[1].$.href,
          published_at: entry.published[0],
          categories: entry.category.map((category) => category.$.term),
          author: {
            name: entry.author[0].name[0],
            avatar: entry.author[0].buddyicon[0],
            uri: entry.author[0].uri[0],
          },
        });
      });
      resolve(result);
    });
  });
const getFlickrPublicPhotoFeed = async (tags) => {
  const response = await axios.get(`?${querystring.stringify({ tags })}`);
  const { data } = response;
  return parseFlickrFeed(data);
};

module.exports = {
  getFlickrPublicPhotoFeed,
};
