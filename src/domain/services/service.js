import axios from 'axios';
import config from 'domain/config';

const service = axios.create({ baseURL: `${config.api_url}` });

export default service;
