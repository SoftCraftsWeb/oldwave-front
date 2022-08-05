import routes from 'domain/config/routes';
import footer from 'domain/config/footer';
import banners from 'domain/config/banners';
import categories from 'domain/config/categories';

export default {
  statics: process.env.REACT_APP_CV_STATICS,
  routes,
  social_networks: {
    facebook: process.env.REACT_APP_FACEBOOK_URL,
    instagram: process.env.REACT_APP_INSTAGRAM_URL,
  },
  footer,
  banners,
  categories,
};
