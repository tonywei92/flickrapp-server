require('dotenv').config();
const request = require('supertest');
const app = require('../app');

describe('Integration test', () => {
  it('should get response 200 from Flickr public feeds', async () => {
    await request(app).get('/api/v1/flickr').expect(200);
  });
});
