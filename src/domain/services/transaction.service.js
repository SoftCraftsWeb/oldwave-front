import service from 'domain/services/service';

function index(setIsLoading) {
  setIsLoading(true);

  return service
    .get(`/transactions`)
    .then((response) => {
      setIsLoading(false);
      return response.data.status === 'OK'
        ? response.data.data.transactions
        : {};
    })
    .catch((e) => {
      setIsLoading(false);
      const error = (e && e.message) || e.statusText;
      return Promise.reject(error);
    });
}

function show(reference, setIsLoading) {
  setIsLoading(true);
  return service
    .put(`/transaction/${reference}`)
    .then((response) => {
      setIsLoading(false);
      return response.data.status === 'OK' ? response.data.data[0] : {};
    })
    .catch((e) => {
      const error = (e && e.message) || e.statusText;
      return Promise.reject(error);
    });
}

function process(data, setIsLoading) {
  setIsLoading(true);
  return service
    .post(`/transaction`, data)
    .then((response) => {
      setIsLoading(false);
      return response.data.status === 'OK'
        ? response.data.data.redirect_url
        : null;
    })
    .catch((e) => {
      const error = (e && e.message) || e.statusText;
      window.location.href = 'not-found';
      return error;
    });
}

export default {
  show,
  index,
  process,
};
