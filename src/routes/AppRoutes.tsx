import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import LessonsPage from '../pages/LessonsPage';
import AuthenticationPage from './AuthenticationRoutes';
import Layout from '../components/layout/Layout';
import NotFoundPage from '../pages/NotFoundPage';
import FavouritePage from '../pages/FavouritePage';
import RandomPage from '../pages/RandomPage';
import RecentPage from '../pages/RecentPage';
import LessonTypePage from '../pages/LessonTypePage';
import LessonPage from '../pages/LessonPage';

const AppRoutes:React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={
          <AuthenticationPage>
            <Layout />
          </AuthenticationPage>
        }>
          <Route path='' element={<HomePage />} />
          <Route path='lesson' element={<LessonPage />} />
          <Route path='lessons'>
            <Route path='' element={<LessonsPage />} />
            <Route path=':route' element={<LessonTypePage />} />
          </Route>
          <Route path='favourites' element={<FavouritePage />} />
          <Route path='random' element={<RandomPage />} />
          <Route path='recent' element={<RecentPage />} />
        </Route>
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes;
