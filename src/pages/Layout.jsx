import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../componants/Header'
import Footer from '../componants/Footer'


export default function Layout() {
  return (
    
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}
