import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import LessonsPage from '../pages/LessonsPage';
import AuthenticationPage from './AuthenticationRoutes';
import Layout from '../components/layout/Layout';
import NotFoundPage from '../pages/NotFoundPage';

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
          <Route path='lessons' element={<LessonsPage />} />
        </Route>
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes;
