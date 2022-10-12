import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/home';

import * as routes from './routes';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={routes.homeRoute} element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
