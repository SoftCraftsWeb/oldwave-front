import service from 'domain/services/service';

function list(search, category, paging, setIsLoading) {
  setIsLoading(true);

  const params = {
    limit: paging.limit,
    offset: paging.offset,
    category,
    search,
  };

  return getItems({ params })
    .then((response) => {
      setIsLoading(false);
      return response;
    })
    .catch((e) => {
      setIsLoading(false);
      const error = (e && e.message) || e.statusText;
      return Promise.reject(error);
    });
}

async function rating(setIsLoading) {
  setIsLoading(true);
  /** return getItems()
   .then((response) => {
        setIsLoading(false);
        return response;
      })
   .catch((e) => {
        setIsLoading(false);
        const error = (e && e.message) || e.statusText;
        return Promise.reject(error);
      });
   */

  setIsLoading(false);
  return [
    {
      id: 1,
      name: 'Producto prueba',
      brand: 'Apple',
      image: 'https://i.blogs.es/187a45/iphone-11-pro-02/840_560.jpg',
      city: 'Medellín',
      price: 2000,
      currency: 'COP',
      seller: 'Pepito Perez',
      rating: 5,
    },
    {
      id: 2,
      name: 'Producto prueba',
      brand: 'Apple',
      image: 'https://i.blogs.es/187a45/iphone-11-pro-02/840_560.jpg',
      city: 'Medellín',
      price: 2000,
      currency: 'COP',
      seller: 'Pepito Perez',
      rating: 5,
    },
    {
      id: 3,
      name: 'Producto prueba',
      brand: 'Apple',
      image: 'https://i.blogs.es/187a45/iphone-11-pro-02/840_560.jpg',
      city: 'Medellín',
      price: 2000,
      discount: 0.3,
      currency: 'COP',
      seller: 'Pepito Perez',
      rating: 5,
    },
    {
      id: 4,
      name: 'Producto prueba',
      brand: 'Apple',
      image: 'https://i.blogs.es/187a45/iphone-11-pro-02/840_560.jpg',
      city: 'Medellín',
      price: 2000,
      currency: 'COP',
      seller: 'Pepito Perez',
      rating: 5,
    },
    {
      id: 5,
      name: 'Producto prueba',
      brand: 'Apple',
      image: 'https://i.blogs.es/187a45/iphone-11-pro-02/840_560.jpg',
      city: 'Medellín',
      price: 2000,
      currency: 'COP',
      seller: 'Pepito Perez',
      rating: 5,
    },
    {
      id: 6,
      name: 'Producto prueba',
      brand: 'Apple',
      image: 'https://i.blogs.es/187a45/iphone-11-pro-02/840_560.jpg',
      city: 'Medellín',
      price: 120900,
      discount: 0.1,
      currency: 'COP',
      seller: 'Pepito Perez',
      rating: 5,
    },
    {
      id: 1,
      name: 'Producto prueba',
      brand: 'Apple',
      image: 'https://i.blogs.es/187a45/iphone-11-pro-02/840_560.jpg',
      city: 'Medellín',
      price: 2000,
      currency: 'COP',
      seller: 'Pepito Perez',
      rating: 5,
    },
    {
      id: 2,
      name: 'Producto prueba',
      brand: 'Apple',
      image: 'https://i.blogs.es/187a45/iphone-11-pro-02/840_560.jpg',
      city: 'Medellín',
      price: 2000,
      currency: 'COP',
      seller: 'Pepito Perez',
      rating: 5,
    },
    {
      id: 3,
      name: 'Producto prueba',
      brand: 'Apple',
      image: 'https://i.blogs.es/187a45/iphone-11-pro-02/840_560.jpg',
      city: 'Medellín',
      price: 2000,
      discount: 0.3,
      currency: 'COP',
      seller: 'Pepito Perez',
      rating: 5,
    },
    {
      id: 4,
      name: 'Producto prueba',
      brand: 'Apple',
      image: 'https://i.blogs.es/187a45/iphone-11-pro-02/840_560.jpg',
      city: 'Medellín',
      price: 2000,
      currency: 'COP',
      seller: 'Pepito Perez',
      rating: 5,
    },
    {
      id: 5,
      name: 'Producto prueba',
      brand: 'Apple',
      image: 'https://i.blogs.es/187a45/iphone-11-pro-02/840_560.jpg',
      city: 'Medellín',
      price: 20000,
      currency: 'COP',
      seller: 'Pepito Perez',
      rating: 5,
    },
    {
      id: 6,
      name: 'Producto prueba',
      brand: 'Apple',
      image: 'https://i.blogs.es/187a45/iphone-11-pro-02/840_560.jpg',
      city: 'Medellín',
      price: 120900,
      discount: 0.1,
      currency: 'COP',
      seller: 'Pepito Perez',
      rating: 5,
    },
    {
      id: 1,
      name: 'Producto prueba',
      brand: 'Apple',
      image: 'https://i.blogs.es/187a45/iphone-11-pro-02/840_560.jpg',
      city: 'Medellín',
      price: 2000,
      currency: 'COP',
      seller: 'Pepito Perez',
      rating: 5,
    },
    {
      id: 2,
      name: 'Producto prueba',
      brand: 'Apple',
      image: 'https://i.blogs.es/187a45/iphone-11-pro-02/840_560.jpg',
      city: 'Medellín',
      price: 2000,
      currency: 'COP',
      seller: 'Pepito Perez',
      rating: 5,
    },
  ];
}

function getItems(params) {
  return service
    .get(`/items`, params)
    .then((response) => response.data)
    .catch((e) => {
      const error = (e && e.message) || e.statusText;
      return Promise.reject(error);
    });
}

function show(id) {
  return service
    .get(`/items/${id}`)
    .then((response) => response.data)
    .catch((e) => {
      const error = (e && e.message) || e.statusText;
      return Promise.reject(error);
    });
}

export default {
  show,
  list,
  rating,
};
