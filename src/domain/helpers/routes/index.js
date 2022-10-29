import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import HOME_ROUTES from 'domain/helpers/routes/home-routes.js';
import config from 'domain/config';

export function RenderRoutes({ routes, setIsLoading, isLoading }) {
  return (
    <Routes>
      {routes.map((route) => (
        <Route
          path={route.path}
          key={route.key}
          element={
            route.redirectHome ? (
              <Navigate
                to={{
                  pathname: config.routes.auth.home.path,
                }}
              />
            ) : (
              <route.element
                props={route}
                routes={route.routes}
                setIsLoading={setIsLoading}
                isLoading={isLoading}
              />
            )
          }
        />
      ))}
    </Routes>
  );
}

export const ROUTES = [HOME_ROUTES];
