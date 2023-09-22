import React from 'react'
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer'
import { AllRoutes } from '../../router/AllRoutes';

export const Layout = () => {
  return (
    <>
      <Header />
      <AllRoutes />
      <Footer  />
    </>
  )
}