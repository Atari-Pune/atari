// src/AppRoutes.jsx
import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import PageLoader from './PageLoader';

// Lazy load pages
const Home = lazy(() => import('../Components/Home/index'));
// const Mission = lazy(() => import('./pages/About/Mission'));
// const Vision = lazy(() => import('./pages/About/Vision'));
// const Staff = lazy(() => import('./pages/Staff'));
// const NotFound = lazy(() => import('./pages/NotFound'));

const AppRoutes = () => {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about/mission" element={<Mission />} />
        <Route path="/about/vision" element={<Vision />} />
        <Route path="/staff" element={<Staff />} />
        <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
