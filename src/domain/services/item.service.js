import service from 'domain/services/service';

function list(search, category, paging, setIsLoading) {
  setIsLoading(true);

  const params = {
    limit: paging.limit,
    offset: paging.offset,
    category,
    search,
  };

  return service
    .get(`/items`, { params })
    .then((response) => {
      setIsLoading(false);
      return response.data;
    })
    .catch((e) => {
      setIsLoading(false);
      const error = (e && e.message) || e.statusText;
      return Promise.reject(error);
    });
}

async function rating(setIsLoading) {
  setIsLoading(true);
  return service
    .get(`items/rating/all`)
    .then((response) => {
      setIsLoading(false);
      return response.data;
    })
    .catch((e) => {
      setIsLoading(false);
      const error = (e && e.message) || e.message;
      return Promise.reject(error);
    });
}

function show(id) {
  return service
    .get(`/items/${id}`)
    .then((response) => response.data)
    .catch((e) => {
      const error = (e && e.message) || e.statusText;
      return error;
    });
}

export default {
  show,
  list,
  rating,
};
