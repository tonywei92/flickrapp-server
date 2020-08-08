require('dotenv').config();

const { getFlickrPublicPhotoFeed } = require('../Flickr');
// import sample flickr response data
const flickrResponseMock = require('./flickrResponse.mock');

// Mock Axios
const mockAxios = require('axios');
jest.mock('axios', () => {
  const mockAxios = jest.genMockFromModule('axios');
  mockAxios.create = jest.fn(() => mockAxios);
  mockAxios.get = jest.fn(() => jest.fn());
  return mockAxios;
});

describe('Flickr XML response parsing unit Test', () => {
  it('should return correct parsed data on request public feeds', async () => {
    // prepare axios response and expected
    const response = {
      data: flickrResponseMock,
    };
    const expected = {
      data: [
        {
          title: 'IMG_4761.jpg',
          flickr_link:
            'https://www.flickr.com/photos/40129895@N03/50200899608/',
          direct_link: 'https://creativecommons.org/licenses/by/2.0/deed.en',
          published_at: '2020-08-08T07:05:39Z',
          categories: ['nhadatvideo'],
          author: {
            name: 'nhadatvideo',
            avatar:
              'https://combo.staticflickr.com/pw/images/buddyicon11.png#40129895@N03',
            uri: 'https://www.flickr.com/people/40129895@N03/',
          },
        },
      ],
    };
    mockAxios.get.mockResolvedValueOnce(response);

    const result = await getFlickrPublicPhotoFeed();
    expect(result).toEqual(expected);

    // make sure axios "get" only once,
    // we don't want to make mistake calling it twice
    expect(mockAxios.get).toHaveBeenCalledTimes(1);
  });
});
