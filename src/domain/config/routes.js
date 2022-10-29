module.exports = {
  auth: {
    home: {
      path: '/',
      title: 'Inicio',
    },
    callback: {
      path: '/login-callback/:driver',
      title: 'Callback Login',
    },
    carDetail: {
      path: '/carrito-compras',
      title: 'Carrito de compras',
    },
    transactions: {
      path: '/mis-pedidos',
      title: 'Pedidos',
    },
    items: {
      path: '/buscar',
      title: 'Buscador',
      routes: {
        categories: {
          path: '/buscar/:category',
          title: 'Categoría',
        },
        show: {
          path: '/items/:item',
          title: 'Detalle',
        },
      },
    },
  },
};
