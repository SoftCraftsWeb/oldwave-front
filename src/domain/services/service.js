import axios from 'axios';
import config from 'domain/config';
import { getUser } from 'domain/helpers/storage';

const user = getUser();

const service = axios.create({
  baseURL: `${config.api_url}`,
  headers: {
    'Access-Control-Allow-Origin': '*',
    Authorization: user ? `Bearer ${user.token}` : '',
  },
});

export default service;
