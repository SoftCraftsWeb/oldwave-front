module.exports = {
  auth: {
    home: {
      path: '/',
      title: 'Inicio',
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
