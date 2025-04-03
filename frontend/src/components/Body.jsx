import React from 'react'
import { Store } from '../pages/store/Store';
import SignIn from '../pages/auth/SignIn';
import { HeaderComponent } from './HeaderComponent';
import { FooterComponent } from './FooterComponent';
import { Outlet } from 'react-router-dom';

export const Body = () => {
   
  return (
    <div >
      <HeaderComponent/>
      <Outlet/>
      
      <FooterComponent/>
    </div>
  )
}

export default Body