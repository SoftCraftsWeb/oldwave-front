import React from 'react';
import { RenderRoutes } from 'domain/helpers/routes';
import config from 'domain/config';
import { NotFoundPage, HomePage } from 'presentation/pages';
import ClientLayout from 'presentation/layouts/ClientLayout';

function ClientRoutes({ routes }) {
  return (
    <ClientLayout>
      <RenderRoutes routes={routes} />
    </ClientLayout>
  );
}

export default {
  path: '*',
  key: 'home',
  element: ClientRoutes,
  routes: [
    {
      path: config.routes.auth.home.path,
      key: 'DASHBOARD',
      exact: true,
      element: HomePage,
    },
    {
      path: '*',
      exact: true,
      key: 'NOTFOUND',
      element: NotFoundPage,
    },
  ],
};
