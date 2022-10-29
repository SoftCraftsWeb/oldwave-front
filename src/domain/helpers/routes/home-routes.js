import React from 'react';
import { RenderRoutes } from 'domain/helpers/routes';
import config from 'domain/config';
import { NotFoundPage, HomePage } from 'presentation/pages';
import ClientLayout from 'presentation/layouts/ClientLayout';
import ResultsPage from 'presentation/pages/ResultsPage';
import ShowItemPage from 'presentation/pages/ShowItemPage';
import CallbackPage from 'presentation/pages/CallbackPage';
import CarDetailPage from 'presentation/pages/CarDetailPage';
import { getUser } from 'domain/helpers/storage';
import TransactionsPage from 'presentation/pages/TransactionsPage';
import TransactionShowPage from 'presentation/pages/TransactionShowPage';

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
      path: config.routes.auth.callback.path,
      key: 'callback',
      redirectHome: !!getUser(),
      element: CallbackPage,
    },
    {
      path: config.routes.auth.carDetail.path,
      key: 'carDetail',
      redirectHome: !getUser(),
      element: CarDetailPage,
    },
    {
      path: config.routes.auth.transactions.path,
      key: 'transactions',
      redirectHome: !getUser(),
      element: TransactionsPage,
    },
    {
      path: config.routes.auth.transactions_show.path,
      key: 'transactions show',
      redirectHome: !getUser(),
      element: TransactionShowPage,
    },
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
