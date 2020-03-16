import URL_CONSTANTS from './url.constants';
const constants = {
  APP_HEADER: 'Blog It',
  TYPE_AHEAD_CHAR_LENGTH: 3,
  NO_BLOG_FOUND: 'No Data Yet!',
  SIDE_NAV: {
    NAV_DATA: [
      {
        title: 'Home',
        path: URL_CONSTANTS.DEFAULT,
        placeHolder: 'Search'
      },
      {
        title: 'Movie Reviews',
        path: URL_CONSTANTS.MOVIE_REVIEWS,
        placeHolder: 'Search Reviews'
      },
      {
        title: 'Blogs',
        path: URL_CONSTANTS.MY_BLOGS,
        placeHolder: 'Search Blogs'
      }
    ],
    DATA_KEYS: {
      TITLE: 'title',
      PATH: 'path',
      PLACEHOLDER: 'placeHolder'
    },
    NAV_TITLES: {
      HOME: 'Home',
      REVIEWS: 'Movie Reviews',
      BLOGS: 'Blogs'
    }
  },
  AXIOS_METHODS: {
    GET: 'get',
    POST: 'post',
    PATCH: 'patch',
    DELETE: 'delete',
    PUT: 'put'
  },
  NODE_ENVIRONMENT: {
    PROD: 'production'
  },
  REACT_APP_REQUEST_API_KEY: process.env.REACT_APP_REQUEST_API_KEY,
  SUCCESS_STATUS: 200,
  REVIEW_OFFSET_VALUE: 10
};
export default constants;
