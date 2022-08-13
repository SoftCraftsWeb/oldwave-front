import React from 'react';
import { RenderRoutes } from 'domain/helpers/routes';
import config from 'domain/config';
import { NotFoundPage, HomePage } from 'presentation/pages';
import ClientLayout from 'presentation/layouts/ClientLayout';
import ResultsPage from 'presentation/pages/ResultsPage';
import ShowItemPage from 'presentation/pages/ShowItemPage';

function ClientRoutes({ routes, isLoading, setIsLoading }) {
  return (
    <ClientLayout setIsLoading={setIsLoading}>
      <RenderRoutes
        routes={routes}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
      />
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
      path: config.routes.auth.items.path,
      key: 'ITEMS',
      exact: true,
      element: ResultsPage,
    },
    {
      path: config.routes.auth.items.routes.categories.path,
      key: 'ITEMS_CATEGORY',
      exact: true,
      element: ResultsPage,
    },
    {
      path: config.routes.auth.items.routes.show.path,
      key: 'ITEM_SHOW',
      exact: true,
      element: ShowItemPage,
    },
    {
      path: '*',
      exact: true,
      key: 'NOTFOUND',
      element: NotFoundPage,
    },
  ],
};
