/* eslint-disable import/no-extraneous-dependencies */
import { lazy, Suspense } from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import routes from './routes';

const Pages = () => {
  return (
    <Suspense>
      <BrowserRouter>
        <Routes>
          {routes.map(route => {
            const Component = lazy(() => route.component);
            return <Route key={route.path} path={route.path} element={<Component />} />;
          })}
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
};

export default Pages;
