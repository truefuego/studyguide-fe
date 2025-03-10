import React from 'react'
import LoginPage from '../pages/LoginPage';
import { IAuthenticationPageProps } from './type';

const AuthenticationPage:React.FC<IAuthenticationPageProps> = ({ children }) => {
  const isUserLoggedIn = true;

  if(!isUserLoggedIn) {
    return <LoginPage />
  }

  return (
    <>{children}</>
  )
}

export default AuthenticationPage