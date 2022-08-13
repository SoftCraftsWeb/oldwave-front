import service from 'domain/services/service';

async function list(setIsLoading) {
  setIsLoading(true);

  try {
    const response = await service.get(`/categories`);
    setIsLoading(false);
    return response.data.status === 'OK' ? response.data.data : {};
  } catch (error) {
    setIsLoading(false);
    return {};
  }
}

export default {
  list,
};
