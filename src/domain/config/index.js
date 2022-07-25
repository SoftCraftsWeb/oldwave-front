import routes from 'domain/config/routes';
import footer from 'domain/config/footer';

export default {
  statics: process.env.REACT_APP_CV_STATICS,
  routes,
  social_networks: {
    facebook: process.env.REACT_APP_FACEBOOK_URL,
    instagram: process.env.REACT_APP_INSTAGRAM_URL,
  },
  footer,
};
