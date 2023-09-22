import React from 'react'
import { Route, Routes } from  'react-router-dom';
import { Home } from '../pages/Home';
import { Login } from '../pages/Login';
import { Register } from '../pages/Register';
import { Tours } from '../pages/Tours';
import { TourDetails } from '../pages/TourDetails';
import { SearchResultList } from '../pages/SearchResultList';
import { Thankyou } from '../pages/Thankyou';
import { About } from '../pages/About';
import { Gallery } from '../pages/Gallery';

export const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/'  element={<Home /> } />
        <Route path='/home'  element={<Home /> } />
        <Route path='/about'  element={<About /> } />
        <Route path='/login'  element={<Login /> } />
        <Route path='/register'  element={<Register /> } />
        <Route path='/tours'  element={<Tours /> } />
        <Route path='/tours/:id'  element={<TourDetails /> } />
        <Route path='/tours/search'  element={<SearchResultList /> } />
        <Route path='/thank-you'  element={<Thankyou /> } />
        <Route path='/gallery'  element={<Gallery /> } />
    </Routes>
  )
}
