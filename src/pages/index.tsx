/* eslint-disable import/no-extraneous-dependencies */
import { lazy, Suspense } from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import routes from './routes';
import { theme } from '../configs/theme';

const Pages = () => {
  return (
    <Suspense>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            {routes.map(route => {
              const Component = lazy(() => route.component);
              return <Route key={route.path} path={route.path} element={<Component />} />;
            })}
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </Suspense>
  );
};

export default Pages;
