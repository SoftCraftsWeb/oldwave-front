import service from 'domain/services/service';

async function loginFromProvider(setIsLoading, driver) {
  setIsLoading(true);
  try {
    const response = await service.get(`/${driver}/redirect`);
    setIsLoading(false);
    return response.data ?? null;
  } catch (error) {
    setIsLoading(false);
    return null;
  }
}

async function callback(setIsLoading, driver, query) {
  setIsLoading(true);
  try {
    const response = await service.get(`/${driver}/callback${query}`);
    setIsLoading(false);
    return response.data ?? null;
  } catch (error) {
    setIsLoading(false);
    return null;
  }
}

async function logout(setIsLoading) {
  setIsLoading(true);
  try {
    const response = await service.post(`/logout`);
    setIsLoading(false);
    return response.data;
  } catch (error) {
    setIsLoading(false);
    return {};
  }
}

async function login(setIsLoading, data) {
  setIsLoading(true);
  try {
    const response = await service.post(`/login`, data);
    setIsLoading(false);
    return response.data;
  } catch (error) {
    setIsLoading(false);
    return {};
  }
}

async function registerUser(setIsLoading, data) {
  setIsLoading(true);
  try {
    const response = await service.post(`/register`, data);
    setIsLoading(false);
    return response.data;
  } catch (error) {
    setIsLoading(false);
    return {};
  }
}

export default {
  loginFromProvider,
  login,
  callback,
  logout,
  registerUser,
};
