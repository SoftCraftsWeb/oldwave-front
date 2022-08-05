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
        show: {
          path: '/items/:item',
          title: 'Detalle',
        },
      },
    },
  },
};
